"use client"

import {motion, useScroll, useTransform} from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function Routard(){
    const ref = useRef()
    const [offset, setOffset] = useState(0);

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end", "end center"]
    })
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

    const x = useTransform(scrollYProgress, [0, 1], [offset, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    

    
    return(
        <section ref={ref} className="flex relative overflow-hidden px-5 h-[80vh] bg-[#DF4585] items-center justify-evenly w-full max-lg:h-auto max-lg:py-16">
            <img className="absolute top-[-3] right-0" src="/vector.png" alt="vector"/>
            <div className="h-full w-1/2 flex flex-col justify-center">
                <img src="/logoRoutardBlanc.png" alt="logo le Guide du Routard" />
                <p className="my-10 text-white min-lg:text-left md:text-lg lg:text-2xl xl:text-3xl text-center">Corolle et Le Routard s'associent pour une collaboration inédite qui promet de faire voyager les enfants !</p>
            </div>
            <div className="h-full w-1/2 flex flex-col justify-center">
                <motion.img style={{x, opacity}} src="/catalogue.png" alt="Guide du Routard" />
            </div>
        </section>
    )
}