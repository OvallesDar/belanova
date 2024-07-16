import Headers from "@/components/Headers";

const Header = {
  background:
    "bg-[url('https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/drywall/backgrounddrywall.jpg')]",
  title: "Servicios de Drywall",
  subtitle: ["Para construcción y/o remodelación de ambientes.",
    "Metal galvanizado revestido con placas de yeso al interior y placas de fibrocemento al exterior.",
  ], 
  button: "contáctanos",
  href: "/contact#contactForm"
};

export default function DrywallHeader() {
  return <Headers Header={Header}/>;
}
