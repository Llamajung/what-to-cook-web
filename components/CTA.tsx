type Props = {
  variant?: "hero" | "solution" | "mid";
};

export default function CTA({ variant = "hero" }: Props) {
  const label =
    variant === "hero"
      ? "지금 바로 써보기"
      : variant === "solution"
      ? "오늘 저녁 해결하기"
      : "다운로드하고 시작하기";

  const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=com.llamaco.mwamuk&pcampaignid=web_share";
  const appStoreUrl =
    "https://apps.apple.com/kr/app/%EB%AD%90%ED%95%B4%EB%A8%B9%EC%A7%80/id6749675275?l=en-GB";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* 웹으로 보기 */}
      <a
        href="/ingredients"
        className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 active:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
      >
        웹으로 레시피 검색
      </a>

      {/* Google Play */}
      <a
        href={googlePlayUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:opacity-90 dark:bg-emerald-500"
      >
        Google Play 앱 다운로드
      </a>

      {/* App Store */}
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:opacity-90 dark:bg-emerald-500"
      >
        App Store 앱 다운로드
      </a>
    </div>
  );
}