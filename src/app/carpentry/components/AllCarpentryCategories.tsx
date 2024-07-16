import ImageWithCardHorizontal from "@/components/ImageWithCardHorizontal";
import { Bath, DoorClosed, Grid2X2, House, PencilRuler, Ruler, Sofa, SquareSplitHorizontal } from "lucide-react";

const sections = [
  {
    image: "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/wood.jpg",
    titles: {
      title: "Carpintería",
      span: "En madera y melamina",
    },
    reasons: [
      {
        icon: <Ruler size={43} color="#0101AD" />,
        title: "Diseño modernos y a la medida",
        descriptions: [
          "La carpintería a medida permite el ahorro del espacio por ser adaptable al espacio disponible, se adapta también a cualquier diseño o requerimiento en particular.",
        ],
      },
      {
        icon: <Sofa size={43} color="#0101AD" />,
        title: "Diseñamos todo tipo de muebles",
        descriptions: [
          "Fabricación y mantenimiento de muebles de melamina y/o madera (módulos, reposteros, closets, estantes, escritorios, centros de entretenimiento).",
        ],
      },
      {
        icon: <PencilRuler size={43} color="#0101AD" />,
        title: "Rediseño de espacios",
        descriptions: [
          "Damos un vuelco a tu diseño actual para conseguir una apariencia actualizada y atractiva para tu salón.",
        ],
      },
      {
        icon: <DoorClosed size={43} color="#0101AD" />,
        title: "Puertas",
        descriptions: ["Fabricación e Instalación de puertas contraplacadas."],
      },
    ],
  },
  {
    image: "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/steel.jpg",
    titles: {
      title: "Carpintería",
      span: "En aluminio",
    },
    reasons: [
      {
        icon: <Grid2X2 size={43} color="#0101AD" />,
        title: "Ventanas",
        descriptions: [
          "¿Estás buscando ventanas de aluminio? Ven a Belanova Inc, y apuesta por la calidad y profesionalidad.",
        ],
      },
      {
        icon: <SquareSplitHorizontal size={43} color="#0101AD" />,
        title: "Mamparas",
        descriptions: [
          "Fabricación de panel de aluminio para dividir o aislar tus espacios.",
        ],
      },
      {
        icon: <House size={43} color="#0101AD" />,
        title: "Techos de Policarbonato",
        descriptions: [
          "Conoce las ventajas de los techos de policarbonato, ponte en contacto con nosotros, estaremos encantados de poder ayudarte.",
        ],
      },
      {
        icon: <Bath size={43} color="#0101AD" />,
        title: "Puertas de baño",
        descriptions: ["Fabricación e Instalación de puertas de baño."],
      },
    ],
  },
];

export default function AllCarpentryCategories() {
  return (
    <>
      {sections.map((section, index) => {
       return <ImageWithCardHorizontal key={index} sections={section} direction={index % 2 === 0} />;
      })}
    </>
  );
}
