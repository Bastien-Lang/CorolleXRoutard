"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Stage, OrbitControls } from "@react-three/drei"
import Title from "./Title"
import Paragraph from "./Paragraph"

function Model({ url }) {
  const { scene } = useGLTF(url)
  const modelRef = useRef()

  useFrame((_, delta) => {
    if (!modelRef.current) return
    modelRef.current.rotation.y += delta * 0.6
  })

  return (
    <group
      ref={modelRef}
      scale={1.5}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <primitive object={scene} />
    </group>
  )
}


export default function Product() {
  const sectionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"] 
  })

  return (
    <section id="Informations" ref={sectionRef} className="flex h-[80vh] items-center justify-evenly w-full max-lg:flex-col max-lg:h-auto max-lg:py-16 overflow-hidden">
      
      <Scene progress={scrollYProgress} />

      <div className="h-2/3 max-w-[50%] flex flex-col justify-evenly items-center max-lg:max-w-[90%] max-lg:gap-6">
        <Title className="text-[5em] text-center max-lg:text-3xl">
        Rencontrez Lily
        </Title>
        <Paragraph>Grâce aux aventures de Lily, embarquez pour des voyages inoubliables à
          travers différents pays.</Paragraph>
        <Paragraph>Le guide du Routard s’associe à Corolle pour faire voyager les enfants à
          travers le monde</Paragraph>
      </div>
    </section>
  )
}

const Scene = ({ progress }) => {
  const [offset, setOffset] = useState(-300)

  useEffect(() => {
    const updateOffset = () => {
      const width = window.innerWidth
      if (width < 768) setOffset(-100)
      else if (width < 1024) setOffset(-200)
      else setOffset(-400)
    }
    updateOffset()
    window.addEventListener("resize", updateOffset)
    return () => window.removeEventListener("resize", updateOffset)
  }, [])

  const x = useTransform(progress, [0, 1], [offset, 0])
  const opacity = useTransform(progress, [0, 0.5], [0, 1])

  return (
    <motion.div 
      style={{ x, opacity }} 
      className="w-1/3 h-full max-lg:w-full max-lg:h-[500px] cursor-grab active:cursor-grabbing"
    >
      <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 5] }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />      
        <OrbitControls enablePan={false} enableZoom={false}/>
        <Stage environment="apartment" intensity={0.6} contactShadow={false} >
        <Model url="/Lily.glb" />
        </Stage>
      </Canvas>
    </motion.div>
  )
}