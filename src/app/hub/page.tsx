"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Great_Vibes, VT323 } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

const BTN_STYLE = {
  background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
  height: "56px",
  letterSpacing: "-0.02em",
  filter: "drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))",
} as const;

const NPUB =
  "npub1hkprtpymah577g9vxcn6nyuj9jfckh3v3kmgvdaff5sesl0ase2sqn6jqu";

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

export default function Hub() {
  const [showNostr, setShowNostr] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [copied, setCopied] = useState<"npub" | "onchain" | "lightning" | null>(null);

  const handleCopy = async (text: string, which: "npub" | "onchain" | "lightning") => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(which);
      setTimeout(() => setCopied(null), 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center text-center space-y-8 max-w-[1200px] w-full">
        <div className="relative transition-all duration-300">
          <a href="/">
            <Image
              src="/finalmapleleaf.png"
              alt="Maple Leaf"
              width={170}
              height={170}
              className="rounded-lg"
              priority
            />
          </a>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:hidden gap-4">
            <button
              onClick={() => setShowNostr(true)}
              className={`${vt323.className} w-full px-6 py-3 text-white text-lg rounded-lg hover:scale-105 transition-all duration-300`}
              style={BTN_STYLE}
            >
              NOSTR
            </button>

            <button
              onClick={() => setShowDonate(true)}
              className={`${vt323.className} w-full px-6 py-3 text-white text-lg rounded-lg hover:scale-105 transition-all duration-300`}
              style={BTN_STYLE}
            >
              donate
            </button>

            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_1_Protocols">
              <button
                className={`${vt323.className} w-full px-6 py-3 text-white text-lg rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                protocols
              </button>
            </Link>

            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_4_Meetings">
              <button
                className={`${vt323.className} w-full px-6 py-3 text-white text-lg rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                meetings
              </button>
            </Link>

            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_2_Proposals">
              <button
                className={`${vt323.className} w-full px-6 py-3 text-white text-lg rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                proposals
              </button>
            </Link>

            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_3_Projects">
              <button
                className={`${vt323.className} w-full px-6 py-3 text-white text-lg rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                projects
              </button>
            </Link>
          </div>

          <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
            <button
              onClick={() => setShowNostr(true)}
              className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
              style={BTN_STYLE}
            >
              NOSTR
            </button>
            <button
              onClick={() => setShowDonate(true)}
              className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
              style={BTN_STYLE}
            >
              donate
            </button>

            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_1_Protocols">
              <button
                className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                protocols
              </button>
            </Link>
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_4_Meetings">
              <button
                className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                meetings
              </button>
            </Link>
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_2_Proposals">
              <button
                className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                proposals
              </button>
            </Link>
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_3_Projects">
              <button
                className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                projects
              </button>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <button
                onClick={() => setShowNostr(true)}
                className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                NOSTR
              </button>
              <button
                onClick={() => setShowDonate(true)}
                className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
                style={BTN_STYLE}
              >
                donate
              </button>
              <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_1_Protocols">
                <button
                  className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
                  style={BTN_STYLE}
                >
                  protocols
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_4_Meetings">
                <button
                  className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
                  style={BTN_STYLE}
                >
                  meetings
                </button>
              </Link>
              <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_2_Proposals">
                <button
                  className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
                  style={BTN_STYLE}
                >
                  proposals
                </button>
              </Link>
              <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_3_Projects">
                <button
                  className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg hover:scale-105 transition-all duration-300`}
                  style={BTN_STYLE}
                >
                  projects
                </button>
              </Link>
            </div>
          </div>
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

      {showDonate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 md:p-8"
          onClick={() => setShowDonate(false)}
        >
          <div
            className="w-full max-w-4xl rounded-3xl bg-zinc-900 border border-orange-500/40 p-6 md:p-8 shadow-[0_0_48px_rgba(255,140,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className={`${vt323.className} text-orange-500 text-2xl md:text-3xl tracking-wide`}>
                Support with Bitcoin
              </h2>
              <button
                aria-label="Close"
                onClick={() => setShowDonate(false)}
                className="text-orange-400 hover:text-orange-300 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-orange-500/30 p-5">
                <h3 className={`${vt323.className} text-orange-400 text-xl mb-3`}>On-chain</h3>
                <div className="w-full aspect-square bg-black/30 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                  <img src={ONCHAIN_QR} alt="On-chain QR" className="object-contain w-full h-full" />
                </div>
                <div className="flex items-center gap-2">
                  <code className="flex-1 break-all rounded-lg bg-black/40 px-3 py-2 text-orange-200 text-xs">
                    {ONCHAIN_ADDR}
                  </code>
                  <button
                    onClick={() => handleCopy(ONCHAIN_ADDR, "onchain")}
                    className={`${vt323.className} shrink-0 px-3 py-2 rounded-lg text-black hover:scale-105 transition-all duration-300`}
                    style={{ background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)" }}
                  >
                    {copied === "onchain" ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-orange-500/30 p-5">
                <h3 className={`${vt323.className} text-orange-400 text-xl mb-3`}>Lightning</h3>
                <div className="w-full aspect-square bg-black/30 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                  <img src={LIGHTNING_QR} alt="Lightning QR" className="object-contain w-full h-full" />
                </div>
                <div className="flex items-center gap-2">
                  <code className="flex-1 break-all rounded-lg bg-black/40 px-3 py-2 text-orange-200 text-xs">
                    {LIGHTNING_ADDR}
                  </code>
                  <button
                    onClick={() => handleCopy(LIGHTNING_ADDR, "lightning")}
                    className={`${vt323.className} shrink-0 px-3 py-2 rounded-lg text-black hover:scale-105 transition-all duration-300`}
                    style={{ background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)" }}
                  >
                    {copied === "lightning" ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowDonate(false)}
                className={`${vt323.className} px-5 py-2.5 rounded-lg text-orange-400 hover:text-orange-300 border border-orange-500/40`}
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

