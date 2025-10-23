import Image from "next/image";
import Link from "next/link";
import { Great_Vibes, VT323 } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export default function Hub() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center text-center space-y-8 max-w-[1200px] w-full">
        {/* Title */}
        <h1 className={`${greatVibes.className} text-[2.8rem] md:text-[4.5rem] lg:text-[5.25rem] text-orange-500 whitespace-nowrap transition-all duration-300`}>
          Hub
        </h1>
        
        {/* Maple Leaf Image */}
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
        
        {/* Navigation Buttons Grid */}
        <div className="w-full">
          {/* Mobile: Single column stack */}
          <div className="grid grid-cols-1 md:hidden gap-4">
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS">
              <button 
                className={`${vt323.className} w-full px-6 py-3 text-white text-lg rounded-lg transition-all duration-300 hover:scale-105`}
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  height: '56px',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
                }}
              >
                Repository
              </button>
            </Link>
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/meetings">
              <button 
                className={`${vt323.className} w-full px-6 py-3 text-white text-lg rounded-lg transition-all duration-300 hover:scale-105`}
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  height: '56px',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
                }}
              >
                Meetings
              </button>
            </Link>
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/protocols">
              <button 
                className={`${vt323.className} w-full px-6 py-3 text-white text-lg rounded-lg transition-all duration-300 hover:scale-105`}
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  height: '56px',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
                }}
              >
                Protocols
              </button>
            </Link>
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/z_operator%20directory">
              <button 
                className={`${vt323.className} w-full px-6 py-3 text-white text-lg rounded-lg transition-all duration-300 hover:scale-105`}
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  height: '56px',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
                }}
              >
                Directory
              </button>
            </Link>
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/projects">
              <button 
                className={`${vt323.className} w-full px-6 py-3 text-white text-lg rounded-lg transition-all duration-300 hover:scale-105`}
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  height: '56px',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
                }}
              >
                Projects
              </button>
            </Link>
          </div>
          
          {/* Tablet: 2-column grid */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS">
              <button className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg transition-all duration-300 hover:scale-105`} style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                height: '56px',
                letterSpacing: '-0.02em',
                filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
              }}>
                Repository
              </button>
            </Link>
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/meetings">
              <button className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg transition-all duration-300 hover:scale-105`} style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                height: '56px',
                letterSpacing: '-0.02em',
                filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
              }}>
                Meetings
              </button>
            </Link>
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/protocols">
              <button className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg transition-all duration-300 hover:scale-105`} style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                height: '56px',
                letterSpacing: '-0.02em',
                filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
              }}>
                Protocols
              </button>
            </Link>
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/z_operator%20directory">
              <button className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg transition-all duration-300 hover:scale-105`} style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                height: '56px',
                letterSpacing: '-0.02em',
                filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
              }}>
                Directory
              </button>
            </Link>
            <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/projects">
              <button className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg transition-all duration-300 hover:scale-105`} style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                height: '56px',
                letterSpacing: '-0.02em',
                filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
              }}>
                Projects
              </button>
            </Link>
          </div>
          
          {/* Desktop: 3-column grid */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <Link href="https://github.com/Canadian-Orange-Party/governanceOS">
                <button className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg transition-all duration-300 hover:scale-105`} style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  height: '56px',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
                }}>
                  Repository
                </button>
              </Link>
              <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/meetings">
                <button className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg transition-all duration-300 hover:scale-105`} style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  height: '56px',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
                }}>
                  Meetings
                </button>
              </Link>
              <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/protocols">
                <button className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg transition-all duration-300 hover:scale-105`} style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  height: '56px',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
                }}>
                  Protocols
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/z_operator%20directory">
                <button className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg transition-all duration-300 hover:scale-105`} style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  height: '56px',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
                }}>
                  Directory
                </button>
              </Link>
              <Link href="https://github.com/Canadian-Orange-Party/governanceOS/blob/main/projects">
                <button className={`${vt323.className} w-full px-6 py-3 text-white text-xl rounded-lg transition-all duration-300 hover:scale-105`} style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  height: '56px',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 107, 53, 0.4))'
                }}>
                  Projects
                </button>
              </Link>
              <div></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
