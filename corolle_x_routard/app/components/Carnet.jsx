"use client";

import Paragraph from "./Paragraph";
import Title from "./Title";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Carnet() {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });


  useEffect(() => {
    const updateOffset = () => {
      const width = window.innerWidth;
      if (width < 768) setOffset(80);
      else if (width < 1024) setOffset(150);
      else setOffset(300);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);


  const xLeft = useTransform(scrollYProgress, [0, 1], [-offset, 0]);
  const xRight = useTransform(scrollYProgress, [0, 1], [offset, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      id="Carnet"
      ref={ref}
      className="flex flex-col justify-center w-full py-16 overflow-hidden"
    >
      {/* Images */}
      <div className="flex max-w-[80%] my-10 mx-auto justify-evenly max-lg:flex-col max-lg:gap-10 max-lg:max-w-[60%] max-lg:items-center">
        
        <motion.img
          style={{ x: xLeft, opacity }}
          className="w-[30%] max-lg:w-full object-contain z-10 will-change-transform"
          src="/carnet1.png"
          alt="illustration carnet de voyage"
        />

        <motion.img
          style={{ opacity }}
          className="w-[30%] max-lg:w-full object-contain rotate-90 z-0 will-change-transform"
          src="/carnet2.png"
          alt="illustration coloriage"
        />

        <motion.img
          style={{ x: xRight, opacity }}
          className="w-[30%] max-lg:w-full object-contain z-10 will-change-transform"
          src="/carnet3.png"
          alt="illustration formules de politesse"
        />
      </div>

      <div className="flex flex-col justify-center text-center mx-auto max-w-[80vw]">
        <Title className="text-[5em] max-lg:text-3xl">
          Le carnet d’aventures de Lily
        </Title>

        <Paragraph>
          Explore de nombreux pays en compagnie de Lily ! De l’Italie à
          l’Angleterre, ce carnet sera un mini guide du{" "}
          <b>Routard</b> pour les enfants, guidés évidemment par <b>Lily</b>
        </Paragraph>
      </div>
    </section>
  );
}
