# NeatStamp Microsoft 365 Integration

Deploy email signatures to all users in your Microsoft 365 / Exchange Online organization.

## Prerequisites

- PowerShell 5.1+ or PowerShell 7+
- Exchange Online Management module: `Install-Module ExchangeOnlineManagement`
- Global Admin or Exchange Admin role in Microsoft 365
- NeatStamp Team plan with API key

## Usage

```powershell
# Basic deployment (all users)
.\deploy-signatures.ps1 -NeatStampApiKey "your-api-key"

# Test mode (single user)
.\deploy-signatures.ps1 -NeatStampApiKey "your-api-key" -TestMode -TestEmail "admin@company.com"
```

## How it works

1. Connects to Exchange Online using your admin credentials
2. Fetches the master signature template from NeatStamp
3. Gets all mailboxes in your organization
4. For each user, personalizes the template with their name, title, email
5. Sets the signature via `Set-MailboxMessageConfiguration`
6. Reports deployment status back to NeatStamp

## Template placeholders

Use these in your NeatStamp master template:
- `{{name}}` — User's display name
- `{{email}}` — User's email address
- `{{title}}` — User's job title
- `{{department}}` — User's department

## Automation

Schedule the script to run daily via Windows Task Scheduler or Azure Automation to keep signatures in sync when employees change titles, departments, etc.
