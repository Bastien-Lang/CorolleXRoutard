"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Carousel() {
  const flags = [
    "/sacEs.png",
    "/sacEn.png",
    "/sacFr.png",
    "/sacIt.png",
    "/sacPl.png",
  ];

  const [index, setIndex] = useState(2);

  const getPosition = (i) => {
    const diff = i - index;

    return {
      x: diff * 300, // PLUS ESPACÉ
      scale:
        diff === 0
          ? 1
          : diff === -1 || diff === 1
          ? 0.78
          : 0.6,
      opacity: Math.abs(diff) > 2 ? 0 : diff === 0 ? 1 : 0.45,
      zIndex: 10 - Math.abs(diff),
    };
  };

  return (
    <section id="Pays" className="w-full py-20 text-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#3A1F16]">
        Packs pays
      </h2>

      {/* Carousel */}
      <div className="relative flex justify-center items-center h-[200px] sm:h-[260px] md:h-[300px]">
        {flags.map((flag, i) => {
          const pos = getPosition(i);

          return (
            <motion.img
              key={flag}
              src={flag}
              alt=""
              className="
                absolute select-none cursor-pointer
                w-[120px]
                sm:w-[160px]
                md:w-[200px]
                lg:w-[240px]
              "
              animate={pos}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 26,
              }}
              onClick={() => setIndex(i)}
            />
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-10 flex justify-center gap-4">
        {flags.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-3 rounded-full transition
              ${i === index
                ? "bg-green-500 scale-125"
                : "bg-green-200"}
            `}
          />
        ))}
      </div>

      {/* Caption */}
      <p className="mt-14 text-[#5A3A2E] text-sm md:text-lg italic max-w-xl mx-auto">
        Contenu des packs seuls disponibles à la vente
        <br />(sans le sac et la poupée)
      </p>
    </section>
  );
}
