"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/util/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    description2?: string;
    description3?: string;
    link?: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardOffsets = content.map((_, index) => index / content.length);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const closestIndex = cardOffsets.findIndex((offset, index) => {
      const nextOffset = cardOffsets[index + 1] || 1;
      return latest >= offset && latest < nextOffset;
    });
    setActiveCard(closestIndex);
  });

  // Mapping CSS variable colors to actual color values
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="h-[35rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={`${item.title}-${index}`} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.5 }}
                className="text-4xl font-bold dark:text-slate-100 mt-10"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.5 }}
                className="text-lg dark:text-slate-300 text-slate-700 max-w-2xl mt-10"
              >
                {item.description}
              </motion.p>
              {item.description2 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.5 }}
                  className="text-lg dark:text-slate-300 text-slate-700 max-w-2xl mt-10"
                >
                  {item.description2}
                </motion.p>
              )}
              {item.description3 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.5 }}
                  className="text-lg dark:text-slate-300 text-slate-700 max-w-2xl mt-10 mb-20"
                >
                  {item.description3}
                </motion.p>
              )}

              {item.link && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.5 }}
                  className=" max-w-2xl mt-10 mb-20"
                >
                  <a
                    href={item.link}
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    View Project Live
                  </a>
                </motion.div>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-200 w-200 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
