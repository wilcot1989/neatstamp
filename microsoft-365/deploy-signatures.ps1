# NeatStamp Microsoft 365 Signature Deployment Script
#
# This PowerShell script deploys email signatures to all users in your
# Microsoft 365 / Exchange Online organization.
#
# Prerequisites:
# - Install-Module ExchangeOnlineManagement
# - Global Admin or Exchange Admin role
# - NeatStamp Team plan with API key
#
# Usage:
# 1. Set your API key below
# 2. Run: .\deploy-signatures.ps1
# 3. Authenticate when prompted

param(
    [string]$NeatStampApiKey = "",
    [string]$NeatStampApiUrl = "https://app.neatstamp.com/api",
    [switch]$TestMode = $false,
    [string]$TestEmail = ""
)

# Check prerequisites
if (-not (Get-Module -ListAvailable -Name ExchangeOnlineManagement)) {
    Write-Error "ExchangeOnlineManagement module not found. Install with: Install-Module ExchangeOnlineManagement"
    exit 1
}

if (-not $NeatStampApiKey) {
    $NeatStampApiKey = Read-Host "Enter your NeatStamp Team API key"
}

Write-Host "`n🚀 NeatStamp Microsoft 365 Signature Deployment" -ForegroundColor Cyan
Write-Host "================================================`n"

# Connect to Exchange Online
Write-Host "Connecting to Exchange Online..." -ForegroundColor Yellow
try {
    Connect-ExchangeOnline -ShowBanner:$false
    Write-Host "✅ Connected to Exchange Online`n" -ForegroundColor Green
} catch {
    Write-Error "Failed to connect to Exchange Online: $_"
    exit 1
}

# Fetch master template from NeatStamp
Write-Host "Fetching master template from NeatStamp..." -ForegroundColor Yellow
try {
    $headers = @{
        "Authorization" = "Bearer $NeatStampApiKey"
        "Content-Type" = "application/json"
    }
    $templateResponse = Invoke-RestMethod -Uri "$NeatStampApiUrl/team/master-template" -Headers $headers -Method Get
    $templateHtml = $templateResponse.html
    Write-Host "✅ Template loaded`n" -ForegroundColor Green
} catch {
    Write-Error "Failed to fetch template from NeatStamp: $_"
    Disconnect-ExchangeOnline -Confirm:$false
    exit 1
}

# Get mailboxes
if ($TestMode -and $TestEmail) {
    $mailboxes = @(@{ PrimarySmtpAddress = $TestEmail; DisplayName = "Test User" })
    Write-Host "🧪 Test mode: deploying to $TestEmail only`n" -ForegroundColor Magenta
} else {
    Write-Host "Getting all mailboxes..." -ForegroundColor Yellow
    $mailboxes = Get-Mailbox -ResultSize Unlimited | Select-Object PrimarySmtpAddress, DisplayName, Title, Department
    Write-Host "✅ Found $($mailboxes.Count) mailboxes`n" -ForegroundColor Green
}

# Deploy signatures
$success = 0
$failed = 0

foreach ($mbx in $mailboxes) {
    $email = $mbx.PrimarySmtpAddress
    $name = $mbx.DisplayName

    # Personalize template
    $personalHtml = $templateHtml `
        -replace '\{\{name\}\}', $name `
        -replace '\{\{email\}\}', $email `
        -replace '\{\{title\}\}', ($mbx.Title ?? "") `
        -replace '\{\{department\}\}', ($mbx.Department ?? "")

    try {
        # Set signature using transport rule (server-side) or direct mailbox setting
        Set-MailboxMessageConfiguration -Identity $email -SignatureHtml $personalHtml -AutoAddSignature $true -AutoAddSignatureOnReply $true
        Write-Host "  ✅ $name ($email)" -ForegroundColor Green
        $success++
    } catch {
        Write-Host "  ❌ $name ($email): $_" -ForegroundColor Red
        $failed++
    }
}

Write-Host "`n================================================"
Write-Host "📊 Deployment complete!" -ForegroundColor Cyan
Write-Host "   ✅ Success: $success"
Write-Host "   ❌ Failed: $failed"
Write-Host "   Total: $($success + $failed)"
Write-Host "================================================`n"

# Report to NeatStamp
try {
    $report = @{
        totalUsers = $mailboxes.Count
        success = $success
        failed = $failed
        platform = "microsoft365"
        timestamp = (Get-Date -Format "o")
    } | ConvertTo-Json

    Invoke-RestMethod -Uri "$NeatStampApiUrl/team/deployment-report" -Headers $headers -Method Post -Body $report -ContentType "application/json"
    Write-Host "📤 Deployment report sent to NeatStamp" -ForegroundColor Gray
} catch {
    Write-Host "⚠️ Could not send report to NeatStamp (non-critical)" -ForegroundColor Yellow
}

# Disconnect
Disconnect-ExchangeOnline -Confirm:$false
Write-Host "`nDone! All signatures have been deployed." -ForegroundColor Green
