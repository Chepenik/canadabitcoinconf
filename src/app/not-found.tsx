"use client";

import Image from "next/image";
import Link from "next/link";
import { Great_Vibes, VT323 } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

const BTN =
  "inline-flex items-center justify-center px-6 py-3 rounded-lg text-white hover:scale-105 transition-all duration-300 shadow-[0_8px_16px_rgba(255,107,53,0.35)]";
const GRAD = { background: "linear-gradient(135deg,#ff6b35 0%,#f7931e 100%)" };

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col items-center">
      <header className="w-full max-w-5xl px-6 sm:px-8 pt-8 pb-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image src="/finalmapleleaf.png" alt="Maple Leaf" width={56} height={56} className="rounded-lg" priority />
          <span className={`${greatVibes.className} text-3xl text-orange-500`}>Canadian Orange Party</span>
        </Link>
      </header>

      <main className="w-full max-w-5xl px-6 sm:px-8 pb-20 text-center">
        <h1 className={`${vt323.className} text-4xl sm:text-5xl md:text-6xl text-orange-500 tracking-wide`}>
          404 — Page Debased Into Nothingness
        </h1>
        <p className="mt-4 text-zinc-300 text-lg max-w-2xl mx-auto">
          This URL inflated itself into oblivion. But the mission remains:
          <span className="text-orange-400"> fix the money, fix Canada.</span>
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/" className={BTN} style={GRAD}>Home</Link>
          <Link href="/hub" className={BTN} style={GRAD}>Hub</Link>
          <a
            href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_1_Protocols"
            className={BTN}
            style={GRAD}
            target="_blank"
            rel="noopener noreferrer"
          >
            Protocols
          </a>
          <a
            href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_4_Meetings"
            className={BTN}
            style={GRAD}
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetings
          </a>
          <a
            href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_2_Proposals"
            className={BTN}
            style={GRAD}
            target="_blank"
            rel="noopener noreferrer"
          >
            Proposals
          </a>
          <a
            href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/S_3_Projects"
            className={BTN}
            style={GRAD}
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
        </div>

        <div className="mt-14 max-w-3xl mx-auto rounded-2xl border border-orange-500/30 bg-zinc-900/60 p-6">
          <h2 className={`${vt323.className} text-2xl text-orange-400`}>Want to help correct this misallocation?</h2>
          <p className="mt-2 text-zinc-300">
            Support the work: zap sats or donate on-chain. Every sat is a vote against monetary decay.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/support"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN}
              style={GRAD}
            >
              Open Support (new tab)
            </Link>
            <a
              href="https://primal.net/p/nprofile1qqstmq34sjd7m600yzkrvfafjwfzeyuttckgmd5xx7556gvc0h7cv4gtrw7pp"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN}
              style={GRAD}
            >
              DM on Nostr
            </a>
          </div>
          <div className="mt-4 text-sm text-zinc-400">
            npub: <span className="break-all">npub1hkprtpymah577g9vxcn6nyuj9jfckh3v3kmgvdaff5sesl0ase2sqn6jqu</span>
            <br />
            Lightning: <span className="break-all">wildkangaroo21@primal.net</span>
          </div>
        </div>

        <p className="mt-10 text-zinc-400 text-sm">
          Tip: If a page disappears, it didn’t have a fixed supply.
        </p>
      </main>
    </div>
  );
}
