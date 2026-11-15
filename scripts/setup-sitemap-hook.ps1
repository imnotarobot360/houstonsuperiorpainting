# One-time setup: a Vercel Deploy Hook so the daily cron
# (app/api/cron/indexnow-scheduled) can rebuild the sitemap on days a blog post
# goes live. Owner-run:
#   powershell -ExecutionPolicy Bypass -File C:\sites\houstonsuperiorpainting\scripts\setup-sitemap-hook.ps1
Set-Location C:\sites\houstonsuperiorpainting
$p = @("-p", "v0-calendly-integration", "--scope", "info-10397368s-projects")
# -y: npx installs Vercel without asking.
function vc { npx -y vercel @args }
$urlRe = 'https://api\.vercel\.com/v1/integrations/deploy/[A-Za-z0-9_/]+'

# 1. Reuse the hook if an earlier run already made it; otherwise create it.
#    Creating runs straight in this window (not captured), because Vercel may
#    ask a question here and earlier runs froze when the question was hidden.
#    The hook URL is a secret: don't paste it anywhere.
$m = [regex]::Match((vc deploy-hooks list @p 2>&1 | Out-String), $urlRe)
if (-not $m.Success) {
  Write-Host "Creating deploy hook 'sitemap'. If Vercel asks a question, answer it (usually y + Enter)."
  vc deploy-hooks create sitemap --git-branch main @p
  $m = [regex]::Match((vc deploy-hooks list @p 2>&1 | Out-String), $urlRe)
}
if (-not $m.Success) { Write-Host "No deploy hook found after creating it. Tell Claude what Vercel printed above (without the URL)."; exit 1 }
$hook = $m.Value
Write-Host "Deploy hook ready."

# 2. Save it as SITEMAP_DEPLOY_HOOK_URL for Production, without any questions.
$hook | vc env add SITEMAP_DEPLOY_HOOK_URL --environment production --sensitive --force --yes @p 2>&1 | Out-Null
$check = (vc env ls production @p 2>&1 | Out-String)
if ($check -match 'SITEMAP_DEPLOY_HOOK_URL') { Write-Host "SITEMAP_DEPLOY_HOOK_URL saved for Production." } else { Write-Host "Saving the variable FAILED."; exit 1 }

# 3. Trigger the hook once: tests it AND redeploys so the site picks up the new variable.
$r = Invoke-RestMethod -Method Post -Uri $hook
Write-Host "Hook test: deploy $($r.job.state) (a new production build starts now)."
