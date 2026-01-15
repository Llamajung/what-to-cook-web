// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "뭐해먹지 - 유튜브 레시피 검색",
  description:
    "집에 있는 식재료로 만들 수 있는 유튜브 레시피 영상을 추천해주는 앱. 즐겨찾기, 유통기한/장보기 리스트까지 한 번에.",
  metadataBase: new URL("https://www.mohaemukji.co.kr"),
  openGraph: {
    title: "뭐해먹지 - 유튜브 레시피 검색",
    description:
      "집에 있는 식재료로 만들 수 있는 유튜브 레시피 영상을 추천해주는 앱",
    type: "website",
  },
  robots: { index: true, follow: true },
  other: {
    "naver-site-verification": "3778420dc15666259655d2eba632415c9ae4da5c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
