import type { Metadata } from "next";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://canadian-orange-party.example.com"),
  title: {
    default: "Canadian Orange Party",
    template: "%s · Canadian Orange Party",
  },
  description:
    "Canadian Orange Party — a community hub around the Canadian Bitcoin Conference. Connect on Nostr and find info related to Canada Bitcoin, Canadian Bitcoin Conference, and Canadian Orange Party.",
  keywords: [
    "Canadian Bitcoin Conference",
    "Canada Bitcoin Conference",
    "Canada Bitcoin",
    "Canadian Orange Party",
    "Bitcoin Canada",
    "Bitcoin conference Canada",
    "Nostr Canada",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Canadian Orange Party",
    locale: "en_CA",
    title: "Canadian Orange Party",
    description:
      "Canadian Orange Party — community around the Canadian Bitcoin Conference. Canada Bitcoin, Canadian Bitcoin Conference, Canadian Orange Party.",
    images: [
      {
        url: "https://i.nostr.build/mt5lXdK20ge85YW9.png",
        width: 1200,
        height: 630,
        alt: "Canadian Orange Party",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Orange Party",
    description:
      "Fix the money. Fix Canada. A movement that transcends politics. Bitcoin is our monetary layer. NOSTR is our comms layer. This is our coordination layer Est. 916,094",
    images: ["https://i.nostr.build/mt5lXdK20ge85YW9.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Canadian Orange Party",
              url: "https://canadian-orange-party.example.com/",
              sameAs: [
                "https://primal.net/p/nprofile1qqstmq34sjd7m600yzkrvfafjwfzeyuttckgmd5xx7556gvc0h7cv4gtrw7pp",
              ],
              image: "https://i.nostr.build/mt5lXdK20ge85YW9.png",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Canadian Orange Party",
              url: "https://canadian-orange-party.example.com/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://canadian-orange-party.example.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
