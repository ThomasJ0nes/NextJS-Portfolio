import React from "react";
export default function Project() {
  return (
    <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                My Top Project
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                Ecryptify
              </h1>
              <p className="mt-6 text-xl leading-8 ">
                Ecryptify is an interactive web app that I built to support my
                web3 and blockchain recruitment company.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl  shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="./project-Ecryptify.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 lg:max-w-lg">
              <p>
                Its still in development, but I have built many features like a
                automated newsletter using firebase functions. Dynamic blog and
                job post creation, behind a admin dashboard. Contact forms with
                email alerts with more planned on the way.
              </p>
              <ul role="list" className="mt-8 space-y-8 ">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-bold underline">NextJS -</strong>{" "}
                    The site is built using NextJS 13.5, NextJs is great for
                    building fast scalable web apps and handles intergration
                    nicely like framer motion animations I have used throughout the
                    site.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-bold underline ">Firebase -</strong>{" "}
                    I used Firebase extensively for this project, I used it for
                    hosting the site, the database, the functions and the
                    authentication. I also used it for the newsletter and
                    contact forms. I used the firebase admin sdk to create a
                    admin dashboard to create blog posts and job posts.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-bold underline ">
                      Tailwind CSS and Framer Motion -
                    </strong>{" "}
                    To bring a modern and clean style to the site I used
                    Tailwind CSS and Framer Motion for the animations. Tailwind
                    is easy to use, customizable and brings that clean modern
                    look and framer motion is great for adding animations to the
                    site to give it more life.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                You can visit Ecryptify with the button below. I am still
                actively working on the site with a lot more interactive and
                cool features planned. I am also working on a blog post about
                the site and the technologies I used to build it.
              </p>
              <a
                href="https://www.ecryptify.com"
                className="relative inline-flex mt-5 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Visit Ecryptify
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
