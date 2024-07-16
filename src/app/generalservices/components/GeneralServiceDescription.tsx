import ImageTitleDescription from "@/components/ImageTitleDescription";

const contents = [
  {
    image: "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/generalsercives/microcementro.jpg",
    alt: "Salón con mesas y sillas",
    title: "Acabados, pintura, microcemento",
    subtitles: [
      "Nos avalan más de 10 años de experiencia y un equipo humano altamente cualificado, capaz de abordar obras tanto en el sector privado como público. Fruto del trabajo y del esfuerzo, durante los últimos años nos hemos especializado en las reformas integrales de viviendas y espacios comerciales, sin dejar de lado las obras de pintura profesional, sector en los que somos empresa de referencia.",
      "Realizamos todo tipo de trabajos integrales de pintura para comunidades de propietarios, en garajes, aparcamientos, viviendas, oficinas y locales comerciales.",
    ],
    button: "contáctanos",
    href: "/contact#contactForm",
  },
  {
    image: "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/generalsercives/porcelanato.jpg",
    alt: "Salón con suelo de porcelana",
    title: "Mayolicas, Porcelanatos, Mosaicos",
    subtitles: [
      "Ideados para complementar o destacar la estructura principal de un proyecto, los revestimientos de porcelanato aíslan y protegen acústicamente zonas como baños, dormitorios o salones. De estilo oriental, rústico o industrial, lineales o con relieve, estas piezas cerámicas responden a las distintas necesidades y perfiles de cliente.",
      "Formados por cuidadas teselas, los mosaicos de Belanova Inc reformulan las estructuras tradicionales de baños o cocinas a través de sus formas geométricas y sus relieves.",
    ],
    button: "contáctanos",
    href: "/contact#contactForm",
  },
  {
    image:
      "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/generalsercives/electricidad.jpg",
    alt: "bombilla y enchufe",
    title: "Electricidad",
    subtitles: [
      "Hacemos instalaciones eléctricas, balanceo de cargas, independización de líneas, mantimientos pozos a tierra.",
      "Belanova Inc donde puedes contratar a tu electricista más cercano de la zona Metropolitana de Lima. Trabajamos en toda la zona de Lima Metropolitana con los mejores profesionales, somos los más rápidos y los más económicos. Arreglamos cualquier avería de electricidad. Pide presupuesto gratis de los servicios."
    ],
    button: "contáctanos",
    href: "/contact#contactForm",
  },
  {
    image:
      "https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/generalsercives/refrigeracion.jpg",
    alt: "cocina con salón",
    title: "Refrigeración",
    subtitles: [
      "Instalación de Aires Acondicionados, splits, conductos para aires centralizados.",
      "En el mundo de la climatización existe una gran variedad de tipos de aire acondicionado con los que se cubren las diferentes necesidades y particularidades de cada caso, bien sea en ámbito residencial o industrial. Contacta con nosotros y buscaremos la mejor opción para ti.",
      "Ofrecemos los servicios de mantenimiento, reparación y revisión de aparatos domésticos, comerciales e industriales (Neveras, Aires acondicionados, entre otros)."
    ],
    button: "contáctanos",
    href: "/contact#contactForm",
  },
];

export default function GeneralServiceDescription() {
  return (
    <section className="container mb-3">
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
