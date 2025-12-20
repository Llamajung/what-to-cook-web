export default function Problem() {
    const items = [
      "냉장고 열어봤는데 애매한 재료만 있음",
      "유튜브 검색해도 재료가 안 맞는 레시피가 대부분",
      "보던 레시피가 갑자기 없는 재료 요구함",
      "결국 ‘배달’로 끝나서 돈+시간이 나감",
    ];
  
    return (
      <section className="px-5 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            이런 고민 해보셨죠 ?
          </h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            “오늘 뭐해먹지?” 고민이 반복되는 이유는,{" "}
            <span className="font-semibold">재료 기준으로 찾기 어렵기 때문</span>.
          </p>
  
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {items.map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {t}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }