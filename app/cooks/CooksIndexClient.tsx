// app/cooks/CooksIndexClient.tsx
"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import cookName from "@/components/cookNames.json"; // string[]

function normalize(s: string) {
  return s.replace(/\s+/g, "").trim();
}

export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function CooksIndexClient() {
  const router = useRouter();
  const [q, setQ] = useState("");

  // ✅ 첫 렌더(서버/클라 동일)는 원본 그대로
  const [cooks, setCooks] = useState<string[]>(() => cookName);

  // ✅ 마운트(클라에서만) 이후에 셔플 → hydration mismatch 안 남
  useEffect(() => {
    setCooks(shuffleArray(cookName));
  }, []);

  const suggestions = useMemo(() => {
    const term = normalize(q);
    if (!term) return [];
    return cooks.filter((name) => normalize(name).includes(term)).slice(0, 20);
  }, [q, cooks]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;

      const first = suggestions[0];
      if (first) {
        router.push(`/cooks/${encodeURIComponent(first)}`);
      } else {
        const fallback = q.trim() || "김치전";
        router.push(`/cooks/${encodeURIComponent(fallback)}`);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [suggestions, router, q]);

  const filtered = useMemo(() => {
    const term = normalize(q);
    if (!term) return cooks;
    return cooks.filter((name) => normalize(name).includes(term));
  }, [q, cooks]);

  const goName = useMemo(() => q.trim() || "김치전", [q]);

  return (
    <section className="space-y-4">
      <div className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="요리명 검색 (예: 김치전, 가지구이)"
            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-950"
          />

          <Link
            href={`/cooks/${encodeURIComponent(goName)}`}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:opacity-90 dark:bg-emerald-500"
          >
            바로 보기
          </Link>
        </div>

        {suggestions.length > 0 && (
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            {suggestions.map((name, idx) => (
              <button
                key={name}
                type="button"
                onClick={() => {
                  router.push(`/cooks/${encodeURIComponent(name)}`);
                }}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                <span className="truncate font-semibold">{name}</span>
                <span className="ml-3 shrink-0 text-xs text-zinc-400">
                  {idx === 0 ? "Enter" : ""}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="text-xs text-zinc-500 dark:text-zinc-400">
        {q.trim() ? `검색 결과 ${filtered.length}개` : `추천 요리 ${filtered.length}개`}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.slice(0, 300).map((name) => (
          <Link
            key={name}
            href={`/cooks/${encodeURIComponent(name)}`}
            className="group rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="truncate font-semibold">{name}</span>
              <span className="text-xs text-zinc-400 group-hover:text-emerald-600 dark:text-zinc-500 dark:group-hover:text-emerald-400">
                보기 →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
          검색 결과가 없습니다. 앱에서 더 많은 레시피들을 만나보세요!
        </div>
      )}
    </section>
  );
}