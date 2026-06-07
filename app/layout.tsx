import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

const SITE_URL = "https://leadjaeil.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "리드제일 (Brasley Byun) | 링크드인 전략가 \xB7 작가 \xB7 BD 전문가",
    template: "%s | 리드제일 (Brasley Byun)",
  },
  description:
    "링크드인 팔로워 2만+, 전체 채널 3만+ 크리에이터이자 파비콘(Favikon) 선정 국내 유일 링크드인 앰버서더 리드제일 공식 사이트. 『된다! 링크드인 활용법』 저자, 링크드인 전략가.",
  keywords: [
    "리드제일",
    "Brasley Byun",
    "리드재일",
    "링크드인 전략가",
    "링크드인 앰버서더",
    "된다 링크드인 활용법",
    "퍼스널 브랜딩",
    "Favikon",
  ],
  openGraph: {
    type: "website",
    siteName: "리드제일 (Brasley Byun)",
    locale: "ko_KR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "리드제일 (Brasley Byun) | 링크드인 전략가",
    description:
      "링크드인 팔로워 2만+, 전체 채널 3만+ 크리에이터. 파비콘 선정 국내 유일 링크드인 앰버서더, 『된다! 링크드인 활용법』 저자.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: "/en",
      ko: "/ko",
    },
  },
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
