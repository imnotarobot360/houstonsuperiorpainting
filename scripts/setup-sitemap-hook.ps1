# One-time setup: a Vercel Deploy Hook so the daily cron
# (app/api/cron/indexnow-scheduled) can rebuild the sitemap on days a blog post
# goes live. Owner-run:
#   powershell -ExecutionPolicy Bypass -File C:\sites\houstonsuperiorpainting\scripts\setup-sitemap-hook.ps1
#
# Every call goes to npx.cmd with its arguments spelled out. An earlier version
# wrapped it in a PowerShell function (`npx -y vercel @args`); the arguments
# never reached Vercel, so a bare `vercel` started an interactive deploy and
# sat waiting on an invisible "Set up and deploy?" question.
Set-Location C:\sites\houstonsuperiorpainting
$scope = @("-p", "v0-calendly-integration", "--scope", "info-10397368s-projects")
$urlRe = 'https://api\.vercel\.com/v1/integrations/deploy/[A-Za-z0-9_/]+'

Write-Host "Checking for an existing deploy hook (the first run may take a minute to download Vercel)..."
$list = (& npx.cmd -y vercel deploy-hooks list @scope 2>&1 | Out-String)
$m = [regex]::Match($list, $urlRe)
if (-not $m.Success) {
  Write-Host "Creating deploy hook 'sitemap'. If Vercel asks a question, answer it (usually y + Enter)."
  & npx.cmd -y vercel deploy-hooks create sitemap --git-branch main @scope
  $list = (& npx.cmd -y vercel deploy-hooks list @scope 2>&1 | Out-String)
  $m = [regex]::Match($list, $urlRe)
}
if (-not $m.Success) {
  Write-Host "No deploy hook found. Vercel said:"
  Write-Host ($list -replace 'https://api\.vercel\.com/\S+', '<url hidden>')
  exit 1
}
$hook = $m.Value
Write-Host "Deploy hook ready."

# Save it as SITEMAP_DEPLOY_HOOK_URL for Production, without any questions.
$hook | & npx.cmd -y vercel env add SITEMAP_DEPLOY_HOOK_URL --environment production --sensitive --force --yes @scope 2>&1 | Out-Null
$check = (& npx.cmd -y vercel env ls production @scope 2>&1 | Out-String)
if ($check -match 'SITEMAP_DEPLOY_HOOK_URL') { Write-Host "SITEMAP_DEPLOY_HOOK_URL saved for Production." } else { Write-Host "Saving the variable FAILED. Vercel said:"; Write-Host $check; exit 1 }

# Trigger the hook once: tests it AND redeploys so the site picks up the new variable.
$r = Invoke-RestMethod -Method Post -Uri $hook
Write-Host "Hook test: deploy $($r.job.state) (a new production build starts now)."
