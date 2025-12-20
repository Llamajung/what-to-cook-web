"use client";

import { useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

type Props = {
  open: boolean;
  onClose: () => void;
  googlePlayUrl: string;
  appStoreUrl: string;
};

export default function AppQRModal({
  open,
  onClose,
  googlePlayUrl,
  appStoreUrl,
}: Props) {
  // 🔹 ESC 키로 닫기
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="앱 다운로드 QR 코드"
      onMouseDown={onClose}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* modal */}
      <div
        className="relative w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-extrabold">모바일에서 스캔하세요</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              카메라로 QR을 찍으면 스토어로 이동해요.
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
            aria-label="닫기"
          >
            닫기
          </button>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-3">
            <div className="text-sm font-semibold">Google Play</div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
              <QRCodeCanvas value={googlePlayUrl} size={140} />
            </div>
            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-700 underline underline-offset-4 dark:text-emerald-400"
            >
              링크로 열기
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="text-sm font-semibold">App Store</div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
              <QRCodeCanvas value={appStoreUrl} size={140} />
            </div>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-700 underline underline-offset-4 dark:text-emerald-400"
            >
              링크로 열기
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
          💡 팁: 휴대폰에서 이 페이지를 열면 자동으로 스토어로 이동해요.
        </div>
      </div>
    </div>
  );
}