import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeIn, FadeInStagger } from "./FadeIn";
const TechStack = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <FadeIn>
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              My Go To Technology Stack...
            </h2>

            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Below is the list of my strongest skills and technologies I use to
              build my projects. However i am self taught and this is only my
              strongest skills, I am always learning new technologies and skills
              to improve my development skills.
            </p>
          </div>
        </FadeIn>
        <FadeInStagger>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <FadeIn>
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
                          Created by vercel NextJS is a React framework for
                          building fast and scalable web applications. It is a
                          cutting edge framework and intergrates well with other
                          technologies.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p className="text-gray-500 dark:text-gray-400">
                  I build most of my apps in NextJS as it is a great framework
                  for building fast, scalable and SEO friendly web apps. Its a
                  cutting edge framework and intergrates well with other
                  technologies.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
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
                          Created by Brendan Eich in 1995, Javascript is a
                          powerful programming language that is used to create
                          interactive effects within web browsers. It is the
                          most popular programming language in the world and is
                          used by 95% of all websites.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p className="text-gray-500 dark:text-gray-400">
                  I use javascript for many my web apps, I am very comfortable
                  with the language and have been using it for well over 3 years
                  now. Javascript is by far my strongest language.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src="netCore.png"></img>
                </div>
                <HoverCard>
                  <HoverCardTrigger>
                    <h3 className="mb-2 underline text-xl font-bold dark:text-white">
                      Mircosoft .NET
                    </h3>
                  </HoverCardTrigger>

                  <HoverCardContent>
                    <div className="flex justify-between space-x-4 w-full">
                      <Avatar>
                        <AvatarImage src="NETcore.png" />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">@ASP.NET CORE</h4>
                        <p className="text-sm">
                          Created by Microsoft ASP.NET Core is a cross-platform,
                          high-performance, open-source framework for building
                          modern, cloud-enabled, Internet-connected apps.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p className="text-gray-500 dark:text-gray-400">
                  .NET is the framework i first started of in when beginning my
                  development journey and i still use it today in conjuction
                  with SQL server. I love to use .NET due to the flexbility and
                  simplicity it brings to web development.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
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
                          Created by Adam Wathan, Jonathan Reinink, David
                          Hemphill and Steve Schoger in 2017, Tailwind CSS is a
                          utility-first CSS framework for rapidly building
                          custom user interfaces. It is a very powerful
                          framework that is used to create beautiful modern
                          designs.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p className="text-gray-500 dark:text-gray-400">
                  Tailwind CSS is my go to CSS framework, I love the utility
                  first approach and the ability to customise the framework to
                  my liking. Its ease of use and speed is why I use it why still
                  maintaining that beautiful modern and clean design.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
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
                          Service (BaaS) that provides developers with a variety
                          of tools and services to help them develop quality
                          apps, grow their user base, and earn profit. Firebase
                          is built on Google’s infrastructure and scales
                          automatically, for even the largest apps.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p className="text-gray-500 dark:text-gray-400">
                  Firebase is my go to backend for most of my projects, Its been
                  a game changer for me in its speed reliability and
                  intergration with many tops third party app like stripe etc.
                  Firebase cuts my backend development time in half.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img className="h-16" src="/sql-server.svg"></img>
                </div>

                <HoverCard>
                  <HoverCardTrigger>
                    <h3 className="mb-2 underline text-xl font-bold dark:text-white">
                      SQL Server
                    </h3>
                  </HoverCardTrigger>

                  <HoverCardContent>
                    <div className="flex justify-between space-x-4 w-full">
                      <Avatar>
                        <AvatarImage src="/sql-server.svg" />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">@SQL Server</h4>
                        <p className="text-sm">
                          Microsoft SQL Server is a proprietary relational
                          database management system developed by Microsoft. As
                          a database server, it is a software product with the
                          primary function of storing and retrieving data.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p className="text-gray-500 dark:text-gray-400">
                  I have strong skills in writing T-SQL queries to facilitate
                  data extraction and transformation for SQL Server Reporting
                  Services (SSRS) reports. My expertise includes designing
                  complex reports using both T-SQL and report builder. I use SQL
                  for my personal projects when i want more control over my
                  data.
                </p>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>

      <FadeInStagger>
        <div className=" py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <FadeIn>
                <h2 className="text-lg font-semibold leading-8 text-gray-900 dark:text-gray-300">
                  Other tools and languages I use...
                </h2>
              </FadeIn>
              <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-6">
                <FadeIn>
                  <img
                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                    src="https://svgl.app/library/csharp.svg"
                    alt="Transistor"
                    width={158}
                    height={48}
                  />
                </FadeIn>
                <FadeIn>
                  <img
                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                    src="https://svgl.app/library/postgresql.svg"
                    alt="Reform"
                    width={158}
                    height={48}
                  />
                </FadeIn>
                <FadeIn>
                  <img
                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                    src="https://svgl.app/library/react.svg"
                    alt="Tuple"
                    width={158}
                    height={48}
                  />
                </FadeIn>
                <FadeIn>
                  <img
                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                    src="https://svgl.app/library/typescript.svg"
                    alt="SavvyCal"
                    width={158}
                    height={48}
                  />
                </FadeIn>
                <FadeIn>
                  <img
                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                    src="https://svgl.app/library/azure.svg"
                    alt="Statamic"
                    width={158}
                    height={48}
                  />
                </FadeIn>
                <FadeIn>
                  <img
                    className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                    src="https://svgl.app/library/nodejs.svg"
                    alt="Statamic"
                    width={158}
                    height={48}
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </FadeInStagger>
    </section>
  );
};

export default TechStack;
