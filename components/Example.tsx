export default function Example() {
    const chips = ["계란", "오이", "소금"];
  
    const results = [
      { title: "계란 샌드위치", note: "재료 적고 빠르게" },
      { title: "오이무침", note: "3분 완성" },
      { title: "간단 비빔국수", note: "초보도 OK" },
    ];
  
    return (
      <section className="px-5 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            이렇게 추천해드려요
          </h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            예: <span className="font-semibold">계란 + 오이 + 소금</span>만 있으면
            만들 수 있는 레시피들만.
          </p>
  
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-sm font-semibold">내 재료</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
                  >
                    {c}
                  </span>
                ))}
              </div>
  
              <div className="mt-6 text-sm font-semibold">→ 추천 결과</div>
              <div className="mt-3 space-y-2">
                {results.map((r) => (
                  <div
                    key={r.title}
                    className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <div className="font-semibold">{r.title}</div>
                    <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {r.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-5 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
              <div className="text-sm font-semibold">스크린샷/영상 자리</div>
              <div className="mt-3 rounded-2xl border border-dashed border-zinc-300 bg-white p-6 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-400">
                여기에 앱 스크린샷을 넣으면 전환율이 확 올라가.
                <br />
                나중에 너가 이미지 주면 딱 맞게 레이아웃 잡아줄게.
              </div>
  
              <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                ✅ “설명”보다 “보여주기”가 훨씬 세다.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }