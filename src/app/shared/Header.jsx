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
    <div className="sticky top-4 z-50">
      <div className="flex items-center justify-evenly bg-white border-[0.5px] border-gray-100 rounded-full backdrop-blur-lg opacity-100 w-[75%] md:w-[500px] mx-auto py-2">
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
    </div>
  );
}

export default Header;
