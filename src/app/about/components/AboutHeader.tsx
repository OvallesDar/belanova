import Headers from "@/components/Headers";

const Header = {
  background:
    "bg-[url('https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/backgroundabout.jpg')]",
  title: "BELANOVA INC.",
  subtitle: ["Ofrecemos un servicio de gran profesionalidad.",
    "Pondremos a tu disposición todo lo necesario para garantizar nuestro trabajo y tu satisfacción.",
  ], 
  button: "contáctanos",
  href: "/contact#contactForm"
};

export default function AboutHeader() {
  return <Headers Header={Header}/>
}