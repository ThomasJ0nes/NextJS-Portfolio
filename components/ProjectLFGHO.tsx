import React from "react";
export default function LFGHO_Project() {
  return (
    <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                EthGlobal Hackathon
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight flex sm:text-4xl">
                LFGHO Hackathon{" "}
                <img
                  src="https://storage.googleapis.com/ethglobal-api-production/events/bv0fv/logo/1690291612606_eg-sq.png"
                  className="h-10 w-10 rounded-full flex "
                  alt="Eth Logo"
                />
              </h1>
              <p className="mt-1 text-xl leading-8 font-semibold">
                🥈 Second Place 🥈{" "}
              </p>
              <p className="mt-6 text-xl leading-8 ">
                A Yearn multi-strategy V3 vault that uses the ERC 4626 Standard
                to aggregate current yield sources available for GHO. Built with
                a team of four.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl  shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://storage.googleapis.com/ethglobal-api-production/projects%2Fwau9w%2Fimages%2FShot_1.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 lg:max-w-lg">
              <p>
                Hackathon project i was apart of where we won second place for
                the vault category. I was responsible for the UI and the front
                end of the project.
              </p>
              <ul role="list" className="mt-8 space-y-8 ">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-bold underline">NextJS -</strong> I
                    used NextJS 14 to build the site, Nextjs helped me build the
                    UI at speed, as the hackathon was only 2 weeks long. I used
                    NextJS for the routing, the server side rendering and the
                    static site generation. I also used NextJS for the API
                    routes to interact with the smart contracts.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-bold underline ">Vercel -</strong> I
                    used Vercel to quickly and easily deploy the front end for a
                    live demo. It works nicely with NextJS build and deploys
                    easily from a github repo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-bold underline ">
                      Tailwind CSS, ShadCN UI -
                    </strong>{" "}
                    I used Tailwind CSS to style the site, I used the ShadCN UI
                    for reusable and lightweight components.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-bold underline ">
                      Ethers.js - Family Wallet Connect Kit
                    </strong>{" "}
                    I used Ethers.js to interact with the smart contracts, I
                    used the Family Wallet Connect Kit to connect to the users
                    wallet and interact with the smart contracts.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                You can visit the project showcase on EthGlobal below to see the
                project along with my live demo. You can also visit the Github
                where you can reuse the code for your own projects.
              </p>
              <a
                href="https://ethglobal.com/showcase/gho-yearnv3-vault-wau9w"
                className="relative inline-flex mt-5 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-red-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              >
                <span className="relative flex px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Visit Showcase{" "}
                  <img
                    src="https://storage.googleapis.com/ethglobal-api-production/events/bv0fv/logo/1690291612606_eg-sq.png"
                    className="h-6 w-6 rounded-full flex "
                    alt="Eth Logo"
                  />
                </span>
              </a>
              <a
                href="https://github.com/ThomasJ0nes/YearnV3Vault-UI-Demo"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
