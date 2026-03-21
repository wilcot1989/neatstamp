/**
 * NeatStamp Google Workspace Add-on
 *
 * Deploys email signatures to all users in a Google Workspace domain.
 * Admin installs this script, connects to NeatStamp, and signatures
 * are automatically deployed to all users.
 *
 * Setup:
 * 1. Open Google Apps Script (script.google.com)
 * 2. Create a new project
 * 3. Copy this code into Code.gs
 * 4. Copy appsscript.json into the project manifest
 * 5. Set NEATSTAMP_API_KEY in Script Properties
 * 6. Run deploySignatures() or set up a time-based trigger
 */

const NEATSTAMP_API = "https://app.neatstamp.com/api";

/**
 * Get all users from Google Workspace directory
 */
function getWorkspaceUsers() {
  const users = [];
  let pageToken = null;

  do {
    const response = AdminDirectory.Users.list({
      customer: "my_customer",
      maxResults: 100,
      pageToken: pageToken,
      orderBy: "email",
    });

    if (response.users) {
      response.users.forEach(user => {
        users.push({
          email: user.primaryEmail,
          name: user.name ? user.name.fullName : "",
          title: user.organizations && user.organizations[0] ? user.organizations[0].title || "" : "",
          department: user.organizations && user.organizations[0] ? user.organizations[0].department || "" : "",
          phone: user.phones && user.phones[0] ? user.phones[0].value || "" : "",
        });
      });
    }

    pageToken = response.nextPageToken;
  } while (pageToken);

  return users;
}

/**
 * Fetch the master signature template from NeatStamp
 */
function fetchMasterTemplate() {
  const apiKey = PropertiesService.getScriptProperties().getProperty("NEATSTAMP_API_KEY");
  if (!apiKey) {
    throw new Error("NEATSTAMP_API_KEY not set in Script Properties");
  }

  const response = UrlFetchApp.fetch(`${NEATSTAMP_API}/team/master-template`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  });

  if (response.getResponseCode() !== 200) {
    throw new Error("Failed to fetch master template: " + response.getContentText());
  }

  return JSON.parse(response.getContentText());
}

/**
 * Generate a personalized signature for a user
 */
function generateSignatureForUser(templateHtml, user) {
  let html = templateHtml;

  // Replace placeholders
  html = html.replace(/\{\{name\}\}/gi, user.name || "");
  html = html.replace(/\{\{email\}\}/gi, user.email || "");
  html = html.replace(/\{\{title\}\}/gi, user.title || "");
  html = html.replace(/\{\{department\}\}/gi, user.department || "");
  html = html.replace(/\{\{phone\}\}/gi, user.phone || "");

  return html;
}

/**
 * Set Gmail signature for a specific user (requires domain-wide delegation)
 */
function setUserSignature(userEmail, signatureHtml) {
  try {
    Gmail.Users.Settings.SendAs.update(
      { signature: signatureHtml },
      userEmail,
      userEmail
    );
    Logger.log("✅ Signature set for: " + userEmail);
    return true;
  } catch (e) {
    Logger.log("❌ Failed for " + userEmail + ": " + e.message);
    return false;
  }
}

/**
 * Main function: Deploy signatures to all workspace users
 */
function deploySignatures() {
  Logger.log("🚀 Starting NeatStamp signature deployment...");

  const template = fetchMasterTemplate();
  const users = getWorkspaceUsers();

  Logger.log(`Found ${users.length} users in workspace`);

  let success = 0;
  let failed = 0;

  users.forEach(user => {
    const signatureHtml = generateSignatureForUser(template.html, user);
    const result = setUserSignature(user.email, signatureHtml);
    if (result) success++;
    else failed++;
  });

  Logger.log(`\n📊 Deployment complete: ${success} success, ${failed} failed`);

  // Report back to NeatStamp
  try {
    const apiKey = PropertiesService.getScriptProperties().getProperty("NEATSTAMP_API_KEY");
    UrlFetchApp.fetch(`${NEATSTAMP_API}/team/deployment-report`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      payload: JSON.stringify({
        totalUsers: users.length,
        success,
        failed,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (e) {
    Logger.log("Warning: Could not report to NeatStamp: " + e.message);
  }
}

/**
 * Set up automatic daily deployment
 */
function createDailyTrigger() {
  // Remove existing triggers
  ScriptApp.getProjectTriggers().forEach(trigger => {
    if (trigger.getHandlerFunction() === "deploySignatures") {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  // Create new daily trigger at 6 AM
  ScriptApp.newTrigger("deploySignatures")
    .timeBased()
    .atHour(6)
    .everyDays(1)
    .create();

  Logger.log("✅ Daily deployment trigger created (6 AM)");
}

/**
 * Manual test: deploy to just one user
 */
function testDeployment() {
  const testEmail = Session.getActiveUser().getEmail();
  const template = fetchMasterTemplate();

  const user = {
    email: testEmail,
    name: "Test User",
    title: "Test Title",
    department: "Test Department",
    phone: "+1 (555) 000-0000",
  };

  const html = generateSignatureForUser(template.html, user);
  const result = setUserSignature(testEmail, html);

  Logger.log(result ? "✅ Test deployment successful!" : "❌ Test deployment failed");
}
