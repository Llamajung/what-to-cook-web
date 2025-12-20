// app/ingredients/IngredientsIndexClient.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation"; // 🔹 추가
import ingData from "../../components/ingData.json";

type Props = {
  ingredients: string[];
};

function normalize(s: string) {
  return s.replace(/\s+/g, "").trim();
}

// 사용자가 입력한 값이 standard "키(별칭)"면 value(표준 재료명)로 치환
function toStandardIngredient(input: string) {
  const raw = input.trim();
  if (!raw) return "";
  const mapped = (ingData as any).standard?.[raw];
  return mapped ? mapped : raw;
}

export default function IngredientsIndexClient({ ingredients }: Props) {
  const router = useRouter(); // 🔹 추가
  const [q, setQ] = useState("");

  // 자동완성 후보 풀
  const autocompletePool = useMemo(() => {
    const freq: string[] = (ingData as any).frequent ?? [];
    const stdKeys: string[] = Object.keys((ingData as any).standard ?? {});
    return Array.from(new Set([...freq, ...stdKeys]));
  }, []);

  // 자동완성 목록
  const suggestions = useMemo(() => {
    const term = normalize(q);
    if (!term) return [];
    return autocompletePool
      .filter((s) => normalize(s).includes(term))
      .slice(0, 20);
  }, [q, autocompletePool]);

  // “바로 보기”용 표준화 이름
  const goName = useMemo(() => {
    const raw = q.trim() || "당근";
    return toStandardIngredient(raw);
  }, [q]);

  // 기존 재료 필터링
  const filtered = useMemo(() => {
    const term = normalize(q);
    if (!term) return ingredients;
    return ingredients.filter((ing) => normalize(ing).includes(term));
  }, [q, ingredients]);

  // 🔹 Enter 키 처리 (자동완성 1순위)
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const target = suggestions[0] ?? q;
      const standard = toStandardIngredient(target);
      if (standard) {
        router.push(`/ingredients/${encodeURIComponent(standard)}`);
      }
    }
  }

  return (
    <section className="space-y-4">
      {/* 검색창 + 버튼 */}
      <div className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={handleKeyDown} // 🔹 추가
            placeholder="재료 검색 (예: 당근, 양파, 달걀)"
            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-950"
          />

          <Link
            href={`/ingredients/${encodeURIComponent(goName)}`}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:opacity-90 dark:bg-emerald-500"
          >
            바로 보기
          </Link>
        </div>

        {/* 자동완성 드롭다운 */}
        {suggestions.length > 0 && (
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            {suggestions.map((s) => {
              const std = (ingData as any).standard?.[s] as string | undefined;
              const display = std ? `${s} → ${std}` : s;

              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    const standard = toStandardIngredient(s);
                    router.push(
                      `/ingredients/${encodeURIComponent(standard)}`
                    ); // 🔹 즉시 이동
                  }}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900"
                >
                  <span className="truncate font-semibold">{display}</span>
                  <span className="ml-3 shrink-0 text-xs text-zinc-400">
                    Enter
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 결과 수 */}
      <div className="text-xs text-zinc-500 dark:text-zinc-400">
        {q.trim()
          ? `검색 결과 ${filtered.length}개`
          : `추천 재료 200개`}
      </div>

      {/* 재료 링크들 */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.slice(0, 200).map((ing) => (
          <Link
            key={ing}
            href={`/ingredients/${encodeURIComponent(ing)}`}
            className="group rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="truncate font-semibold">{ing}</span>
              <span className="text-xs text-zinc-400 group-hover:text-emerald-600 dark:text-zinc-500 dark:group-hover:text-emerald-400">
                보기 →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* 검색 결과 0 */}
      {filtered.length === 0 && (
        <div className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
          검색 결과가 없어. 철자 확인하거나 다른 재료로 해보자!
        </div>
      )}
    </section>
  );
}