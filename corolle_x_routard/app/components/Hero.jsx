"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function Hero() {
    const ref = useRef(null)
    const [offset, setOffset] = useState(0)

    const { scrollYProgress } = useScroll({
        target: ref,
        // OFFSET CORRIGÉ : Pour une section en haut de page
        offset: ["start start", "end start"]
    })

    useEffect(() => {
        const updateOffset = () => {
            const width = window.innerWidth
            if (width < 768) setOffset(80)
            else if (width < 1024) setOffset(150)
            else setOffset(300)
        }

        updateOffset()
        window.addEventListener("resize", updateOffset)
        return () => window.removeEventListener("resize", updateOffset)
    }, [])

    // ANIMATIONS
    // On veut souvent que le logo soit au centre au début (0) 
    // et qu'il bouge/tourne quand on scrolle vers le bas (1)
    const x = useTransform(scrollYProgress, [0, 1], [0, offset]) // Inversion pour plus de naturel
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -180])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]) // Le logo disparaît en scrollant
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const rotateSpring = useSpring(rotate, { stiffness: 100, damping: 30 })

    const images = ["/HeroBg", "/HeroBg2", "/HeroBg3", "/HeroBg4", "/HeroBg5", "/HeroBg6"]
    const [bgImage, setBgImage] = useState("")

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * images.length)
        setBgImage(`${images[randomIndex]}.png`)
    }, [])
    return (
        <section 
            ref={ref} 
            style={{ 
                backgroundImage: bgImage ? `url(${bgImage})` : "none",
            }}
            className={`w-full relative h-[75vh] max-lg:h-screen flex flex-col justify-center items-center bg-no-repeat bg-cover bg-fixed`}
        >
            <div className="flex items-center justify-center max-w-[50%] xl:max-w-[25%] max-lg:max-w-[75%]">
                <motion.img 
                    style={{ 
                        x, 
                        rotate: rotateSpring, 
                        opacity,
                        scale 
                    }} 
                    src="/logo.png" 
                    alt="logo" 
                    className="w-full h-auto"
                />
            </div>
            <img className="absolute bottom-[-3] right-0" src="/vector2.png" alt="vector" />
        </section>
    ) 
}