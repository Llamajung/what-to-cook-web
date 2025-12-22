// components/RecipeCard.tsx
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  youtuber: string;
  ingredients: string[];
};

export default function RecipeCard({ id, title, youtuber, ingredients }: Props) {
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const url = `https://youtu.be/${id}`;

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-video bg-black">
          <Image
            src={thumb}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority={false}
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