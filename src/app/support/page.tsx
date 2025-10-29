"use client";

import Image from "next/image";
import { Great_Vibes, VT323 } from "next/font/google";
import { useState } from "react";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

const BTN_GRADIENT = "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)";

const ONCHAIN_ADDR = "bc1qqwpakxryqet85ymppmthzsncmj283vclhr8uaj";
const ONCHAIN_QR = "https://i.nostr.build/pyGFcBtbtS8lut0Z.jpg";

const LIGHTNING_ADDR = "wildkangaroo21@primal.net";
const LIGHTNING_QR = "https://i.nostr.build/xqRzAugn6Pa3B2LE.png";

async function copyToClipboard(text: string) {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {}
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export default function SupportPage() {
  const [copied, setCopied] = useState<"onchain" | "lightning" | null>(null);

  const handleCopy = async (text: string, which: "onchain" | "lightning") => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(which);
      setTimeout(() => setCopied(null), 1500);
    }
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col items-center">
      {/* <header className="w-full max-w-5xl px-6 sm:px-8 pt-8 pb-4 flex items-center justify-between">
        <a href="/" className="inline-flex items-center gap-3">
          <Image
            src="/finalmapleleaf.png"
            alt="Maple Leaf"
            width={56}
            height={56}
            className="rounded-lg"
            priority
          />
          <span className={`${greatVibes.className} text-3xl text-orange-500`}>Home</span>
        </a>
      </header> */}

      <main className="w-full max-w-5xl px-6 sm:px-8 pb-16">
        <h1
          className={`${vt323.className} text-center text-2xl sm:text-3xl md:text-4xl text-orange-400 tracking-wide`}
        >
          Want to support our work? Zap us sats on Nostr or donate on-chain.
        </h1>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="rounded-2xl border border-orange-500/30 p-5 bg-zinc-900/60 shadow-[0_0_32px_rgba(255,140,0,0.25)]">
            <h2 className={`${vt323.className} text-orange-400 text-xl mb-3`}>
              Lightning (Nostr zaps)
            </h2>
            <div className="w-full aspect-square bg-black/30 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
              <img src={LIGHTNING_QR} alt="Lightning QR" className="object-contain w-full h-full" />
            </div>
            <div className="flex items-center gap-2">
              <code className="flex-1 break-all rounded-lg bg-black/40 px-3 py-2 text-orange-200 text-xs sm:text-sm">
                {LIGHTNING_ADDR}
              </code>
              <button
                onClick={() => handleCopy(LIGHTNING_ADDR, "lightning")}
                className={`${vt323.className} shrink-0 px-3 py-2 rounded-lg text-black hover:scale-105 transition-all duration-300`}
                style={{ background: BTN_GRADIENT }}
              >
                {copied === "lightning" ? "Copied!" : "Copy"}
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-orange-500/30 p-5 bg-zinc-900/60 shadow-[0_0_32px_rgba(255,140,0,0.25)]">
            <h2 className={`${vt323.className} text-orange-400 text-xl mb-3`}>On-chain</h2>
            <div className="w-full aspect-square bg-black/30 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
              <img src={ONCHAIN_QR} alt="On-chain QR" className="object-contain w-full h-full" />
            </div>
            <div className="flex items-center gap-2">
              <code className="flex-1 break-all rounded-lg bg-black/40 px-3 py-2 text-orange-200 text-xs sm:text-sm">
                {ONCHAIN_ADDR}
              </code>
              <button
                onClick={() => handleCopy(ONCHAIN_ADDR, "onchain")}
                className={`${vt323.className} shrink-0 px-3 py-2 rounded-lg text-black hover:scale-105 transition-all duration-300`}
                style={{ background: BTN_GRADIENT }}
              >
                {copied === "onchain" ? "Copied!" : "Copy"}
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
