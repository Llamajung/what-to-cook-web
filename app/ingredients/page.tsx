// app/ingredients/page.tsx
import type { Metadata } from "next";
import IngredientsIndexClient from "./IngredientsIndexClient";
// import { getAllIngredientsTopN } from "@/lib/recipes";
import ingData from "../../components/ingData.json"

export const metadata: Metadata = {
  title: "재료로 레시피 찾기 | 뭐해먹지",
  description:
    "냉장고 재료(예: 당근, 양파, 계란)로 유튜브 레시피를 바로 찾아보세요. 재료 페이지로 들어가면 해당 재료가 포함된 레시피만 모아볼 수 있어요.",
};

export default function IngredientsIndexPage() {
  // 빈도 상위 N개만 노출 (너무 많으면 SEO/UX 둘다 안좋음)

  const noSauce = ingData.withNoSauce;
  const ingredients = noSauce;


  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-extrabold sm:text-3xl">
          재료로 유투브 레시피 찾기
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          식재료를 고르면 해당 재료가 들어간 유튜브 레시피들을 보여줘요
          {/* .
          (구글/네이버가 잘 읽을 수 있는 “링크 페이지” 구조) */}
        </p>

        {/* 클라에서 검색/필터 */}
        <div className="mt-6">
          <IngredientsIndexClient ingredients={ingredients} />
        </div>
      </div>
    </main>
  );
}