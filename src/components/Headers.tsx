"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Headers {
  Header: {
    background: string;
    title: string;
    subtitle: string[];
    subtitle2?: string;
    button: string;
    href: string
  };
}

const MotionLink = motion(Link);

export default function Headers({ Header }: Headers) {
  const { background, title, subtitle, button, href } = Header;
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      variants={{
        hidden: { opacity: 0.5 },
        visible: { opacity: 1 },
      }}
      className={`relative ${background} bg-no-repeat bg-cover min-h-[90vh] md:min-h-screen flex justify-center items-center overflow-hidden`}
    >
      <span className=" absolute w-full min-h-[90vh] md:min-h-screen bg-black/60 -z-0" />
      <section className="container flex justify-center lg:justify-end z-10">
        <div className="flex flex-col w-full lg:w-1/2 gap-3 text-center lg:text-start text-secondary">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl"
          >
            {title}
          </motion.h1>
          {subtitle.map((sub, index) => (
            <motion.p
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 1.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-lg"
            >
              {sub}
            </motion.p>
          ))}

          <MotionLink
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            href={href}
            className="bg-primary px-3 py-2 uppercase rounded-md self-center lg:self-start text-sm"
          >
            {button}
          </MotionLink>
        </div>
      </section>
    </motion.header>
  );
}
