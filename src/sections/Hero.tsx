const Hero = () => {
  return (
    <section id="hero" className="py-24 pb-[200vh]">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
            ✨ Available Now
          </div>
        </div>
        <h1 className="mt-6 text-center text-6xl font-medium md:text-7xl lg:text-8xl">
          Impactful design, created effortlessly
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
          Say goodbye to clunky tools and hello to a seamless experience. Layers
          brings all your operations under one roof.
        </p>
      </div>
    </section>
  );
};

export default Hero;
