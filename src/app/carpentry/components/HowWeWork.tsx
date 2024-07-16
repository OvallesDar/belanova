"use client"
import { motion } from "framer-motion"
import CardHorizontalLogoTitle from "@/components/CardHorizontalLogoTitle";
import { Bath, House, SquareSplitHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    icon: <SquareSplitHorizontal size={43} color="#0101AD" />,
    title: "Planificamos tus ideas",
    descriptions: [
      "Hacemos inventario de ideas para tener en cuenta todos los aspectos posibles a la hora de comenzar a diseñar tu espacio. Buscamos diseños frescos e innovadores que se ajusten a la perfección a tu personalidad.",
    ],
  },
  {
    icon: <House size={43} color="#0101AD" />,
    title: "Estructura efectiva",
    descriptions: [
      "Elaboramos una estructura que atraiga las miradas. Nos preocupamos por que la información se vea representada de una forma clara y organizada.",
    ],
  },
  {
    icon: <Bath size={43} color="#0101AD" />,
    title: "Diseños únicos y personalizados",
    descriptions: [
      "Gracias al análisis previo de tus ideas y con el uso de software profesionales somos capaces de crear un diseño que te represente. Trabajamos hasta el más mínimo detalle para obtener los mejores resultados.",
    ],
  },
  {
    icon: <Bath size={43} color="#0101AD" />,
    title: "Elaboración de ideas",
    descriptions: [
      "Una vez ya hemos conseguido crear tu diseño, nos ponemos manos a la obra para hacer realidad tu diseño y damos el 100% para cumplir todas tus expectativas.",
    ],
  },
];

const MotionLink = motion(Link)

export default function HowWeWork() {
  return (
    <section className="container flex flex-col-reverse lg:flex-row gap-10">
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5">
        <Image
          className="w-full object-cover h-[400px]"
          src={"https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/room.png"}
          alt="Cuarto con melamina"
          width={600}
          height={600}
        ></Image>
        <MotionLink
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: 100},
              visible: { opacity: 1, x: 0 },
            }}
            href={"/contact#contactForm"}
            className="text-secondary text-sm px-3 py-2 rounded-md bg-primary uppercase self-center"
          >
            Contáctanos
          </MotionLink>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center py-3 lg:py-10">
        <h2 className="text-2xl text-center">
          Cómo <br />
          <span className="text-primary text-3xl">Trabajamos?</span>
        </h2>
        <div className="flex flex-wrap justify-center overflow-hidden">
          {reasons.map((reason) => (
            <div key={reason.title} className="w-full">
              <CardHorizontalLogoTitle key={reason.title} reason={reason} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
