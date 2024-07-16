import Headers from "@/components/Headers";

const Header = {
  background:
    "bg-[url('https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/backgroundhome.jpg')]",
  title: "BELANOVA INC.",
  subtitle: ["Drywall, Carpintería, Pintura.",
    "Atención de primera con la mejor calidad en productos y servicios.",
  ], 
  button: "contáctanos",
  href: "/contact#contactForm"
};

export default function HomeHeader() {
  return <Headers Header={Header}/>;
}
