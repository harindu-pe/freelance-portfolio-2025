"use client";

import logoImage from "@/assets/images/mapleLeaf.png";
import Button from "@/components/Button";
import { navLinks } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Call once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="fixed top-0 z-50 w-full py-4 lg:py-4">
        <div className="container max-w-5xl">
          <div
            className={twMerge(
              "bg rounded-xl border border-transparent bg-white transition-all duration-300 ease-in",
              hasScrolled && "shadow-md",
              isOpen && "border border-black/15",
            )}
          >
            <div className="grid grid-cols-2 items-center p-2 px-4 md:pr-2 lg:grid-cols-3 lg:p-3 lg:pr-3">
              <div className="flex items-center">
                <Image
                  src={logoImage}
                  alt="Layers Logo"
                  className="ml-2 h-10 w-auto"
                />
                <span className="ml-2 text-xl font-semibold">Harindu</span>
              </div>
              <div className="hidden items-center justify-center lg:flex">
                <nav className="flex gap-6 text-sm font-semibold">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-translate-y-1 rotate-45",
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "translate-y-1 -rotate-45",
                    )}
                  ></line>
                </svg>

                <Button
                  variant="primary"
                  className="hidden items-center md:inline-flex"
                >
                  Book a free call
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-8 p-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="font-semibold"
                      >
                        {link.label}
                      </a>
                    ))}
                    <Button variant="primary" className="w-full text-sm">
                      Book a free call
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
    </>
  );
}
