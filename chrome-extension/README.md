# NeatStamp Chrome Extension

One-click email signature installation for Gmail.

## Features

- Load your NeatStamp signature directly in the extension popup
- One-click install into Gmail signature settings
- Auto-detects Gmail and navigates to the right settings page
- Preview your signature before installing

## Installation (Developer Mode)

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked" and select this `chrome-extension/` folder
4. The NeatStamp icon appears in your toolbar

## How to use

1. Click the NeatStamp icon in your Chrome toolbar
2. Your signature loads from your NeatStamp account
3. Open Gmail (mail.google.com)
4. Click "Install in Gmail" in the extension popup
5. The extension navigates to Gmail Settings and injects your signature
6. Click "Save Changes" in Gmail Settings

## Publishing to Chrome Web Store

1. Create a ZIP of this folder
2. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
3. Click "New Item" and upload the ZIP
4. Fill in the listing details:
   - Name: NeatStamp - Email Signature Manager
   - Description: Install your professional email signature in Gmail with one click
   - Category: Productivity
   - Screenshots: Take 1280x800 screenshots of the popup and Gmail install flow
5. Submit for review (usually 1-3 business days)

## Required icons

Create PNG icons at these sizes and place in `/icons/`:
- icon16.png (16x16)
- icon48.png (48x48)
- icon128.png (128x128)

Use the NeatStamp logo scaled to these dimensions.
