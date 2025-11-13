"use client";

import Image from "next/image";
import Link from "next/link";
import { Great_Vibes, VT323 } from "next/font/google";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

type Episode =
  | {
      number: number;
      title: string;
      subtitle: string;
      href: string;
      status: "published";
    }
  | {
      number: number;
      title: string;
      status: "coming-soon";
    };

const episodes: Episode[] = [
  {
    number: 1,
    title: "Lucas & Nick",
    subtitle: "Canadian Orange Podcast",
    href: "https://rss.com/podcasts/bitcoinstoa/2311494/",
    status: "published",
  },
  {
    number: 2,
    title: "Coming Soon",
    status: "coming-soon",
  },
  {
    number: 3,
    title: "Coming Soon",
    status: "coming-soon",
  },
  {
    number: 4,
    title: "Coming Soon",
    status: "coming-soon",
  },
  {
    number: 5,
    title: "Coming Soon",
    status: "coming-soon",
  },
];

export default function Podcast() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f1c] text-white px-6 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h1
            className={`${vt323.className} text-3xl sm:text-4xl md:text-5xl tracking-[0.08em] text-white`}
          >
            Canadian Orange Podcast by Canadians
          </h1>
          <p
            className={`${vt323.className} text-base sm:text-lg tracking-[0.08em] text-zinc-300 md:text-right`}
          >
            Fix the money. Fix Canada.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {episodes.map((episode) => {
            if (episode.status === "published") {
              const Card = (
                <div
                  className={`${vt323.className} flex h-full flex-col rounded-[24px] border border-white/10 px-6 py-8 transition-transform duration-300 bg-gradient-to-br from-[#2a113f] via-[#090814] to-[#180829] hover:-translate-y-1 hover:scale-[1.02] shadow-[0_18px_45px_rgba(80,45,180,0.35)]`}
                >
                  <div className="text-sm tracking-[0.15em] text-white/70">Episode {episode.number}</div>

                  <div className="mt-8 flex-1 text-center">
                    <div className={`${greatVibes.className} text-3xl sm:text-4xl text-orange-400`}>
                      {episode.title}
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 text-sm text-white/70">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/finalmapleleaf.png"
                        alt="Canadian Orange Podcast"
                        width={48}
                        height={48}
                        className="rounded-md border border-white/10"
                      />
                      <span className={`${greatVibes.className} text-lg text-orange-200`}>
                        {episode.subtitle}
                      </span>
                    </div>
                  </div>
                </div>
              );

              return (
                <Link
                  key={episode.number}
                  href={episode.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                  prefetch={false}
                >
                  {Card}
                </Link>
              );
            }

            return (
              <div
                key={episode.number}
                className={`${vt323.className} h-full rounded-[24px] border border-white/10 bg-[#0f1424] px-6 py-8 opacity-90 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01]`}
              >
                <div className="text-sm tracking-[0.15em] text-white/70">Episode {episode.number}</div>

                <div className="mt-8 flex-1 text-center">
                  <div className={`${vt323.className} text-3xl sm:text-4xl text-white/50`}>
                    {episode.title}
                  </div>
                </div>

                <div className="mt-auto pt-8 text-center text-sm uppercase tracking-[0.2em] text-white/40">
                  Coming Soon
                </div>
              </div>
            );
          })}
        </section>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/hub"
            className={`${vt323.className} rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-lg tracking-[0.1em] text-white transition hover:bg-white/10`}
          >
            back to hub
          </Link>
          <Link
            href="/support"
            target="_blank"
            rel="noopener noreferrer"
            className={`${vt323.className} rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-lg tracking-[0.1em] text-white transition hover:bg-white/10`}
          >
            donate
          </Link>
        </div>
      </div>
    </div>
  );
}

