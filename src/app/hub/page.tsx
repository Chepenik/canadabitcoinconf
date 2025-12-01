"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Great_Vibes, VT323 } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

const BTN_STYLE = {
  background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
  letterSpacing: "-0.02em",
  filter: "drop-shadow(0 4px 8px rgba(255, 107, 53, 0.4))",
} as const;

const NPUB =
  "npub1hkprtpymah577g9vxcn6nyuj9jfckh3v3kmgvdaff5sesl0ase2sqn6jqu";

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

export default function Hub() {
  const [showNostr, setShowNostr] = useState(false);
  const [copied, setCopied] = useState<"npub" | "onchain" | "lightning" | null>(null);

  const handleCopy = async (text: string, which: "npub" | "onchain" | "lightning") => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(which);
      setTimeout(() => setCopied(null), 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6">
      <main className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-[1200px] w-full">
        <div className="w-full">
        <h1
            className={`${greatVibes.className} mx-auto mb-4 md:mb-6 text-orange-500 leading-tight tracking-wide drop-shadow-[0_0_18px_rgba(255,140,0,0.6)] text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem]`}
          >
            Fix the money. Fix Canada.
          </h1>
          <div className={`${vt323.className} text-white text-lg md:text-xl lg:text-2xl leading-tight mb-6 md:mb-8 max-w-3xl mx-auto space-y-0`}>
            <p>I am Canadian</p>
            <p>A free Canadian</p>
            <p>Free to speak without fear</p>
            <p>Free to worship God in my own way</p>
            <p>Free to transact without censorship</p>
            <p>Free to use sound money</p>
            <p>Free to stand for what I think right</p>
            <p>Free to oppose what I believe is wrong</p>
            <p>Free to choose those who governs my country</p>
            <p className="mt-1">This heritage of freedom I pledge to uphold for myself and all mankind</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
            <button
              onClick={() => setShowNostr(true)}
              className={`${vt323.className} w-full px-[1.275rem] py-[0.85rem] md:px-[1.7rem] md:py-[1.0625rem] text-white text-lg md:text-xl lg:text-2xl rounded-lg hover:scale-105 transition-all duration-300`}
              style={BTN_STYLE}
            >
              nostr
            </button>

            <Link href="/podcast">
              <button
                className={`${vt323.className} w-full px-[1.275rem] py-[0.85rem] md:px-[1.7rem] md:py-[1.0625rem] text-white text-lg md:text-xl lg:text-2xl rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                podcast
              </button>
            </Link>

            <Link href="https://www.endinflationcanada.com/">
              <button
                className={`${vt323.className} w-full px-[1.275rem] py-[0.85rem] md:px-[1.7rem] md:py-[1.0625rem] text-white text-lg md:text-xl lg:text-2xl rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                end inflation
              </button>
            </Link>

            <Link href="/support">
              <button
                className={`${vt323.className} w-full px-[1.275rem] py-[0.85rem] md:px-[1.7rem] md:py-[1.0625rem] text-white text-lg md:text-xl lg:text-2xl rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                donate
              </button>
            </Link>
          </div>
        </div>

        <div className="relative transition-all duration-300 mt-4 md:mt-6">
          <a href="/">
            <Image
              src="/finalmapleleaf.png"
              alt="Maple Leaf"
              width={80}
              height={80}
              className="rounded-lg"
              priority
            />
          </a>
        </div>
      </main>

      {showNostr && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowNostr(false)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-zinc-900 border border-orange-500/40 p-6 shadow-[0_0_36px_rgba(255,140,0,0.7)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={`${vt323.className} text-orange-500 text-2xl mb-4 tracking-wide`}>
              NOSTR npub
            </h2>
            <div className="flex items-center gap-3">
              <code className="flex-1 break-all rounded-lg bg-black/40 px-3 py-3 text-orange-200 text-sm">
                {NPUB}
              </code>
              <button
                onClick={() => handleCopy(NPUB, "npub")}
                className={`${vt323.className} shrink-0 px-4 py-2 rounded-lg text-black hover:scale-105 transition-all duration-300`}
                style={{ background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)" }}
              >
                {copied === "npub" ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowNostr(false)}
                className={`${vt323.className} px-4 py-2 rounded-lg text-orange-400 hover:text-orange-300 border border-orange-500/40`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
