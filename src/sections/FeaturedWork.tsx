import WorkCarousel from "@/components/WorkCarousel";
import React from "react";

const FeaturedWork = () => {
  return (
    <section id="work" className="overflow-x-hidden pt-24 pb-8 text-white">
      <div className="container">
        <div className="rounded-lg bg-black px-4 py-8 md:px-8">
          <h1 className="font-sans text-2xl font-semibold text-white md:text-4xl">
            Featured Work
          </h1>
          <div className="relative mt-6">
            <WorkCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
