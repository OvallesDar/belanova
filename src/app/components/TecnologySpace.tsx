"use client";
import CardImageTitleDescription from "@/components/CardImageTitleDescription";
import { motion } from "framer-motion";
const cards = [
  {
    image: "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/kitchen2.jpg",
    title: "Modelado 3D",
    description:
      "En Belanova Inc utilizamos software profesionales para el diseño de tus espacios. Sketchup, Illustrator, Photoshop, entre otros.",
  },
  {
    image: "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/kitchen.jpg",
    title: "Renueva tu espacio",
    description:
      "¿Tienes en mente renovar tu hogar, oficina, o algún espacio en específico? Te ofrecemos asesoramiento personalizado para un acabado moderno.",
  },
  {
    image:
      "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/laminados.jpg",
    title: "Pisos flotantes",
    description:
      "Revitaliza tu ambiente con pisos laminados . Atractivos, elegantes y de larga duración. Conoce nuestros estilos y dale vida a tu espacio cuanto antes.",
  },
];

export default function TecnologySpace() {
  return (
    <section className="container mb-10">
      <div className="my-5">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="text-3xl text-primary"
        >
          En Belanova Inc.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          Sabemos que la tecnología esta cada día mas entre nosotros, es por
          ello que nos apoyamos en la misma para que puedas visualizar tus
          espacios.
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-5">
        {cards.map((card, index) => (
          <CardImageTitleDescription key={index} card={card} />
        ))}
      </div>
    </section>
  );
}
