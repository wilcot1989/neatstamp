// NeatStamp Chrome Extension - Popup Script

const API_BASE = "https://app.neatstamp.com";

// Load signature from NeatStamp API
async function loadSignature() {
  const statusEl = document.getElementById("status");
  const previewEl = document.getElementById("signaturePreview");
  const installBtn = document.getElementById("installBtn");

  try {
    // Try to fetch the user's signature
    const res = await fetch(`${API_BASE}/api/signatures`, {
      credentials: "include",
    });

    if (!res.ok) {
      statusEl.className = "status disconnected";
      statusEl.querySelector(".status-text").textContent = "Please log in to NeatStamp first";
      previewEl.innerHTML = '<p style="color:#9ca3af;font-size:12px;">Open NeatStamp Dashboard to log in</p>';
      installBtn.disabled = true;
      return;
    }

    const data = await res.json();
    const signatures = data.signatures || [];

    if (signatures.length === 0) {
      statusEl.className = "status disconnected";
      statusEl.querySelector(".status-text").textContent = "No signatures found";
      previewEl.innerHTML = '<p style="color:#9ca3af;font-size:12px;">Create a signature in the NeatStamp editor first</p>';
      installBtn.disabled = true;
      return;
    }

    // Use the first signature
    const sig = signatures[0];
    const sigData = typeof sig.data === "string" ? JSON.parse(sig.data) : sig.data;

    // Store for later use
    chrome.storage.local.set({ signatureHtml: sigData._html || "", signatureData: sigData });

    // Show preview
    statusEl.className = "status connected";
    statusEl.querySelector(".status-text").textContent = `Signature loaded: ${sig.name}`;

    // Generate a simple preview
    previewEl.innerHTML = `
      <div style="font-family:Arial,sans-serif;font-size:13px;">
        <strong>${sigData.fullName || "Your Name"}</strong><br>
        <span style="color:#666;">${sigData.jobTitle || ""} ${sigData.company ? "— " + sigData.company : ""}</span><br>
        <span style="color:#2563eb;">${sigData.email || ""}</span>
      </div>
    `;

    installBtn.disabled = false;
  } catch (err) {
    statusEl.className = "status disconnected";
    statusEl.querySelector(".status-text").textContent = "Could not connect to NeatStamp";
    console.error("NeatStamp error:", err);
  }
}

// Install signature in Gmail
document.getElementById("installBtn").addEventListener("click", async () => {
  const btn = document.getElementById("installBtn");
  btn.textContent = "Installing...";
  btn.disabled = true;

  try {
    // Send message to content script to inject signature
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab.url?.includes("mail.google.com")) {
      btn.textContent = "Open Gmail first!";
      setTimeout(() => {
        btn.textContent = "Install in Gmail";
        btn.disabled = false;
      }, 2000);
      return;
    }

    const stored = await chrome.storage.local.get(["signatureData"]);
    if (!stored.signatureData) {
      btn.textContent = "No signature loaded";
      setTimeout(() => {
        btn.textContent = "Install in Gmail";
        btn.disabled = false;
      }, 2000);
      return;
    }

    await chrome.tabs.sendMessage(tab.id, {
      type: "INSTALL_SIGNATURE",
      data: stored.signatureData,
    });

    btn.textContent = "✓ Installed!";
    btn.style.background = "#10b981";
    setTimeout(() => {
      btn.textContent = "Install in Gmail";
      btn.style.background = "";
      btn.disabled = false;
    }, 3000);
  } catch (err) {
    btn.textContent = "Failed — try manually";
    console.error("Install error:", err);
    setTimeout(() => {
      btn.textContent = "Install in Gmail";
      btn.disabled = false;
    }, 2000);
  }
});

// Refresh button
document.getElementById("refreshBtn").addEventListener("click", loadSignature);

// Load on popup open
loadSignature();
