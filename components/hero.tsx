"use client";
import React from "react";
import TextScramble from "./textScramble";

import { useEffect, useRef } from "react";
const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  let fx: TextScramble;

  useEffect(() => {
    if (textRef.current) {
      fx = new TextScramble(textRef.current);

      const phrases: string[] = [
        "Hello,",
        "Tom is the name",
        "Coding is the game",
        "I can build...",
        "Full Stack Web Apps",
        "Give me shout",
        "If you need a hand",
      ];

      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 800);
        });
        counter = (counter + 1) % phrases.length;
      };

      next();
    }
  }, []);

  return (
    <>
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              ref={textRef}
              className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
            ></h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
              I am a Full Stack Front End Developer with a passion for creating
              beautiful, responsive and accessible websites and applications.
            </p>
          </div>
          <div className="hidden lg:block lg:mt-0 lg:col-span-5">
            <img
              className="rounded"
              src="https://cdn.dribbble.com/users/1818304/screenshots/6601989/rick__dribbble.gif"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
