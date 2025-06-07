"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { lora } from "../layout";
import axios from "axios";

function Connect() {
  const [connectForm, setConnectForm] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmitButton() {
    try {
      setLoading(true);
      const res = await axios.post("/api/whatsapp", {
        message: `*Name: ${connectForm.name}*\n*Email: ${connectForm.email}*\n${connectForm.description}`,
      });

      console.log("Success Whatsapp Message:", res.data);
      setConnectForm({
        name: "",
        email: "",
        description: "",
      });
    } catch (error) {
      console.error(
        "Failed to send WhatsApp message:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <div
      className="pt-28 w-full flex-col items-center justify-center pb-12"
      id="connect"
    >
      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.5 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`${lora.className} text-xl pb-6 flex items-center justify-center`}
      >
        Connect
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-y-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={connectForm.name}
          onChange={(e) =>
            setConnectForm((prev) => ({
              ...prev,
              name: e.target.value.toUpperCase(),
            }))
          }
          className="input rounded-lg uppercase"
        />
        <label className="input validator rounded-lg">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="text"
            placeholder="mail@site.com"
            value={connectForm.email}
            onChange={(e) =>
              setConnectForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </label>
        <textarea
          className="textarea rounded-lg"
          value={connectForm.description}
          onChange={(e) =>
            setConnectForm((prev) => ({ ...prev, description: e.target.value }))
          }
          placeholder="Dsescription"
        ></textarea>
        <button
          className="btn btn-info px-12 w-[310px]"
          onClick={handleSubmitButton}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "submit"
          )}
        </button>
      </motion.div>
    </div>
  );
}

export default Connect;
