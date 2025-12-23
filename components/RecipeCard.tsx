// components/RecipeCard.tsx
"use client";

type Props = {
  id: string;
  title: string;
  youtuber: string;
  ingredients: string[];
};

export default function RecipeCard({ id, title, youtuber, ingredients }: Props) {
  const url = `https://youtu.be/${id}`;

  // ✅ 썸네일 후보 (hq → mq → default)
  const hq = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const mq = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
  const def = `https://i.ytimg.com/vi/${id}/default.jpg`;

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-video bg-black">
          {/* ✅ Next/Image 최적화 자체를 안 씀 → Vercel Transformation 쿼터 안 잡아먹음 */}
          <img
            src={hq}
            alt={title}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              const img = e.currentTarget;

              // hq 실패 -> mq -> default
              if (img.src === hq) img.src = mq;
              else if (img.src === mq) img.src = def;
              else img.src = def; // 최종 고정
            }}
          />
        </div>
      </a>

      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-semibold">{title}</h3>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{youtuber}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {ingredients.slice(0, 6).map((ing) => (
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