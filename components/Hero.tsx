"use client";

// import Image from "next/image";
import CTA from "./CTA";
import { useState } from "react";
import Image from "next/image";
import AppQRModal from "@/components/AppQRModal";
import { getMobilePlatform } from "@/lib/platform";

export default function Hero() {
  const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.llamaco.mwamuk&pcampaignid=web_share";
  const appStoreUrl =
    "https://apps.apple.com/kr/app/%EB%AD%90%ED%95%B4%EB%A8%B9%EC%A7%80/id6749675275?l=en-GB";


    const [openQR, setOpenQR] = useState(false);

    function handleAppIconClick() {
      const platform = getMobilePlatform();
  
      if (platform === "android") window.location.href = googlePlayUrl;
      else if (platform === "ios") window.location.href = appStoreUrl;
      else setOpenQR(true); // ✅ PC면 QR 모달
    }
  
  return (
    <section className="px-5 pt-10 pb-10 md:pt-16 md:pb-14">
      <div className="mx-auto max-w-6xl">
        {/* 상단 2컬럼 */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
              <span className="text-base">🍳</span>
              <span>유튜브 레시피를 재료 기준으로 빠르게</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
              오늘 뭐해먹지?
              <br />
              <span className="text-emerald-600 dark:text-emerald-400">
                집에 있는 재료로
              </span>{" "}
              바로 찾자
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700 md:text-lg dark:text-zinc-300">
              우리집 식재료를 활용하는 <br />
              유튜브 레시피 영상을 추천해요.
            </p>

            <div className="mt-6">
              <CTA variant="hero" />
            </div>
          </div>

          {/* RIGHT - 앱 아이콘 */}

          <div className="flex justify-center md:justify-end">
            <button
              type="button"
              onClick={handleAppIconClick}
              className="flex cursor-pointer flex-col items-center gap-3 rounded-3xl border border-zinc-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-3xl">
                <Image
                  src="/icon.png"
                  alt="뭐해먹지 앱 아이콘"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="text-base font-bold tracking-tight">뭐해먹지</div>
              {/* <div className="text-xs text-zinc-500 dark:text-zinc-400">
                PC면 QR로 설치
              </div> */}
            </button>
          </div>
          <AppQRModal
            open={openQR}
            onClose={() => setOpenQR(false)}
            googlePlayUrl={googlePlayUrl}
            appStoreUrl={appStoreUrl}
          />
          {/* <div className="flex justify-center md:justify-end">
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
              <div className="relative h-28 w-28 overflow-hidden rounded-3xl">
                <Image
                  src="/icon.png"   // public/icon.png
                  alt="뭐해먹지 앱 아이콘"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="text-base font-bold tracking-tight">
                뭐해먹지
              </div>
            </div>
          </div> */}
        </div>

        {/* 하단 카드 */}
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <StatCard title="재료 기준" desc="집에 있는 것부터" />
          <StatCard title="유튜브 기반" desc="친절한 영상 레시피" />
          <StatCard title="신선한 재료" desc="유통기한을 관리하세요" />
          <StatCard title="초보 친화" desc="실패 확률 낮게" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        {desc}
      </div>
    </div>
  );
}