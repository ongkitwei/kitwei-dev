"use client";
import React from "react";
import Image from "next/image";
import { lato, lora, robotoFont, lobsterFont } from "../layout";
import { motion } from "motion/react";

function About() {
  return (
    <div
      className="h-fit w-full flex flex-col items-center justify-center scroll-mt-18 pb-28"
      id="about"
    >
      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.5 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`${lora.className} text-xl pb-6`}
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative flex flex-row justify-center items-center px-2 gap-2 pb-24 sm:pb-36"
      >
        <div className="relative left-10 z-10 top-8">
          <Image
            height={100}
            width={700}
            src="/personalpic.png"
            className="object-contain rounded-xl rotate-10"
            alt="second-pic"
          ></Image>
        </div>
        <div className="absolute w-screen h-[80%] sm:h-[700px] bg-black"></div>
        <h2
          className={`${robotoFont.className} left-4 md:left-0 flex items-center max-w-[45%] absolute z-10 text-3xl sm:text-4xl md:text-5xl leading-[1.5] pb-3 font-semibold text-white`}
        >
          Powered by caffeine ☕️, driven by curiosity
        </h2>
      </motion.div>
      <p
        className={`${lato.className} max-w-[84%] text-center text-md leading-[1.5]`}
      >
        Hello! I'm Kit Wei ─── a curious and driven engineer passionate about
        solving real-world problems through code and innovation. With a
        background in Electrical Engineering and hands-on experience in{" "}
        <span className="underline text-violet-600 font-semibold">
          ROBOTICS, AUTOMATION,
        </span>{" "}
        and the Internet of Things{" "}
        <span className="underline text-violet-600 font-semibold">IOT,</span>{" "}
        I've developed a strong interest in{" "}
        <span className="underline uppercase text-violet-600 font-semibold">
          full-stack development
        </span>{" "}
        and have built several projects in this space. Whether it's crafting
        responsive web apps, integrating hardware with software, or exploring
        emerging technologies, I enjoy creating solutions that connect the
        digital and physical worlds.
      </p>
      <p className="text-center font-extrabold text-2xl uppercase max-w-[65%] pt-14 pb-6">
        I specialize in a range of 💪skills
      </p>
      <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hover:bg-green-300 w-[320px] aspect-[4/2.5] border border-gray-300 flex flex-col items-center justify-evenly rounded-xl"
        >
          <Image
            height={55}
            width={55}
            src="/frontend-icon.png"
            className="object-cover rounded-xl"
            alt="frontend-pic"
          ></Image>
          <h3 className="font-bold">Front-end Development</h3>
          <p className="text-xs text-slate-500 text-center px-12">
            Skilled in building UIs using HTML, Tailwind CSS, and React.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hover:bg-green-300 w-[320px] aspect-[4/2.5] border border-gray-300 flex flex-col items-center justify-evenly rounded-xl"
        >
          <Image
            height={55}
            width={55}
            src="/backend-icon.png"
            className="object-cover rounded-xl"
            alt="backend-pic"
          ></Image>
          <h3 className="font-bold">Back-end Development</h3>
          <p className="text-xs text-slate-500 text-center px-12">
            Experienced with building REST APIs using Node.js and Express.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hover:bg-green-300 w-[320px] aspect-[4/2.5] border border-gray-300 flex flex-col items-center justify-evenly rounded-xl"
        >
          <Image
            height={55}
            width={55}
            src="/database-icon.png"
            className="object-cover rounded-xl"
            alt="iot-pic"
          ></Image>
          <h3 className="font-bold">Database management</h3>
          <p className="text-xs text-slate-500 text-center px-12">
            Familiar with managing relational and non-relational databases like
            MySQL and MongoDB.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hover:bg-green-300 w-[320px] aspect-[4/2.5] border border-gray-300 flex flex-col items-center justify-evenly rounded-xl"
        >
          <Image
            height={55}
            width={55}
            src="/iot-icon.png"
            className="object-cover rounded-xl"
            alt="iot-pic"
          ></Image>
          <h3 className="font-bold">Internet Of Things (IOT)</h3>
          <p className="text-xs text-slate-500 text-center px-12">
            Developed IoT projects using Python, Arduino, and Raspberry Pi to
            connect hardware with software.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hover:bg-green-300 w-[320px] aspect-[4/2.5] border border-gray-300 flex flex-col items-center justify-evenly rounded-xl"
        >
          <Image
            height={55}
            width={55}
            src="/versioncontrol-icon.png"
            className="object-cover rounded-xl"
            alt="iot-pic"
          ></Image>
          <h3 className="font-bold">Version Control</h3>
          <p className="text-xs text-slate-500 text-center px-12">
            Confident in using Git and GitHub for version control across all
            personal and collaborative projects.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hover:bg-green-300 w-[320px] aspect-[4/2.5] border border-gray-300 flex flex-col items-center justify-evenly rounded-xl"
        >
          <Image
            height={55}
            width={55}
            src="/responsive-icon.png"
            className="object-cover rounded-xl"
            alt="iot-pic"
          ></Image>
          <h3 className="font-bold">Responsive Design</h3>
          <p className="text-xs text-slate-500 text-center px-12">
            Focused on building seamless and responsive designs that work well
            across all screen sizes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
