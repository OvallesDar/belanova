import Headers from "@/components/Headers";

const Header = {
  background:
    "bg-[url('/contactImage.jpg')]",
  title: "Ponte en contacto con nuestros expertos",
  subtitle: ["Estamos aqui para ayudarte en cualquiera de tus proyectos.",
    "Puedes llamarnos, ver mas sobre nosotros en nuestras redes sociales, escribirnos.",
  ], 
  button: "Ir al inicio",
  href: "/"
};

export default function ContactHeader() {
  return <Headers Header={Header}/>;
}
