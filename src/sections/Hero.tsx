import Ticker from "@/components/Ticker";
import { Button } from "@/components/ui/button";
import { CornerDownLeft } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="bg-white pb-16">
      <div className="container">
        <div className="rounded-lg bg-gradient-to-b from-[#e36414] to-transparent pb-8">
          <div className="flex justify-center">
            <div className="mt-8 inline-flex rounded-lg bg-black px-4 py-3 font-sans text-xs font-semibold text-white uppercase md:mt-10 lg:py-4">
              ✨ Available For New Projects
            </div>
          </div>
          <h1 className="mx-auto mt-4 max-w-md text-center font-serif text-5xl leading-10 font-semibold text-balance md:mt-8 md:text-6xl md:leading-14 lg:max-w-3xl lg:leading-none lg:md:text-8xl">
            Impactful design crafted for growth
          </h1>
          <p className="mx-auto mt-6 max-w-xs text-center font-sans text-base text-black md:mt-8 md:max-w-md lg:max-w-lg lg:text-lg">
            Say goodbye to clunky tools and hello to a seamless experience.
            Layers brings all your operations under one roof.
          </p>
          <div className="mt-6 flex justify-center gap-2 md:mt-8">
            <Button
              variant="default"
              size="lg"
              className="h-12 font-sans lg:h-14"
              asChild
            >
              <Link href="#callToAction">Get Started Today</Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 font-sans lg:h-14"
              asChild
            >
              <Link href="#work" className="flex items-center gap-2">
                View Work
                <CornerDownLeft size={15} />
              </Link>
            </Button>
          </div>
        </div>
        <Ticker />
      </div>
    </section>
  );
};

export default Hero;
