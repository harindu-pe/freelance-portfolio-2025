"use client";

import {
  Construction,
  Laptop,
  LayoutGrid,
  Search,
  Server,
  TabletSmartphone,
} from "lucide-react";
import { motion } from "motion/react";
import { Fragment } from "react";

export default function Ticker() {
  return (
    <section className="mt-12 overflow-x-clip">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-16 pr-16 font-sans md:gap-24 md:pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                <span className="flex items-center gap-2">
                  <Laptop /> Web Design
                </span>
                <span className="flex items-center gap-2">
                  <TabletSmartphone />
                  UI UX Design
                </span>
                <span className="flex items-center gap-2">
                  <LayoutGrid />
                  Web Apps
                </span>
                <span className="flex items-center gap-2">
                  <Search />
                  SEO
                </span>
                <span className="flex items-center gap-2">
                  <Construction />
                  Maintenance
                </span>
                <span className="flex items-center gap-2">
                  <Server />
                  Hosting
                </span>
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
