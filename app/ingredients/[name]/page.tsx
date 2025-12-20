// app/ingredients/[name]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getRecipesByIngredient } from "@/lib/recipes";
import RecipeCard from "@/components/RecipeCard";
import AppStoreButton from "@/components/AppStoreButton";

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const decoded = decodeURIComponent(name);

  return {
    title: `${decoded} 레시피 모음 | 뭐해먹지`,
    description: `${decoded} 들어간 유튜브 레시피를 한 번에 모아봤어요. 냉장고 재료로 바로 만들 수 있는 레시피 추천!`,
    openGraph: {
      title: `${decoded} 레시피 모음 | 뭐해먹지`,
      description: `${decoded} 들어간 유튜브 레시피를 한 번에 모아봤어요.`,
    },
  };
}

export default async function IngredientPage({ params }: Props) {
  const { name } = await params;
  const ingredient = decodeURIComponent(name);

  // ✅ getRecipesByIngredient에는 "디코딩된 값"을 넘기는 게 안전함
  const recipes = getRecipesByIngredient(ingredient, 100);

  const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.llamaco.mwamuk&pcampaignid=web_share";
  const appStoreUrl =
    "https://apps.apple.com/kr/app/%EB%AD%90%ED%95%B4%EB%A8%B9%EC%A7%80/id6749675275?l=en-GB";


  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {/* 냉장고에{" "} */}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              {ingredient} !
            </span>{" "}
            어떻게 활용할까 ?
          </p>

          <h1 className="text-2xl font-extrabold sm:text-3xl">
            {ingredient} 들어간 유튜브 레시피 {recipes.length}가지 레시피
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
            >
              홈으로
            </Link>

            {/* <a
              href="https://play.google.com/store/apps/details?id=com.llamaco.mwamuk&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 dark:bg-emerald-500"
            > 
              앱으로 더 편하게 보기
            </a> */}
            <AppStoreButton
              googlePlayUrl={googlePlayUrl}
              appStoreUrl={appStoreUrl}
              className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 dark:bg-emerald-500"
            />

          </div>
        </div>

        <div className="mt-10">
          {recipes.length === 0 ? (
            <div className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
              아직 <b>{ingredient}</b> 레시피를 못 찾았어. 다른 재료로 검색해볼래?
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