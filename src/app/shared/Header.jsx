import React from "react";
import { Dancing_Script } from "next/font/google";
import { Roboto } from "next/font/google";
import { lora } from "../layout";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
});
const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
});

function Header() {
  return (
    <div className="mt-4 fixed backdrop-blur-lg opacity-100 z-50 bg-white w-[85%] border-[0.5px] border-gray-100 inset-x-0 mx-auto rounded-full flex items-center justify-center py-2 md:w-full md:bg-transparent md:shadow-none">
      <ul className="flex flex-row items-center justify-between">
        {/* <li className={`${dancingScript.className} text-4xl`}>kit wei</li> */}
        <div className="flex items-center gap-x-6 md:gap-x-16">
          <a
            className={`${lora.className} text-sm hover:underline`}
            href="#about"
          >
            About
          </a>
          <a
            className={`${lora.className} text-sm hover:underline`}
            href="#timeline"
          >
            Timeline
          </a>
          <a
            className={`${lora.className} text-sm hover:underline`}
            href="#projects"
          >
            Projects
          </a>
          <a
            className={`${lora.className} text-sm hover:underline`}
            href="#connect"
          >
            Connect
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Header;
