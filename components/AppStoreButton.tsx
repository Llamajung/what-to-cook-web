"use client";

import { useState } from "react";
import AppQRModal from "@/components/AppQRModal";
import { getMobilePlatform } from "@/lib/platform";

type Props = {
  className?: string;
  label?: string;
  googlePlayUrl: string;
  appStoreUrl: string;
};

export default function AppStoreButton({
  className = "",
  label = "앱으로 더 편하게 보기",
  googlePlayUrl,
  appStoreUrl,
}: Props) {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    const platform = getMobilePlatform(); // "ios" | "android" | "other"

    if (platform === "ios") {
      window.open(appStoreUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (platform === "android") {
      window.open(googlePlayUrl, "_blank", "noopener,noreferrer");
      return;
    }

    // PC / 기타: QR 모달
    setOpen(true);
  };

  return (
    <>
      <button type="button" onClick={onClick} className={className}>
        {label}
      </button>

      <AppQRModal
        open={open}
        onClose={() => setOpen(false)}
        googlePlayUrl={googlePlayUrl}
        appStoreUrl={appStoreUrl}
      />
    </>
  );
}