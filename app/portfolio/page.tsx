"use client";
import Navbar from "@/components/navbar";
import React from "react";
import { motion } from "framer-motion";
import { StickyScroll } from "@/components/Sticky-Scroll-Reveal";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";

const content = [
  {
    title: "LFGHO Hackathon 🥈 Second Place",
    description:
      "A Yearn multi-strategy V3 vault that uses the ERC 4626 Standard to aggregate current yield sources available for GHO. Built with a team of four.",
    description2:
      " Hackathon project i was apart of where we won second place for the vault category. I was responsible for the UI and the front end of the project. NextJS - I used NextJS 14 to build the site, Nextjs helped me build the UI at speed, as the hackathon was only 2 weeks long. I used NextJS for the routing, the server side rendering and the static site generation. I also used NextJS for the API routes to interact with the smart contracts.",
    description3:
      "Vercel - I used Vercel to quickly and easily deploy the front end for a live demo. It works nicely with NextJS build and deploys easily from a github repo. Tailwind CSS, ShadCN UI - I used Tailwind CSS to style the site, I used the ShadCN UI for reusable and lightweight components. Ethers.js - Family Wallet Connect Kit I used Ethers.js to interact with the smart contracts, I used the Family Wallet Connect Kit to connect to the users wallet and interact with the smart contracts.",
    link: "https://ethglobal.com/showcase/gho-yearnv3-vault-wau9w",
    content: (
      <div className="flex items-center justify-center text-white">
        <Image
          src="/project-LFGHO.png"
          width={900}
          height={900}
          className=" object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Ecryptify - Recruitment Platform",
    description:
      "Ecryptify is an interactive web app that I built to support a modern technology recruitment company. I built many features like a automated newsletter using firebase functions. Dynamic blog and job post creation, behind a admin dashboard. Contact forms with email alerts with more planned on the way.",
    description2:
      " The site is built using NextJS 13.5, NextJs is great for building fast scalable web apps and handles intergration nicely like framer motion animations I have used throughout the site. Firebase - I used Firebase extensively for this project, I used it for hosting the site, the database, the functions and the authentication. I also used it for the newsletter and contact forms. I used the firebase admin sdk to create a admin dashboard to create blog posts and job posts.",
    link: "https://ecryptify.com/",
    content: (
      <div className="flex items-center justify-center text-white">
        <Image
          src="/project-Ecryptify.png"
          width={900}
          height={900}
          className=" object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title:
      "zkCert, Hackathon - platform for anonymous comments on scientific articles",
    description:
      "For this hackathon my team and i decided to build a project for the scientific community. We created a brand new app called zkCert for scientific article anonymous commenting. In the app, users can search scientific articles using DOI and make anonymous comments on them. We integrated web3 wallet login and delved into zkEMAIL sowftware for email verification. When the user wants to verify an institutional email, the app will generate a random word that the user needs to autoemail themselves using the institutional email, the user then uploads the email signature with the random word included in it.",

    description2:
      "I was responsible for the front end, and most of the backend as well as the web 3 wallet login that we used to verify the users. I built this using NextJs14, typescript, tailwind and deployed live using Vercel. We used a modern tailwindcss library, NextUI for a smoother and more visually appealing UX. For storing papers adding comments to papers etc we used a postgres sql database connected via vercel to store any data we needed like papers and comments. We then connected to the database from our front end via api calls in typescript to the database. ",
    description3:
      "For logging users in so we could differentiate users while still trying to keep them anonymous and not collect any data that could identity them we decided to use sign in with ethereum. For this we used Dynamic.xyz library along with ethers.js which allowed us to implement users to sign up with their eth wallet address. Once a user signed up we stored their wallet address in our db, allowing us to have a anonymous login and remember users, enabling us to see which accounts were verifed via zk email and which we not. ",
    link: "https://ethglobal.com/showcase/zkcert-06upk",
    content: (
      <div className="flex items-center justify-center text-white">
        <Image
          src="/project-ZKCERT.png"
          width={900}
          height={900}
          className=" object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Job.Cymru - Interactive Job Board",
    description:
      "Job.Cymru is a interactive job board with a fully working payment system, user authentication a dashboard and quick applications. I built this as a side project as i wanted to build something that supported Wales with a more modern and interactive feel to it. ",
    description2:
      "I used Nextjs 14 and tpyescript to build the site, I used tailwind and shadcn for the UI. For the payment i implemented Stripe payments for secure and safe payments. Finally for the dashboard and authentification i used my own custom code in conjuction with firebase for the backend service allowing me to quickly and securely implement authentifcation and store necessary data.",
    link: "https://job.cymru/",
    content: (
      <div className="flex items-center justify-center text-white">
        <Image
          src="/project-jobCymru.png"
          width={900}
          height={900}
          className=" object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

  {
    title: "Building the Job.Cymru Dashboard",
    description:
      "The Job.Cymru dashboard is a fully working dashboard that allows users to manage their job applications, view their job applications and manage their account. I wanted to build a dashboard that was easy to use and looked modern and clean showing the employer all the information they needed to know such as how many applications they have, how many are pending and how many are successful as well as there payment history and account details.",
    content: (
      <div className="flex items-center justify-center text-white">
        <Image
          src="/jobCymruDash.png"
          width={900}
          height={900}
          className=" object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <div className="p-10 mt-10">
        <StickyScroll content={content} />
      </div>

      <div className="overflow-hidden mt-44  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pr-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Further project
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight dark:text-gray-300 text-gray-900 sm:text-4xl">
                  Web Development Agency Website
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  A modern web devlopement agency site i built using NextJS 14
                  and tailwind, i went for a modern clean feel with subtle
                  animations and transtions.
                </p>
                <div className="mt-8">
                  <a
                    href="https://www.studioiq.co.uk/"
                    className="inline-flex rounded-md dark:bg-white dark:text-black px-3.5 py-2.5 text-sm font-semibold bg-black text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View Site
                  </a>
                </div>
              </div>
            </div>

            <img
              src="/studioiq-sc.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      <div className="mt-56">
        {" "}
        <Footer />
      </div>
    </>
  );
};

export default page;
