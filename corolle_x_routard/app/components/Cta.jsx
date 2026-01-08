"use client";

import { motion } from "framer-motion";

export default function Cta({ children }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 12px 30px rgba(223, 69, 133, 0.45)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className="
        mx-auto block

        rounded-xl sm:rounded-2xl
        bg-[#DF4585]

        px-6 py-4
        sm:px-10 sm:py-6
        lg:px-16 lg:py-8

        text-white
        text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-4xl

        font-zurambi
        font-black
        leading-none

        text-center
      "
    >
      {children}
    </motion.button>
  );
}
