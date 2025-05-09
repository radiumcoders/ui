import AnimatedText from "@/components/ui/animatedText";
import Sticky from "@/components/ui/stickyIco";
import Zoup from "@/components/ui/zoup";
import { EarthLock } from "lucide-react";


function HomePage() {
  return (
    <section
      id="home"
      className="flex flex-col sm:flex-row w-full items-center justify-center h-screen relative"
    >
      {/* <Sticky>
        <div className="p-4">
        <EarthLock className="h-24 w-24" />
        </div>
      </Sticky> */}
      <Zoup>
        Hello
      </Zoup>
      {/* <BentoGridDemo />
       */}
      {/* <AnimatedText from="end" duration={1.5} delay={0.5}>
        <p className="text-6xl uppercase font-bold text-rose-300 space-x-1.5">
          hello
        </p>
      </AnimatedText> */}
    </section>
  );
}

export default HomePage;
