export default function Benefits() {
    const items = [
      {
        title: "재료 기준 추천",
        desc: "있는 재료로 만들 수 있는 영상만 모아줘",
        icon: "🧺",
      },
      {
        title: "유튜브 바로 연결",
        desc: "검색/스크롤 낭비 없이 바로 재생",
        icon: "▶️",
      },
      {
        title: "초보도 쉽게",
        desc: "실패 확률 낮은 레시피부터",
        icon: "✅",
      },
    ];
  
    return (
      <section className="px-5 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            그래서 뭐가 좋아?
          </h2>
  
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {items.map((it) => (
              <div
                key={it.title}
                className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="text-2xl">{it.icon}</div>
                <div className="mt-2 text-base font-semibold">{it.title}</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {it.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }