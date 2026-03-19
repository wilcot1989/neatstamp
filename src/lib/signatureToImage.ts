// Convert a signature HTML preview to a PNG image using Canvas API (client-side)
// Returns a Blob of the PNG image

export async function signatureToImage(
  previewElement: HTMLElement
): Promise<Blob> {
  // Create a canvas sized to the element
  const rect = previewElement.getBoundingClientRect();
  const canvas = document.createElement("canvas");
  const scale = 2; // 2x for retina
  canvas.width = rect.width * scale;
  canvas.height = rect.height * scale;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");

  ctx.scale(scale, scale);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, rect.width, rect.height);

  // Use foreignObject in SVG to render HTML to canvas
  const svgData = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${rect.width}" height="${rect.height}">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Arial, sans-serif;">
          ${previewElement.innerHTML}
        </div>
      </foreignObject>
    </svg>
  `;

  const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error("Canvas toBlob failed"));
        },
        "image/png",
        1.0
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to render signature as image"));
    };
    img.src = url;
  });
}

// Upload a signature image to R2 and return the hosted URL
export async function uploadSignatureImage(
  sigId: string,
  imageBlob: Blob
): Promise<string | null> {
  try {
    const formData = new FormData();
    formData.append("file", imageBlob, "signature.png");
    formData.append("signature_id", sigId);

    const res = await fetch("/api/images/upload", {
      method: "POST",
      body: formData,
    });

    const result = await res.json() as { url?: string };
    return result.url || null;
  } catch {
    return null;
  }
}
