import Headers from "@/components/Headers";

const Header = {
  background:
    "bg-[url('https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/backgroundcarpentry.jpg')]",
  title: "Expertos en Carpintería",
  subtitle: ["Servicio de Carpintería en Lima Metropolitana.",
    "Trabajamos con los mejores materiales del mercado.",
  ], 
  button: "contáctanos",
  href: "/contact#contactForm"
};

export default function HomeHeader() {
  return <Headers Header={Header}/>;
}
