// lib/recipes.ts
import "server-only";
import recipes from "@/src/data/recipes.json";

export type Recipe = {
  id: string;
  title: string;
  youtuber: string;
  ingredients: string[];
};


function shuffleArray<T>(array: T[]): T[] {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }


function normalizeKorean(s: string) {
  return s.replace(/\s+/g, "").trim();
}

export function getRecipesByIngredient(ingredientRaw: string, limit = 200): Recipe[] {
  const ing = normalizeKorean(decodeURIComponent(ingredientRaw));
  if (!ing) return [];

  const list = (recipes as Recipe[]).filter((r) => {
    if (!Array.isArray(r.ingredients)) return false;
    return r.ingredients.some((x) => normalizeKorean(x) === ing);
  });

  // 최신/인기 같은 메타가 없다면, 일단 제목 기준 안정 정렬
//   list.sort((a, b) => a.title.localeCompare(b.title, "ko"));

  const shuffled = shuffleArray(list);

  return shuffled.slice(0, limit);
}

// export function getAllIngredientsTopN(n = 300): string[] {
//   const freq = new Map<string, number>();

//   for (const r of recipes as Recipe[]) {
//     for (const ing of r.ingredients ?? []) {
//       const k = normalizeKorean(ing);
//       if (!k) continue;
//       freq.set(k, (freq.get(k) ?? 0) + 1);
//     }
//   }

//   return [...freq.entries()]
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, n)
//     .map(([k]) => k);
// }