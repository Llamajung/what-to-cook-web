// components/RecipeCard.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Props = {
  id: string;
  title: string;
  youtuber: string;
  ingredients: string[];
};

export default function RecipeCard({ id, title, youtuber, ingredients }: Props) {
  // img.youtube.com 보다 i.ytimg.com이 더 안정적인 편
  const hq = useMemo(() => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, [id]);
  const mq = useMemo(() => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`, [id]);
  const def = useMemo(() => `https://i.ytimg.com/vi/${id}/default.jpg`, [id]);

  const [src, setSrc] = useState(hq);

  const url = `https://youtu.be/${id}`;

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-video bg-black">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority={false}
            unoptimized
            onError={() => {
              // hq 실패 → mq → default 순으로 폴백
              setSrc((prev) => (prev === hq ? mq : def));
            }}
          />
        </div>
      </a>

      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-semibold">{title}</h3>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
          {youtuber}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {ingredients.map((ing) => (
            <span
              key={ing}
              className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
            >
              {ing}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}