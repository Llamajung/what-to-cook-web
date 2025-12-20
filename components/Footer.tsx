"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  // ESC 키로 닫기
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <footer className="px-5 py-10">
        <div className="mx-auto max-w-5xl border-t border-zinc-200 pt-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                뭐해먹지
              </span>{" "}
              · 유튜브 레시피 검색
            </div>

            <div className="flex gap-4">
              <a
                className="hover:underline"
                href="https://yakjoyak.com/privacy/mohaemukji.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                개인정보처리방침
              </a>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="hover:underline"
              >
                문의
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* 문의 모달 */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          onMouseDown={() => setOpen(false)}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* modal */}
          <div
            className="relative w-full max-w-sm rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="text-lg font-extrabold">문의하기</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                닫기
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <div>
                📞 전화번호:{" "}
                <a
                  href="tel:15442092"
                  className="font-semibold text-emerald-600 underline underline-offset-4 dark:text-emerald-400"
                >
                  1544-2092
                </a>
              </div>

              <div>
                ✉️ 이메일:{" "}
                <a
                  href="mailto:woodenpharm@naver.com"
                  className="font-semibold text-emerald-600 underline underline-offset-4 dark:text-emerald-400"
                >
                  woodenpharm@naver.com
                </a>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-zinc-50 p-3 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
              평일 영업시간 기준으로 순차적으로 답변드릴게요 🙂
            </div>
          </div>
        </div>
      )}
    </>
  );
}