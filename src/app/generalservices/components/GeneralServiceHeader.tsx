import Headers from "@/components/Headers";

const Header = {
  background:
    "bg-[url('https://ovarey2-0.s3.eu-west-3.amazonaws.com/belanova/generalsercives/backgroundgeneralservices.jpg')]",
  title: "En Belanova Inc.",
  subtitle: ["Tenemos muchos más servicios para ti.",
    "Acabados, Electricidad, Refrigeración, Mayolicas, Porcelanatos, Mosaicos y mucho más. ",
  ], 
  button: "contáctanos",
  href: "/contact#contactForm"
};

export default function GeneralServiceHeader() {
  return <Headers Header={Header}/>;
}
