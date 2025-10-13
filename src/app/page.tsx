import Image from "next/image";
import { Great_Vibes, VT323 } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-black">
      <main className="flex flex-col items-center text-center space-y-12">
        {/* Title */}
        <h1 className={`${greatVibes.className} text-4xl md:text-5xl text-orange-500 whitespace-nowrap`}>
          Canadian Orange Party
        </h1>
        
        {/* Maple Leaf Image */}
        <div className="relative">
          <Image
            src="/finalmapleleaf.png"
            alt="Maple Leaf"
            width={200}
            height={200}
            className="rounded-lg"
            priority
          />
        </div>
        
        {/* Clickable NPUB */}
        <a
          href="https://primal.net/p/nprofile1qqstmq34sjd7m600yzkrvfafjwfzeyuttckgmd5xx7556gvc0h7cv4gtrw7pp"
          target="_blank"
          rel="noopener noreferrer"
          className={`${vt323.className} text-orange-500 hover:text-orange-400 transition-colors duration-200 text-lg md:text-xl break-all max-w-2xl`}
        >
          npub1hkprtpymah577g9vxcn6nyuj9jfckh3v3kmgvdaff5sesl0ase2sqn6jqu
        </a>
      </main>
    </div>
  );
}