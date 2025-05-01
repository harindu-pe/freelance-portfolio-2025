"use client";
import { motion } from "motion/react";
import { MouseEvent, ReactNode, useRef, useState } from "react";

interface SocialIconProps {
  children: ReactNode;
  href: string;
}

export default function SocialIcon({ children, href }: SocialIconProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      className="p-2"
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#e36414]"
        href={href}
      >
        {children}
      </a>
    </motion.div>
  );
}
