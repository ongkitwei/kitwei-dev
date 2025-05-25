"use client";
import React from "react";
import Image from "next/image";
import { lato, lora, robotoFont, lobsterFont } from "../layout";
import { Typewriter } from "react-simple-typewriter";

function ShortIntro() {
  return (
    <div className="pt-18 pb-28">
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[900px] overflow-hidden">
        {" "}
        <Image
          src="/myface.jpeg"
          fill
          alt="kitwei-face"
          className="object-cover object-[10%]"
        />
        <div className="flex items-center justify-start pl-[6%] absolute inset-0 bg-black/30">
          <p
            className={`leading-[1.3] text-3xl md:text-4xl lg:text-6xl font-bold ${lobsterFont.className}`}
          >
            Hey There,<br></br>
            <Typewriter
              words={["I'm Kit Wei ."]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShortIntro;
