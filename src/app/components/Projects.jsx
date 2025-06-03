import React from "react";
import { GiChargingBull } from "react-icons/gi";
import Image from "next/image";

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
  ];
  const projectTitle = ["Rosterly", "Sweat-Lab", "Stock Valuator"];
  const projectTagLines = [
    "Manage duties with clarity, not chaos",
    "Targeted workouts, Zero planning",
    "From zero to valuation in seconds",
  ];
  const projectDescription = [
    "This project provides duty planners with a user-friendly platform to add, edit, and remove duties efficiently. It enables planners to schedule guard duties for the entire month within minutes and includes a filter feature to view commanders assigned on specific dates. Additionally, the app is designed for troopers, allowing them to easily see their own duties and the personnel involved through a calendar interface.",
    "",
    "",
  ];
  const projectDescriptionIcon = [
    <>
      {" "}
      <img src="/nextjs-icon.svg" className="h-8" />
      <img src="/tailwindcss-icon.svg" className="h-8" />
      <img src="/mongodb-icon.svg" className="h-10" />
    </>,
  ];

  return (
    <div
      className="w-full h-fit flex flex-col items-center justify-center gap-2"
      id="projects"
    >
      {projectTitle.map((title, index) => (
        <div
          className="w-[95%] min-h-[200px] rounded-2xl bg-white p-6"
          key={title}
        >
          <div className="flex items-center gap-x-2">
            {" "}
            <span>{projectLogo[index]}</span>
            <h3 className="font-bold text-xl text-gray-900">{title}</h3>
          </div>

          <p className="text-sm text-indigo-600 font-semibold pt-1.5">
            {projectTagLines[index]}
          </p>
          <p className="text-sm text-gray-700 pt-2 leading-relaxed">
            {projectDescription[index]}
            <div className="flex flex-row items-center gap-8 pt-4">
              {projectDescriptionIcon[index]}
            </div>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
