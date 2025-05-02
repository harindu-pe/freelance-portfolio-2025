"use client";

import logoImage from "@/assets/images/mapleLeaf.png";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

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
      <section id="header" className="fixed top-0 z-50 w-full py-2 lg:py-4">
        <div className="container max-w-[26rem] md:max-w-3xl lg:md:max-w-4xl">
          <div
            className={twMerge(
              "bg rounded-xl border border-transparent bg-white transition-all duration-300 ease-in",
              hasScrolled && "shadow-md",
              isOpen && "border border-black/15",
            )}
          >
            <div className="grid grid-cols-2 items-center p-2 px-4 md:pr-2 lg:grid-cols-3 lg:p-3 lg:pr-3">
              <Link href="/" className="flex items-center">
                <Image
                  src={logoImage}
                  alt="Layers Logo"
                  className="ml-2 h-10 w-auto"
                />
                <span className="ml-2 font-serif text-xl font-semibold">
                  Harindu
                </span>
              </Link>
              <div className="hidden items-center justify-center font-sans lg:flex">
                <nav className="flex gap-6 text-sm">
                  {navLinks.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
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
                  asChild
                  className="hidden h-10 font-sans md:inline-flex"
                >
                  <Link href="#callToAction">Contact Me</Link>
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
                      <Link
                        key={link.label}
                        href={link.href}
                        className="font-sans text-sm font-semibold"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Button asChild className="h-10 w-full font-sans">
                      <Link href="#callToAction">Contact Me</Link>
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
