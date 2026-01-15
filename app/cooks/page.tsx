// app/cooks/page.tsx
import type { Metadata } from "next";
import CooksIndexClient from "./CooksIndexClient"

// export const metadata: Metadata = {
//   title: "요리명으로 레시피 찾기 | 뭐해먹지",
//   description:
//     "요리명(예: 김치전, 가지구이)으로 유튜브 레시피를 빠르게 찾아보세요. ",
// };

export const metadata: Metadata = {
  title: "요리명으로 레시피 찾기 | 뭐해먹지",
  description: "요리명(예: 김치전, 가지구이)으로 유튜브 레시피를 빠르게 찾아보세요.",
  alternates: {
    canonical: "/cooks",
  },
};

export default function CooksPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            요리명으로 바로 찾기
          </p>
          <h1 className="text-2xl font-extrabold sm:text-3xl">
            요리명 검색 
          </h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            예: 김치전, 가지구이…
          </p>
        </div>

        <div className="mt-8">
          <CooksIndexClient />
        </div>
      </div>
    </main>
  );
}