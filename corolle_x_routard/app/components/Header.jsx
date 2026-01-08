"use client"

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`
        h-[100px]
        flex items-center justify-between
        mx-24
        transition-all duration-300

        max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:z-50
        max-lg:w-full
        max-lg:mx-0
        max-lg:pt-2

        ${
          open
            ? "max-lg:min-h-screen max-lg:flex-col max-lg:justify-start max-lg:items-end max-lg:bg-[#2e2e2e]/60 max-lg:backdrop-blur-xl max-lg:backdrop-saturate-150 max-lg:border-b max-lg:border-white/10"
            : "max-lg:h-[100px]"
        }
      `}
    >
      {/* Title */}
      <div className="max-lg:w-full max-lg:flex max-lg:justify-between max-lg:items-center max-lg:px-[5%] xl:w-[54%]">
        <div className="flex justify-between">
            <div className="flex w-full items-center">
                <img className="h-[75px] xl:mx-5 max-lg:mx-2 max-lg:h-[40px]" src="/logoCorolle.png" alt="logo Corolle" />
                <img className="h-[75px] xl:mx-5 max-lg:mx-2 max-lg:h-[40px]" src="/logoRoutard.png" alt="logo Le Guide du Routard" />
            </div>
            <img className="h-[75px] max-lg:h-[40px]" src="/typo.png" alt="Logo typographique" />
        </div>


        {/* Burger button (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="hidden max-lg:flex flex-col justify-center items-center gap-1.5"
        >
          <span
            className={`h-[2px] w-6 bg-black transition-all ${
              open ? "rotate-45 translate-y-[8px] bg-white" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-all ${
              open ? "opacity-0 bg-white" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-all ${
              open ? "-rotate-45 -translate-y-[8px] bg-white" : ""
            }`}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`
          w-1/3
          transition-all duration-300

          max-lg:w-full
          max-lg:h-1/3
          ${open ? "max-lg:flex" : "max-lg:hidden"}
        `}
      >
        <ul className="flex h-full w-full justify-between max-lg:flex-col max-lg:items-end max-lg:justify-evenly px-[5%]">
          {["Informations", "Carnet", "Pays"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer w-full ${open ? 'text-white' : "text-[#DF4585]"} py-2 font-bold border-b border-white/20 ${open ? "text-right" : "text-center"}`}
              onClick={() => setOpen(false)}
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
