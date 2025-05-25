"use client";
import React from "react";
import TimelineVertical from "../ui/TimelineVertical";
import TimelineHorizontal from "../ui/TimelineHorizontal";
import { motion } from "motion/react";
import { lora } from "../layout";

function Timeline() {
  return (
    <div
      className="w-full h-fit flex flex-col items-center justify-center scroll-mt-18"
      id="timeline"
    >
      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.5 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`${lora.className} text-xl pb-6`}
      >
        Timeline
      </motion.h2>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="block md:hidden pt-6"
      >
        <TimelineVertical />
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="hidden md:block pt-6"
      >
        <TimelineHorizontal />
      </motion.div>
    </div>
  );
}

export default Timeline;
