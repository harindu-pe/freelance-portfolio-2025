"use client";

import Button from "@/components/Button";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="fixed top-0 z-50 w-full py-4 lg:py-8">
        <div className="container max-w-5xl">
          <div className="rounded-[27px] border border-white/15 bg-neutral-950/70 backdrop-blur md:rounded-full">
            <div className="grid grid-cols-2 items-center p-2 px-4 md:pr-2 lg:grid-cols-3">
              <div className="">
                <span className="ml-2 text-lg text-white">Harindu</span>
              </div>
              <div className="hidden items-center justify-center lg:flex">
                <nav className="flex gap-6 font-medium">
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
                  Contact Me
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
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a key={link.label} href={link.href} className="">
                        {link.label}
                      </a>
                    ))}
                    <Button variant="primary">Contact Me</Button>
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
