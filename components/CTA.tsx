"use client";

import { useState } from "react";
import { getMobilePlatform } from "@/lib/platform";
import AppQRModal from "@/components/AppQRModal";

type Props = {
  variant?: "hero" | "solution" | "mid";
};

export default function CTA({ variant = "hero" }: Props) {
  const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=com.llamaco.mwamuk&pcampaignid=web_share";
  const appStoreUrl =
    "https://apps.apple.com/kr/app/%EB%AD%90%ED%95%B4%EB%A8%B9%EC%A7%80/id6749675275?l=en-GB";

  const [openQR, setOpenQR] = useState(false);

  function handleAppIconClick() {
    const platform = getMobilePlatform();

    if (platform === "android") {
      window.location.href = googlePlayUrl;
    } else if (platform === "ios") {
      window.location.href = appStoreUrl;
    } else {
      setOpenQR(true); // ✅ PC면 QR 모달
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* 식재료 검색 */}
      <a
        href="/ingredients"
        className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 active:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
      >
        식재료로 검색
      </a>

      {/* 요리명 검색 */}
      <a
        href="/cooks"
        className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 active:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
      >
        요리명 검색
      </a>

      {/* 앱 다운로드 */}
      <button
        type="button"
        onClick={handleAppIconClick}
        className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:opacity-90 dark:bg-emerald-500"
      >
        앱 다운로드
      </button>
      <AppQRModal
        open={openQR}
        onClose={() => setOpenQR(false)}
        googlePlayUrl={googlePlayUrl}
        appStoreUrl={appStoreUrl}
      />
    </div>
  );
}