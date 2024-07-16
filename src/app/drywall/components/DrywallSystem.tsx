"use client";
import CardImageTitleDescription from "@/components/CardImageTitleDescription";
import { motion } from "framer-motion";
const cards = [
  {
    image: "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/drywall/drywall.jpg",
    title: "Sistema Drywall",
    description:
      "Construir en drywall presenta grandes ventajas adaptables a los requerimientos de los hogares u oficinas, de fácil y rápida instalación, y de menor costo.",
  },
  {
    image: "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/drywall/cieloraso.jpg",
    title: "Cielos Rasos",
    description:
      "Te permite combinar texturas, formas y colores además de ocultar cableado eléctrico, ductos y tuberías, en un solo plano! Increíblemente útiles para completar su techo sin mucho esfuerzo ni dinero.",
  },
  {
    image:
      "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/drywall/separaciones.jpg",
    title: "Separaciones",
    description:
      "Al hacer paredes con drywall, no se va a romper el piso o el techo, no necesita columnas, las conexiones para luz o agua quedan invisibles ya que todo va interiormente.",
  },
];

export default function DrywallSystem() {
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
          Divisores de placa de yeso laminado drywall.
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
          Por sus excelentes prestaciones acústicas y adaptabilidad, el panel de Drywall, es una opción óptima para divisorios interiores verticales y trasdosados de placa de yeso laminado.
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
