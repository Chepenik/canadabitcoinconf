import Link from "next/link";
import { Great_Vibes, VT323 } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center text-center space-y-12">
        <h1
          className={`${greatVibes.className} text-[2.8rem] md:text-[3.7rem] text-orange-500 whitespace-nowrap transition-all duration-300`}
        >
          Canadian Orange Party
        </h1>

        <h3 className={`${vt323.className} text-orange-500 text-lg md:text-xl`}>
          Since 916,094
        </h3>

        <a href="/main" className={`enter-link ${vt323.className} text-orange-500 text-2xl md:text-3xl`}>
        Enter
      </a>

      </main>
    </div>
  );
}
