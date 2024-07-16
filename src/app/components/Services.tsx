import CardServices from "@/components/CardServices";
import { BrickWall, Drill, Hammer, Paintbrush, Refrigerator, Table, Unplug, Warehouse } from "lucide-react";

const services = [
  {
    icon: <Drill size={43} color={"#0101AD"} />,
    title: "Carpintería",
    microservices: ["Laqueados", "Muebles", "Instalación de puertas"],
  },
  {
    icon: <Warehouse size={43} color={"#0101AD"}/>,
    title: "Aluminio",
    microservices: ["Ventanas", "Mamparas", "Policarbonato"],
  },
  {
    icon: <BrickWall size={43} color={"#0101AD"}/>,
    title: "Drywall",
    microservices: ["Sistema drywall", "Cielos rasos", "Separaciones"],
  },
  {
    icon: <Paintbrush size={43} color={"#0101AD"}/>,
    title: "Acabados",
    microservices: ["Pintura", "Microcemento", "Tratamiento antisalitre"],
  },
  {
    icon: <Hammer size={43} color={"#0101AD"}/>,
    title: "Pisos",
    microservices: ["Porcelanatos", "Pisos flotantes", "Zócalos"],
  },
  {
    icon: <Unplug size={43} color={"#0101AD"}/>,
    title: "Electricidad",
    microservices: ["Instalaciónes eléctricas", "Independización de líneas", "Mantenimiento"],
  },
  {
    icon: <Table size={43} color={"#0101AD"}/>,
    title: "Melamina",
    microservices: ["Muebles a medida", "Cocinas", "Walk in closet"],
  },
  {
    icon: <Refrigerator size={43} color={"#0101AD"}/>,
    title: "Refrigeración",
    microservices: ["Neveras", "Aires acondicionados", "Aires centralizados"],
  },
];

export default function Services() {
  return (
    <section className="container mt-5 flex flex-wrap gap-5 justify-center items-center bg-slate-50 py-10 rounded-lg cursor-pointer">
      {services.map((service) => (
        <CardServices key={service.title} service={service} />
      ))}
    </section>
  );
}
