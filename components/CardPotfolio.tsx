"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/Hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[700px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={2000}
                  height={2000}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 "
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <h2 className="max-w-6xl mx-auto w-full gap-4 mb-10 text-3xl lg:text-5xl lg:leading-tight  text-center tracking-tight font-medium text-black dark:text-white">
        My Projects 🎨
      </h2>
      <ul className="max-w-6xl mx-auto w-full gap-4 mb-20">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={3000}
                  height={3000}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-60 md:h-20 md:w-40 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "Eth Global second place in LFGHO hackathon. A Yearn multi-strategy V3 vault that uses the ERC 4626 Standard to aggregate current yield sources available for GHO. Built with a team of four.",
    title: "LFGHO Hackathon Second Place",
    src: "/project-LFGHO.png",
    ctaText: "Read More",
    ctaLink: "https://ethglobal.com/showcase/gho-yearnv3-vault-wau9w",
    content: () => {
      return (
        <p>
          A Yearn multi-strategy V3 vault that uses the ERC 4626 Standard to
          aggregate current yield sources available for GHO. Built with a team
          of four. Hackathon project i was apart of where we won second place
          for the vault category. I was responsible for the UI and the front end
          of the project. NextJS - I used NextJS 14 to build the site, Nextjs
          helped me build the UI at speed, as the hackathon was only 2 weeks
          long. I used NextJS for the routing, the server side rendering and the
          static site generation. I also used NextJS for the API routes to
          interact with the smart contracts. Vercel - I used Vercel to quickly
          and easily deploy the front end for a live demo. It works nicely with
          NextJS build and deploys easily from a github repo. Tailwind CSS,
          ShadCN UI - I used Tailwind CSS to style the site, I used the ShadCN
          UI for reusable and lightweight components. Ethers.js - Family Wallet
          Connect Kit I used Ethers.js to interact with the smart contracts, I
          used the Family Wallet Connect Kit to connect to the users wallet and
          interact with the smart contracts.
        </p>
      );
    },
  },
  {
    description:
      "Ecryptify is an interactive web app that I built to support a modern technology recruitment company.  I built many features like a automated newsletter using firebase functions",
    title: "Ecryptify Recruitment Agency Site",
    src: "/project-Ecryptify.png",
    ctaText: "Read More",
    ctaLink: "https://ecryptify.com/",
    content: () => {
      return (
        <p>
          Dynamic blog and job post creation, behind a admin dashboard. Contact
          forms with email alerts with more planned on the way. The site is
          built using NextJS 13.5, NextJs is great for building fast scalable
          web apps and handles intergration nicely like framer motion animations
          I have used throughout the site. Firebase - I used Firebase
          extensively for this project, I used it for hosting the site, the
          database, the functions and the authentication. I also used it for the
          newsletter and contact forms. I used the firebase admin sdk to create
          a admin dashboard to create blog posts and job posts.
        </p>
      );
    },
  },

  {
    description:
      "Job.Cymru is a interactive job board with a fully working payment system, user authentication a dashboard and quick applications",
    title: "Job.Cymru - Welsh Job Board",
    src: "/project-jobCymru.png",
    ctaText: "Read More",
    ctaLink: "https://job.cymru/",
    content: () => {
      return (
        <p>
          I built this as a side project as i wanted to build something that
          supported Wales with a more modern and interactive feel to it. I used
          Nextjs 14 and tpyescript to build the site, I used tailwind and shadcn
          for the UI. For the payment i implemented Stripe payments for secure
          and safe payments. Finally for the dashboard and authentification i
          used my own custom code in conjuction with firebase for the backend
          service allowing me to quickly and securely implement authentifcation
          and store necessary data.
        </p>
      );
    },
  },
  {
    description:
      "For this hackathon my team and i decided to build a project for the scientific community. We created a brand new app called zkCert for scientific article anonymous commenting.",
    title:
      "zkCert, Hackathon - platform for anonymous comments on scientific articles",
    src: "/project-ZKCERT.png",
    ctaText: "Read More",
    ctaLink: "https://ethglobal.com/showcase/zkcert-06upk",
    content: () => {
      return (
        <p>
          In the app, users can search scientific articles using DOI and make
          anonymous comments on them. We integrated web3 wallet login and delved
          into zkEMAIL sowftware for email verification. When the user wants to
          verify an institutional email, the app will generate a random word
          that the user needs to autoemail themselves using the institutional
          email, the user then uploads the email signature with the random word
          included in it. I was responsible for the front end, and most of the
          backend as well as the web 3 wallet login that we used to verify the
          users. I built this using NextJs14, typescript, tailwind and deployed
          live using Vercel. We used a modern tailwindcss library, NextUI for a
          smoother and more visually appealing UX. For storing papers adding
          comments to papers etc we used a postgres sql database connected via
          vercel to store any data we needed like papers and comments. We then
          connected to the database from our front end via api calls in
          typescript to the database.
          <br></br>
          For logging users in so we could differentiate users while still
          trying to keep them anonymous and not collect any data that could
          identity them we decided to use sign in with ethereum. For this we
          used Dynamic.xyz library along with ethers.js which allowed us to
          implement users to sign up with their eth wallet address. Once a user
          signed up we stored their wallet address in our db, allowing us to
          have a anonymous login and remember users, enabling us to see which
          accounts were verifed via zk email and which we not.
        </p>
      );
    },
  },
  {
    description:
      "A modern web development agency site i built using NextJS 14 and tailwind, i went for a modern clean feel with subtle animations and transtions.",
    title: "Web Development Agency",
    src: "/studioiq-sc.png",
    ctaText: "Read More",
    ctaLink: "https://www.studioiq.co.uk/",
    content: () => {
      return (
        <p>
          I recently developed a cutting-edge web development agency site using
          NextJS 14 and Tailwind CSS. My focus was on creating a modern and
          clean aesthetic, ensuring an intuitive user experience. I incorporated
          subtle animations and smooth transitions to enhance the site&apos;s
          interactivity without overwhelming the user. The combination of
          NextJS&apos;s powerful framework and Tailwind&apos;s utility-first
          approach allowed me to efficiently build a highly responsive and
          visually appealing website.
          <br />
          In addition to the main site, I implemented a blog page using MDX
          (Markdown with JSX). This approach allowed me to seamlessly integrate
          React components within markdown content, providing a versatile and
          dynamic way to present blog posts. The MDX blog page is designed to be
          both user-friendly and developer-friendly, enabling easy content
          updates and rich interactivity.
        </p>
      );
    },
  },
];
