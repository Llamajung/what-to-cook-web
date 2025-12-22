// app/cooks/[name]/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="text-2xl font-extrabold">요리명을 찾을 수 없어요</h1>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
          앱에서 더 많은 유투브 레시피들을 만나보세요.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/"
            className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white"
          >
            홈으로
          </Link>
          <Link
            href="/ingredients"
            className="rounded-2xl border border-zinc-200 px-4 py-2 text-sm font-semibold dark:border-zinc-800"
          >
            재료로 찾기
          </Link>
        </div>
      </div>
    </main>
  );
}