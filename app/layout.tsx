import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "리드제일 (Lead Jaeil) | 링크드인 크리에이터 \xB7 작가",
    template: "%s | 리드제일 (Lead Jaeil)",
  },
  description: "링크드인 브랜딩으로 커리어와 비즈니스 기회를 만드는 방법을 안내합니다.",
  keywords: [
    "리드제일",
    "Lead Jaeil",
    "리드재일",
    "링크드인 크리에이터",
    "링크드인 앰버서더",
    "된다 링크드인 활용법",
    "퍼스널 브랜딩",
    "Favikon",
  ],
  openGraph: {
    type: "website",
    siteName: "리드제일 (Lead Jaeil)",
    locale: "ko_KR",
    alternateLocale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "리드제일 (Lead Jaeil) - 링크드인 크리에이터",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "리드제일 (Lead Jaeil) | 링크드인 크리에이터",
    description: "링크드인 브랜딩으로 커리어와 비즈니스 기회를 만드는 방법을 안내합니다.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // No `alternates` here on purpose: anything set at the root is inherited by
  // every route below, so a canonical here would mark the whole site a
  // duplicate of one URL. Each page sets its own via `alternatesFor`.
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${inter.variable} ${dmSerif.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
