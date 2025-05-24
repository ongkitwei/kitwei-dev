import React from "react";
import Image from "next/image";
import { lato, lora, robotoFont, lobsterFont } from "../layout";
import { FaGitAlt } from "react-icons/fa";

function About() {
  return (
    <div
      className="bg-slate-100 h-fit w-full flex flex-col items-center justify-center scroll-mt-8 py-12"
      id="about"
    >
      <h2 className={`${lora.className} text-3xl pb-6`}>About Me</h2>
      <div className="flex flex-row justify-center items-center px-2 gap-2">
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
            className={`${lora.className} text-lg leading-[1.5] pb-3 font-semibold`}
          >
            Half engineer, half keyboard warrior
          </h2>
          <p className={`${lato.className} text-[10px] leading-[1.5]`}>
            I am an Electrical Engineer & self-taught full-stack developer from
            Singapore, with experience in robotics and automation. Passionate
            about building scalable software and bridging hardware with code.
          </p>
          {/* <img src="/vsc-icon.svg" alt="description" /> */}
        </div>
      </div>
    </div>
  );
}

export default About;
