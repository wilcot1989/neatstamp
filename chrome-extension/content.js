// NeatStamp Chrome Extension - Gmail Content Script
// Listens for signature install commands from the popup

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "INSTALL_SIGNATURE") {
    installSignatureInGmail(message.data);
    sendResponse({ success: true });
  }
});

function installSignatureInGmail(sigData) {
  // Try to open Gmail signature settings
  // This navigates the user to the right settings page
  const settingsUrl = "https://mail.google.com/mail/u/0/#settings/general";

  // Check if we're already on settings
  if (window.location.hash.includes("settings")) {
    // Try to find the signature editor
    injectSignature(sigData);
  } else {
    // Navigate to settings
    window.location.hash = "#settings/general";
    // Wait for settings to load, then inject
    setTimeout(() => injectSignature(sigData), 2000);
  }
}

function injectSignature(sigData) {
  // Find all contenteditable divs (Gmail signature editor areas)
  const editables = document.querySelectorAll('[contenteditable="true"]');

  // The signature editor in Gmail settings is a contenteditable div
  // inside a specific container. Look for it.
  let signatureEditor = null;

  editables.forEach((el) => {
    // Gmail signature editors are typically in a div with specific attributes
    const parent = el.closest('[aria-label*="Signature"]') || el.closest('.aSI');
    if (parent || el.getAttribute("aria-label")?.includes("Signature")) {
      signatureEditor = el;
    }
  });

  if (signatureEditor) {
    // Build simple HTML from signature data
    const html = buildSignatureHtml(sigData);
    signatureEditor.innerHTML = html;

    // Trigger input event so Gmail registers the change
    signatureEditor.dispatchEvent(new Event("input", { bubbles: true }));

    // Show success notification
    showNotification("✓ NeatStamp signature installed! Scroll down and click 'Save Changes'.");
  } else {
    showNotification("Could not find Gmail signature editor. Please scroll down to the Signature section in Settings.");
  }
}

function buildSignatureHtml(data) {
  const c = data.primaryColor || "#2563eb";
  const parts = [];

  if (data.fullName) {
    parts.push(`<b style="font-size:16px;color:#1a1a1a;">${data.fullName}</b>`);
  }
  if (data.jobTitle || data.company) {
    const title = [data.jobTitle, data.company].filter(Boolean).join(" — ");
    parts.push(`<span style="font-size:12px;color:#666;">${title}</span>`);
  }
  if (data.email || data.phone) {
    const contact = [
      data.email ? `<a href="mailto:${data.email}" style="color:${c};text-decoration:none;">${data.email}</a>` : "",
      data.phone ? data.phone : "",
    ].filter(Boolean).join(" · ");
    parts.push(`<span style="font-size:12px;color:#555;">${contact}</span>`);
  }
  if (data.website) {
    parts.push(`<a href="https://${data.website.replace(/^https?:\/\//, "")}" style="font-size:12px;color:${c};text-decoration:none;">${data.website.replace(/^https?:\/\//, "")}</a>`);
  }

  return `<div style="font-family:Arial,sans-serif;">${parts.join("<br>")}</div>`;
}

function showNotification(message) {
  const existing = document.getElementById("neatstamp-notification");
  if (existing) existing.remove();

  const div = document.createElement("div");
  div.id = "neatstamp-notification";
  div.style.cssText = `
    position: fixed; top: 20px; right: 20px; z-index: 99999;
    background: #1a1a1a; color: white; padding: 14px 20px;
    border-radius: 10px; font-family: -apple-system, sans-serif;
    font-size: 13px; box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    animation: neatstampSlide 0.3s ease-out;
  `;
  div.textContent = message;
  document.body.appendChild(div);

  setTimeout(() => div.remove(), 5000);
}

// Add animation styles
const style = document.createElement("style");
style.textContent = `
  @keyframes neatstampSlide {
    from { transform: translateX(100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;
document.head.appendChild(style);
