import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const TechStack = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            My Technology Stack...
          </h2>

          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Below is the list of my strongest skills and technologies I use to
            build my projects. However i am self taught and this is only my
            strongest skills, I am always learning new technologies and skills
            to improve my development skills.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img src="nextjs.svg"></img>
            </div>
            <HoverCard>
              <HoverCardTrigger>
                <h3 className="mb-2 underline text-xl font-bold dark:text-white">
                  NextJS
                </h3>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex justify-between space-x-4 w-full">
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      Created by vercel NextJS is a React framework for building
                      fast and scalable web applications. It is a cutting edge
                      framework and intergrates well with other technologies.
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <p className="text-gray-500 dark:text-gray-400">
              I build most of my apps in NextJS as it is a great framework for
              building fast, scalable and SEO friendly web apps. Its a cutting
              edge framework and intergrates well with other technologies.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img src="javascript.svg"></img>
            </div>
            <HoverCard>
              <HoverCardTrigger>
                <h3 className="mb-2 underline text-xl font-bold dark:text-white">
                  Javascript
                </h3>
              </HoverCardTrigger>

              <HoverCardContent>
                <div className="flex justify-between space-x-4 w-full">
                  <Avatar>
                    <AvatarImage src="javascript.svg" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">@Javascript</h4>
                    <p className="text-sm">
                      Created by Brendan Eich in 1995, Javascript is a powerful
                      programming language that is used to create interactive
                      effects within web browsers. It is the most popular
                      programming language in the world and is used by 95% of
                      all websites.
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <p className="text-gray-500 dark:text-gray-400">
              I use javascript for many my web apps, I am very comfortable with
              the language and have been using it for well over 3 years now.
              Javascript is by far my strongest language.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img src="typescript.svg"></img>
            </div>
            <HoverCard>
              <HoverCardTrigger>
                <h3 className="mb-2 underline text-xl font-bold dark:text-white">
                  TypeScript
                </h3>
              </HoverCardTrigger>

              <HoverCardContent>
                <div className="flex justify-between space-x-4 w-full">
                  <Avatar>
                    <AvatarImage src="typescript.svg" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">@Typescript</h4>
                    <p className="text-sm">
                      Created by Anders Hejlsberg at Microsoft in 2010
                      Typescript is a superset of Javascript that adds static
                      typing to the language. It is a powerful language that is
                      used to create large scale applications. It is a very fast
                      and reliable language and its popularity is growing.
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <p className="text-gray-500 dark:text-gray-400">
              I have been using typescript for a few months now and I am
              starting to get comfortable with it. I am still learning the
              language but I am confident in my ability to use it.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img src="tailwindcss.svg"></img>
            </div>
            <HoverCard>
              <HoverCardTrigger>
                <h3 className="mb-2 underline text-xl font-bold dark:text-white">
                  Tailwind CSS
                </h3>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex justify-between space-x-4 w-full">
                  <Avatar>
                    <AvatarImage src="tailwindcss.svg" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">@Tailwind</h4>
                    <p className="text-sm">
                      Created by Adam Wathan, Jonathan Reinink, David Hemphill
                      and Steve Schoger in 2017, Tailwind CSS is a utility-first
                      CSS framework for rapidly building custom user interfaces.
                      It is a very powerful framework that is used to create
                      beautiful modern designs.
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <p className="text-gray-500 dark:text-gray-400">
              Tailwind CSS is my go to CSS framework, I love the utility first
              approach and the ability to customise the framework to my liking.
              Its ease of use and speed is why I use it why still maintaining
              that beautiful modern and clean design.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img className="h-12" src="firebase.svg"></img>
            </div>
            <HoverCard>
              <HoverCardTrigger>
                <h3 className="mb-2 underline text-xl font-bold dark:text-white">
                  Firebase
                </h3>
              </HoverCardTrigger>

              <HoverCardContent>
                <div className="flex justify-between space-x-4 w-full">
                  <Avatar>
                    <AvatarImage src="firebase.svg" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">@Firebase</h4>
                    <p className="text-sm">
                      Created by Google in 2011, Firebase is a Backend as a
                      Service (BaaS) that provides developers with a variety of
                      tools and services to help them develop quality apps, grow
                      their user base, and earn profit. Firebase is built on
                      Google’s infrastructure and scales automatically, for even
                      the largest apps.
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <p className="text-gray-500 dark:text-gray-400">
              Firebase is my go to backend for most of my projects, Its been a
              game changer for me in its speed reliability and intergration with
              many tops third party app like stripe etc. Firebase cuts my
              backend development time in half.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img className="h-16" src="eth.svg"></img>
            </div>

            <HoverCard>
              <HoverCardTrigger>
                <h3 className="mb-2 underline text-xl font-bold dark:text-white">
                  Solidity
                </h3>
              </HoverCardTrigger>

              <HoverCardContent>
                <div className="flex justify-between space-x-4 w-full">
                  <Avatar>
                    <AvatarImage src="eth.svg" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">@Solidity</h4>
                    <p className="text-sm">
                      Created by Gavin Wood, Solidity is an object-oriented
                      programming language for writing smart contracts. It is
                      used for implementing smart contracts on various
                      blockchain platforms, most notably, Ethereum. It is a
                      statically typed language that supports inheritance,
                      libraries and complex user-defined types among other
                      features.
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <p className="text-gray-500 dark:text-gray-400">
              Solidity is a new endeavour for me, as the web3 space is growing I
              am learning solidity to build smart contracts and decentralised
              applications. Staying ahead of the curve is important to me and
              anyone who wants to be a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
