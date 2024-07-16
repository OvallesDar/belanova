import ImageTitleDescription from "@/components/ImageTitleDescription";

const contents = [
  {
    image: "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/muebles.jpg",
    alt: "Muebles y ventanas",
    title: "Todo tipo de soluciones para el hogar",
    subtitles: [
      "Soluciones a la medida de sus necesidades con la mejor relación calidad-precio. En Belanova Inc ofrecemos servicios generales en todo Lima Metropolitana, nuestra prioridad es hacer realidad tus proyectos de construcción o remodelación.",
      "Contamos con diferentes servicios para remodelar y equipar tu hogar u oficina, con personal totalmente cualificado en cada área de servicio como electricidad, pintura entre otros para garantizar su total satisfacción.",
    ],
    button: "Saber más",
    href: "/generalservices",
  },
  {
    image: "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/closets.jpg",
    alt: "closets",
    title: "Armarios a medida, empotrados, vestidores y cajoneras.",
    subtitles: [
      "Puede personalizar su armario o vestidor con cajoneras con guías ocultas y cierre suave, puertas abatibles, puertas plegables y plegables correderas.",
      "Fabricación y mantenimiento de muebles de melamina y/o madera (módulos, reposteros, closets, estantes, escritorios y muchos más).",
    ],
    button: "Saber más",
    href: "/carpentry",
  },
  {
    image:
      "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/home/room.jpg",
    alt: "Salón de casa con muebles y tv",
    title: "En Belanova Inc te oferecemos:",
    subtitles: [
      "• Servicio de calidad.",
      "• Garantía de satisfacción.",
      "• Mano de obra capacitada.",
      "• Asesoramiento técnico personalizado.",
      "• Materiales y herramientas de calidad.",
    ],
    button: "te llamamos",
    href: "/contact#contactForm",
  },
];

export default function AboutUs() {
  return (
    <section className="container">
      {contents.map((content, index) => {
        return (
          <ImageTitleDescription
            key={index}
            content={content}
            direction={index % 2 === 0}
          />
        );
      })}
    </section>
  );
}
