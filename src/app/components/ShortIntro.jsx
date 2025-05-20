import React from "react";
import Image from "next/image";
import { lato, lora, robotoFont } from "../layout";

function ShortIntro() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center pt-18"
      id="about"
    >
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[900px] overflow-hidden">
        {" "}
        <Image
          src="/myface.jpeg"
          fill
          alt="kitwei-face"
          className="object-cover"
        />
        <div className="absolute inset-0">
          <p className={`text-md pt-2 font-semibold ${lora.className}`}>
            Hi i am Kit Wei 👋
          </p>
        </div>
      </div>

      <h2 className={`${lora.className} text-3xl pt-5 max-w-[95%] text-center`}>
        Building at the intersection of hardware and code
      </h2>
      <p className="pt-5 max-w-[85%] text-center text-sm text-slate-600">
        Electrical Engineer and self-taught full-stack developer from Singapore,
        with experience in robotics and automation. Passionate about building
        scalable software and bridging hardware with code.
      </p>
    </div>
  );
}

export default ShortIntro;
