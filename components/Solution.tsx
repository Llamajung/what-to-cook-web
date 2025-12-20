import CTA from "./CTA";

export default function Solution() {
  return (
    <section className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            해결은 간단 !
          </h2>

          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">“내가 가진 재료”</span>로 시작해서
            가능한 레시피를 찾아보세요.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Step num="1" title="재료 선택" desc="있는 것만 체크" />
            <Step num="2" title="추천 확인" desc="가능한 영상만" />
            <Step num="3" title="바로 요리" desc="유튜브로 따라하기" />
          </div>

          <div className="mt-7">
            <CTA variant="solution" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white dark:bg-emerald-500">
          {num}
        </span>
        <div className="font-semibold">{title}</div>
      </div>
      <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</div>
    </div>
  );
}