// app/cooks/[name]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import { getRecipesByCookName } from "@/lib/cooks";
import AppStoreButton from "@/components/AppStoreButton";

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const decoded = decodeURIComponent(name);

  return {
    title: `${decoded} 유튜브 레시피 | 뭐해먹지`,
    description: `${decoded} 관련 유튜브 레시피를 모아봤어요. 오늘 메뉴 고민 끝!`,
    openGraph: {
      title: `${decoded} 유튜브 레시피 | 뭐해먹지`,
      description: `${decoded} 관련 유튜브 레시피를 모아봤어요.`,
    },
  };
}

export default async function CookPage({ params }: Props) {
  const { name } = await params;
  const cookName = decodeURIComponent(name);

  const recipes = getRecipesByCookName(cookName, 100);

  const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=com.llamaco.mwamuk&pcampaignid=web_share";
  const appStoreUrl =
    "https://apps.apple.com/kr/app/%EB%AD%90%ED%95%B4%EB%A8%B9%EC%A7%80/id6749675275?l=en-GB";

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              {cookName}
            </span>{" "}
            레시피 모음
          </p>

          <h1 className="text-2xl font-extrabold sm:text-3xl">
            {cookName} 유튜브 레시피 {recipes.length}개
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
            >
              홈으로
            </Link>

            <Link
              href="/cooks"
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
            >
              식재료 검색
            </Link>
            <Link
              href="/cooks"
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
            >
              요리명 검색
            </Link>

            <AppStoreButton
              googlePlayUrl={googlePlayUrl}
              appStoreUrl={appStoreUrl}
              className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 dark:bg-emerald-500"
            />
            {/* <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 dark:bg-emerald-500"
            >
              Google Play
            </a>

            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 dark:bg-emerald-500"
            >
              App Store
            </a> */}
          </div>
        </div>

        <div className="mt-10">
          {recipes.length === 0 ? (
            <div className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
              아직 <b>{cookName}</b> 레시피를 못 찾았어. 다른 요리명으로 찾아볼래?
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recipes.map((r) => (
                <RecipeCard
                  key={r.id}
                  id={r.id}
                  title={r.title}
                  youtuber={r.youtuber}
                  ingredients={r.ingredients}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}