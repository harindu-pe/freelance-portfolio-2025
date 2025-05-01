"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity },
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <div className="flex overflow-x-clip p-4">
      <motion.div
        ref={scope}
        className="group flex flex-none cursor-pointer gap-12 pr-12 text-5xl font-medium md:text-6xl lg:md:text-7xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-7xl text-[#e36414]">&#10038;</span>
            <span className="transition duration-300 group-hover:text-[#e36414]">
              <a href="mailto:harindu.pe@gmail.com">Get Started</a>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
