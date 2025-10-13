import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-gradient-to-br dark:from-purple-900 dark:via-purple-800 dark:to-indigo-900 transition-all duration-500">
      <main className="flex flex-col items-center text-center space-y-8 max-w-2xl">
        {/* Maple Leaf Image - Different for light/dark mode */}
        <div className="relative">
          <Image
            src="/orangemapleleaf.jpg"
            alt="Orange Maple Leaf"
            width={300}
            height={300}
            className="rounded-lg shadow-2xl dark:hidden"
            priority
          />
          <Image
            src="/orangemapleleafdarkmode.jpg"
            alt="Maple Leaf Dark Mode"
            width={300}
            height={300}
            className="rounded-lg shadow-2xl hidden dark:block"
            priority
          />
        </div>
        
        {/* Canadian Bitcoin Conference Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Canadian Bitcoin Conference
          </h1>
        </div>
        
        {/* Connect with us on Nostr Section */}
        <div className="bg-gray-50 dark:bg-purple-800/30 dark:backdrop-blur-sm p-8 rounded-xl shadow-lg border-2 border-orange-200 dark:border-purple-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Connect with us on Nostr
          </h2>
          <div className="bg-white dark:bg-purple-900/40 dark:backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-purple-300/30 transition-colors duration-500">
            <code className="text-sm md:text-base text-gray-800 dark:text-gray-200 break-all font-mono">
              npub1example...your-nostr-public-key-here
            </code>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 transition-colors duration-300">
            Join the conversation on the decentralized social network
          </p>
        </div>
      </main>
    </div>
  );
}
