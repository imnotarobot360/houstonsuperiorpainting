# One-time setup: a Vercel Deploy Hook so the daily cron
# (app/api/cron/indexnow-scheduled) can rebuild the sitemap on days a blog post
# goes live. Owner-run:
#   powershell -ExecutionPolicy Bypass -File C:\sites\houstonsuperiorpainting\scripts\setup-sitemap-hook.ps1
Set-Location C:\sites\houstonsuperiorpainting
$p = @("-p", "v0-calendly-integration", "--scope", "info-10397368s-projects")
# -y: npx installs Vercel without stopping to ask (a hidden question froze earlier runs).
function vc { npx -y vercel @args }

# 1. Create the deploy hook. The hook URL is a secret (anyone with it can trigger
#    a deploy), so it is never printed.
Write-Host "Creating deploy hook 'sitemap' (the first run may take a minute to download Vercel)..."
$out = (vc deploy-hooks create sitemap --git-branch main @p 2>&1 | Out-String)
$m = [regex]::Match($out, 'https://api\.vercel\.com/v1/integrations/deploy/[A-Za-z0-9_/]+')
if (-not $m.Success) {
  $list = (vc deploy-hooks list @p 2>&1 | Out-String)
  $m = [regex]::Match($list, 'https://api\.vercel\.com/v1/integrations/deploy/[A-Za-z0-9_/]+')
}
if (-not $m.Success) {
  Write-Host "Could not create the hook. Vercel said:"
  Write-Host ($out -replace 'https://api\.vercel\.com/\S+', '<url hidden>')
  exit 1
}
$hook = $m.Value
Write-Host "Deploy hook ready."

# 2. Save it as SITEMAP_DEPLOY_HOOK_URL for Production.
$hook | vc env add SITEMAP_DEPLOY_HOOK_URL production @p 2>&1 | Out-Null
$check = (vc env ls production @p 2>&1 | Out-String)
if ($check -match 'SITEMAP_DEPLOY_HOOK_URL') { Write-Host "SITEMAP_DEPLOY_HOOK_URL saved for Production." } else { Write-Host "Saving the variable FAILED."; exit 1 }

# 3. Trigger the hook once: tests it AND redeploys so the site picks up the new variable.
$r = Invoke-RestMethod -Method Post -Uri $hook
Write-Host "Hook test: deploy $($r.job.state) (a new production build starts now)."
