// export default function Home() {
//   return (
//     <main style={{ padding: 24 }}>
//       <h1>뭐해먹지</h1>
//       <p>냉장고 재료로 유튜브 레시피를 찾아줘요 🍳</p>
//     </main>
//   );
// }

// export const metadata = {
//   title: "오늘 뭐해먹지? | 뭐해먹지",
//   description: "냉장고 재료로 바로 만들 수 있는 유튜브 레시피 추천",
// };


import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Example from "@/components/Example";
// import Benefits from "@/components/Benefits";
// import CTA from "@/components/CTA";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Hero />
      <Problem />
      <Solution />
      {/* <Example /> */}
      {/* <Benefits /> */}
      {/* <CTA variant="mid" /> */}
      <Footer />
    </main>
  );
}