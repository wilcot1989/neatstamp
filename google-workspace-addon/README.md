# NeatStamp Google Workspace Add-on

Deploy email signatures to all users in your Google Workspace domain automatically.

## Setup

1. Go to [script.google.com](https://script.google.com) and create a new project
2. Copy `Code.gs` into the script editor
3. Copy `appsscript.json` into the project manifest (View → Show manifest file)
4. Go to Project Settings → Script Properties and add:
   - `NEATSTAMP_API_KEY` — your NeatStamp Team API key (from Dashboard → Settings)
5. Enable Advanced Services: Gmail API and Admin SDK Directory
6. Run `testDeployment()` first to verify it works for your own account
7. Run `deploySignatures()` to deploy to all users
8. Optionally run `createDailyTrigger()` to auto-deploy every morning at 6 AM

## How it works

1. Fetches the master signature template from your NeatStamp Team account
2. Gets all users from your Google Workspace directory
3. For each user, personalizes the template with their name, title, email, phone
4. Sets the Gmail signature via the Gmail API
5. Reports deployment status back to NeatStamp

## Requirements

- Google Workspace admin access
- NeatStamp Team plan
- Domain-wide delegation enabled for the script
