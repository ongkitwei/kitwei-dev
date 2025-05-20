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
    <div className="mt-4 fixed z-50 bg-white/30 w-[85%] inset-x-0 mx-auto rounded-full flex items-center justify-center shadow-sm border-gray-100 py-2 md:border-0 md:w-full md:bg-transparent md:border-none md:shadow-none">
      <ul className="flex flex-row items-center justify-between">
        {/* <li className={`${dancingScript.className} text-4xl`}>kit wei</li> */}
        <div className="flex items-center gap-x-6 md:gap-x-16">
          <li className={`${lora.className} text-sm font-semibold`}>
            Experience
          </li>
          <li className={`${lora.className} text-sm font-semibold`}>
            Projects
          </li>
          <li className={`${lora.className} text-sm font-semibold`}>Connect</li>
          <li
            className={`${lora.className} text-sm font-semibold`}
            href="#about"
          >
            About
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Header;
