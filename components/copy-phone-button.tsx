"use client";

import { useState } from "react";

export function CopyPhoneButton() {
  const [copied, setCopied] = useState(false);
  const phone = "+91 8220007797";

  const copyPhoneHandler = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      const textarea = document.createElement("textarea");
      textarea.value = phone;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <button
      onClick={copyPhoneHandler}
      className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
      aria-label="Copy phone number"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
