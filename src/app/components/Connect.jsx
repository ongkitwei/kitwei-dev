"use client";
import React from "react";
import { motion } from "motion/react";

function Connect() {
  return (
    <div
      className="w-full h-[200px] flex items-center justify-center"
      id="connect"
    >
      <motion.p
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        Connect
      </motion.p>
    </div>
  );
}

export default Connect;
