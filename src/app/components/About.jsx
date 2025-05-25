"use client";
import React from "react";
import Image from "next/image";
import { lato, lora, robotoFont, lobsterFont } from "../layout";
import { FaGitAlt } from "react-icons/fa";
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
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-row justify-center items-center px-2 gap-2"
      >
        <div>
          <Image
            height={100}
            width={700}
            src="/personalpic.jpg"
            className="object-contain rounded-xl"
            alt="second-pic"
          ></Image>
        </div>

        <div>
          <h2
            className={`${lora.className} text-lg sm:text-3xl leading-[1.5] pb-3 font-semibold`}
          >
            Half engineer, half keyboard warrior
          </h2>
          <p
            className={`${lato.className} text-[11.5px] sm:text-xl leading-[1.5]`}
          >
            I am an Electrical Engineer & self-taught full-stack developer from
            Singapore, with experience in robotics and automation. Passionate
            about building scalable software and bridging hardware with code.
          </p>
          {/* <img src="/vsc-icon.svg" alt="description" /> */}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
