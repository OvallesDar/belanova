"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ImageTitleDescripionProps {
    content: {
        image: string
        alt: string
        title: string
        subtitles: string[]
        button: string
        href: string
    },
    direction: boolean
}

const MotionLink = motion(Link);


export default function ImageTitleDescription({content, direction}: ImageTitleDescripionProps) {
   const {image, alt, title, subtitles, button, href} = content
  return (
      <div
        className={`flex flex-col ${
          direction ? "lg:flex-row" : "lg:flex-row-reverse"
        } mt-5 gap-5 overflow-hidden`}
      >
        <motion.aside initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: direction ? -100 : 100},
              visible: { opacity: 1, x: 0 },
            }} className="w-full lg:w-1/2  flex justify-center">
          <Image
            src={image}
            alt={alt}
            width={600}
            height={600}
            className="w-full lg:w-5/6 h-[400px] object-cover rounded-sm"
          />
        </motion.aside>
        <aside className="w-full lg:w-1/2 flex flex-col justify-center gap-3">
          <motion.h2 initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: 100},
              visible: { opacity: 1, x: 0 },
            }} className="text-xl font-medium">
            {title}
          </motion.h2>
          {
            subtitles.map((subtitle, index)=>(
                <motion.p key={index} initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: 100},
              visible: { opacity: 1, x: 0 },
            }}>
            {subtitle}
          </motion.p>

            ))
          }
          
          <MotionLink
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: 100},
              visible: { opacity: 1, x: 0 },
            }}
            href={href}
            className="self-start text-secondary text-sm px-3 py-2 rounded-md bg-primary uppercase"
          >
            {button}
          </MotionLink>
        </aside>
      </div>
  );
}
