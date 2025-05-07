import AnimatedText from "@/components/ui/animatedText";
import { BentoGridDemo } from "@/components/ui/bentoGrid";
import { ReactNode } from "react";


function HomePage() {
  return (
    <section
      id="home"
      className="flex flex-col sm:flex-row w-full items-center justify-center h-screen relative"
    >
      <Content />
      {/* <BentoGridDemo />
       */}
      <AnimatedText delay={1}>
        <p className="text-6xl uppercase font-bold text-rose-300 space-x-1.5">hello</p>
       </AnimatedText>
    </section>
  );
}

export default HomePage;

function Content({ children }: { children?: ReactNode }) {
  return (
    <div id="content" className="mb-4 sm:mb-0 sm:mr-8 w-[50%] z-10">
      {children}
    </div>
  );
}
