// src/lib/cooks.ts
import "server-only";
import recipeIDs from "@/src/data/recipeIDs.json";
import recipes from "@/src/data/recipes.json";

export type Recipe = {
  id: string;
  ingredients: string[];
  title: string;
  youtuber: string;
};

type RecipeIDsMap = Record<string, string[]>;

export function getCookNames(): string[] {
  return Object.keys(recipeIDs as RecipeIDsMap);
}

export function getRecipesByCookName(cookName: string, limit = 100): Recipe[] {
  const map = recipeIDs as RecipeIDsMap;
  const ids = map[cookName] ?? [];

  if (ids.length === 0) return [];

  // 빠르게 찾기 위해 Set 사용
  const idSet = new Set(ids.slice(0, limit));
  return (recipes as Recipe[]).filter((r) => idSet.has(r.id));
}