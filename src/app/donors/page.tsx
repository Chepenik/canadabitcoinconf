"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Great_Vibes, VT323 } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export default function Donors() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center text-center space-y-12">
        {/* Title */}
        <h1
          className={`${greatVibes.className} text-[2.8rem] md:text-[3.7rem] text-orange-500 whitespace-nowrap transition-all duration-300`}
        >
          Donors
        </h1>

        {/* Maple Leaf Image */}
        <div className="relative transition-all duration-300">
          <Image
            src="/finalmapleleaf.png"
            alt="Maple Leaf"
            width={170}
            height={170}
            className="rounded-lg"
            priority
          />
        </div>

        {/* Support with Sats Button */}
        <button
          onClick={() => setShowModal(true)}
          className={`${vt323.className} px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white text-xl md:text-2xl rounded-lg transition-all duration-300 shadow-[0_0_18px_rgba(255,140,0,0.35)] hover:shadow-[0_0_36px_rgba(255,140,0,0.7)] hover:scale-105 flex items-center space-x-2`}
        >
          <span>Support with Sats</span>
          <span className="text-yellow-400">⚡</span>
          <span className="text-orange-500">₿</span>
        </button>

        {/* Continue Button */}
        <Link href="/hub">
          <button
            className={`${vt323.className} px-8 py-4 bg-transparent border-2 border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white text-xl md:text-2xl rounded-lg transition-all duration-300 shadow-[0_0_18px_rgba(255,140,0,0.35)] hover:shadow-[0_0_36px_rgba(255,140,0,0.7)] hover:scale-105`}
          >
            Continue
          </button>
        </Link>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div
            className={`${vt323.className} bg-[#1a1a1a] border border-orange-500/40 rounded-lg p-8 max-w-lg w-full text-center shadow-[0_0_36px_rgba(255,140,0,0.7)]`}
          >
            <h2 className="text-orange-500 text-2xl md:text-3xl mb-6">
              Lightning Address
            </h2>

            <p className="text-orange-400 text-lg md:text-xl mb-4 break-all">
              wildkangaroo21@primal.net
            </p>

            <p className="text-orange-500 text-md md:text-lg mb-6">
              DM for on-chain donations to receive a main chain address.
            </p>

            <a
              href="https://primal.net/p/nprofile1qqstmq34sjd7m600yzkrvfafjwfzeyuttckgmd5xx7556gvc0h7cv4gtrw7pp"
              target="_blank"
              rel="noopener noreferrer"
              className={`${vt323.className} peer relative z-10 px-4 py-3 rounded-lg text-orange-500 hover:text-orange-400 transition-all duration-300 text-lg md:text-xl break-all max-w-2xl shadow-[0_0_18px_rgba(255,140,0,0.35)] hover:shadow-[0_0_36px_rgba(255,140,0,0.7)] hover:scale-105 border border-orange-500/40 inline-block`}
            >
              npub1hkprtpymah577g9vxcn6nyuj9jfckh3v3kmgvdaff5sesl0ase2sqn6jqu
            </a>

            {/* Close Button */}
            <div className="mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
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
