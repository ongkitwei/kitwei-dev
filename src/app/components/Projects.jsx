"use client";
import React from "react";
import { GiChargingBull } from "react-icons/gi";
import Image from "next/image";
import { motion } from "motion/react";
import { lora } from "../layout";

function Projects() {
  const projectLogo = [
    <Image
      src="/alpha.jpg" // path from the `public` folder
      alt="My image"
      width={30}
      height={30}
      className="object-cover rounded-lg"
    />,
    <Image
      src="/sweat-lab-icon.png" // path from the `public` folder
      alt="My image"
      width={30}
      height={30}
      className="object-cover rounded-lg"
    />,
    <GiChargingBull className="w-10 h-10 rounded-lg" />,
    <Image
      src="/irbot-icon.svg" // path from the `public` folder
      alt="My image"
      width={30}
      height={30}
      className="object-cover rounded-lg"
    />,
    <img src="/myfacecartoon.jpeg" className="w-10 rounded-full" />,
  ];
  const projectTitle = [
    "Rosterly",
    "Sweat-Lab",
    "Stock Valuator",
    "P3 Assistant Bot",
    "Personal Portfolio",
  ];
  const projectTagLines = [
    "Manage duties with clarity, not chaos",
    "Targeted workouts, Zero planning",
    "From zero to valuation in seconds",
    "Stop typing, Start generating",
    "A collection of work, passion, and progress",
  ];
  const projectDescription = [
    "This webapp lets duty planners quickly schedule, edit, and manage monthly guard duties with ease. A date filter helps track commander assignments, while troopers can view their own duties and team via a calendar view.",
    "SweatLab helps busy adults stay fit by instantly generating workouts based on selected duration and target muscle group. No planning needed—just choose and sweat.",
    "Stock Valuator gives retail investors instant insight into a stock’s true worth. Spot undervalued opportunities, avoid overhyped risks, and track your picks with a real-time watchlist.",
    "No more templates. No more typing. No more of those boring admin stuff. Just clear, professional incident reports — generated in seconds.",
    "Welcome to my dev we — a hub for innovative projects, hands-on experiments, and ideas brought to life. Powered by passion, engineered with precision.",
  ];
  const projectDescriptionIcon = [
    <div className="flex flex-wrap items-center pt-2 gap-x-8">
      {" "}
      <img src="/nextjs-icon.svg" className="h-10" />
      <img src="/js-icon.svg" className="h-10" />
      <img src="/tailwindcss-icon.svg" className="h-10" />
      <img src="/nodejs-icon.svg" className="w-14" />
      <img src="/mongodb-icon.svg" className="w-20" />
    </div>,
    <div className="flex flex-wrap items-center pt-2 gap-x-8">
      <img src="/nextjs-icon.svg" className="h-10" />
      <img src="/js-icon.svg" className="h-10" />
      <img src="/tailwindcss-icon.svg" className="h-10" />
    </div>,
    <div className="flex flex-wrap items-center pt-2 gap-x-8">
      <img src="/nextjs-icon.svg" className="h-10" />
      <img src="/js-icon.svg" className="h-10" />
      <img src="/tailwindcss-icon.svg" className="h-10" />
      <img src="/nodejs-icon.svg" className="w-14" />
      <img src="/supabase-icon.svg" className="w-20" />
      <img src="/gemini-icon.svg" className="w-20" />
    </div>,
    <div className="flex flex-wrap items-center pt-2 gap-x-8">
      <img src="/python-icon.svg" className="h-10" />
      <img src="/telegram-icon.svg" className="h-10" />
    </div>,
    <div className="flex flex-wrap items-center pt-2 gap-x-8">
      <img src="/nextjs-icon.svg" className="h-10" />
      <img src="/js-icon.svg" className="h-10" />
      <img src="/tailwindcss-icon.svg" className="h-10" />
      <img src="/nodejs-icon.svg" className="w-14" />
      <img src="/twilio-icon.svg" className="w-20" />
    </div>,
  ];
  const webLinks = [
    "https://rosterly.vercel.app",
    "https://sweatlabb.netlify.app",
    "https://stockvaluator-next.vercel.app",
    "https://kitwei.netlify.app",
  ];

  return (
    <div
      className="w-full h-fit flex flex-col items-center justify-center gap-y-3 pt-28"
      id="projects"
    >
      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.5 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`${lora.className} text-xl pb-6`}
      >
        Projects
      </motion.h2>
      <div className="justify-items-center grid gap-4 lg:grid lg:grid-cols-2 lg:gap-y-10 2xl:grid-cols-3 2xl:gap-4">
        {projectTitle.map((title, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[93%] min-h-[200px] rounded-2xl bg-white"
            key={title}
          >
            <div className="group hover:bg-gray-300 hover:rounded-xl hover:scale-102 hover:cursor-pointer transition-transform duration-500 p-6">
              <a href={webLinks[index]} target="_blank">
                <div className="flex items-center gap-x-2">
                  <span className="group-hover:rotate-10 transition-transform duration-400">
                    {projectLogo[index]}
                  </span>
                  <h3 className="font-bold text-xl text-gray-900">{title}</h3>
                </div>

                <p className="text-sm pt-1.5 font-medium">
                  {projectTagLines[index]}
                </p>
              </a>
            </div>

            <div className="text-sm text-gray-700 px-6 pb-6">
              {projectDescription[index]}
              <div className="flex flex-row items-center gap-8 pt-4">
                {projectDescriptionIcon[index]}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
