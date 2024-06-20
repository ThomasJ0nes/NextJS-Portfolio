import LFGHO_Project from "@/components/ProjectLFGHO";
import { Globe } from "@/components/SpinningGlobe";
import Accordion from "@/components/accordion";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import Navbar from "@/components/navbar";
import Project from "@/components/projectEcryptify";
import TechStack from "@/components/techStack";
import Image from "next/image";

const faqs = [
  {
    title: "Can you migrate/redesign my website?",
    text: "Yes I can, I have experience in migrating websites from one platform to another, backend migrations can be more tricky depending on numerous factors but it can be done. I can also redesign your website to your liking. I can also add new features to your website.",
    active: false,
  },
  {
    title: "Can you use other frameworks other than the ones listed above?",
    text: "Yes i can use other frameworks, I have experience in using other frameworks like React, Vue, Svelte and even .net and webforms. I am also familair with other backends like Azure, SQL and c#. I am also open to learning new frameworks if you have a preference, im a self-taught dev and pick up new technologies quickly.",
    active: false,
  },
  {
    title: "How long will it take to build my website?",
    text: "Depends on the size of the project, a simple landing page can take a couple days, a full stack web app can take a few weeks to a month. I will give you a time estimate before we start the project and keep you updated throughout the project.",
    active: false,
  },
  {
    title: "How do i get in contact with you?",
    text: "You can use the contact form on the website or message through LinkedIn or X/Twitter.",
    active: false,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Globe />

      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-10 mb-44">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              View my Projects
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Here are some of the projects I have worked on, I have experience
              in building full stack web apps, websites payment intergrations
              and web3 connections.
            </p>
            <div className=" flex justify-center text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <a href="/portfolio">View Portfolio</a>
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </section>

      <main className="relative mb-10 mt-20 flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold  mb-4 text-center">Questions</h1>

          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.title}
                id={`faqs-${index}`}
                active={faq.active}
              >
                {faq.text}
              </Accordion>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
