import CardHorizontalLogoTitle from "@/components/CardHorizontalLogoTitle";
import { Clock, Handshake, PiggyBank, Sparkles, Wand } from "lucide-react";

export default function RecognizedBy() {
  const reasons = [
    {
      icon: <Clock size={43} color="#0101AD" />,
      title: "Puntualidad",
      descriptions:[
          "Llegar a tiempo a las citas y reuniones es una fase de autodisciplina y evidencia de respeto a uno mismo.",
        ]
    },
    {
        icon: <Sparkles size={43} color="#0101AD" />,
        title: "Calidad",
        descriptions:[
            "La calidad es nuestra mejor garantía de la fidelidad de nuestro clientes, nuestra mas fuerte defensa contra la competencia y el único camino para el crecimiento.",
        ]
      },
      {
        icon: <Wand size={43} color="#0101AD" />,
        title: "Limpieza",
        descriptions:[
            "Mantener el orden y limpieza es prioridad.",
            "Al finalizar cada servicio se limpiará el área correspondiente."
        ]
      },
      {
        icon: <PiggyBank size={43} color="#0101AD" />,
        title: "Ahorro",
        descriptions:[
            "Te asesoramos en la solución y elección de los materiales más convenientes a tu presupuesto.",
            "La calidad no siempre requiere altos costos."
        ]
      },
      {
        icon: <Handshake size={43} color="#0101AD" />,
        title: "Confianza",
        descriptions:[
            "La confianza y el compromiso es lo que convierte una promesa en realidad.",
            "En Belanova Inc sabemos que la confianza se basa en la honestidad y en la comunicación clara."
        ]
      }
  ];
  return (
    <section className="container flex flex-col lg:flex-row py-3">
      <h3 className="w-full lg:w-1/2 self-center justify-self-center text-center text-3xl">
        <span className="text-primary">Reconocidos</span>
        <br /> por nuestro compromiso.
      </h3>

      <div className="w-full lg:w-1/2 overflow-hidden">
        {reasons.map((reason, index) => (
          <CardHorizontalLogoTitle key={reason.title} reason={reason} />
        ))}
      </div>
    </section>
  );
}
