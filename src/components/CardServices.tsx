"use client";
import { motion } from "framer-motion";
interface CardServicesProps {
  service: {
    icon: React.JSX.Element;
    title: string;
    microservices: string[];
  };
}

export default function CardServices({ service }: CardServicesProps) {
  const { icon, title, microservices } = service;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.5, duration: 1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      className="w-full sm:w-1/3 lg:w-1/5 flex flex-col items-center gap-1 py-3 rounded-sm hover:bg-slate-100"
    >
      {icon}
      <h3 className="text-2xl">{title}</h3>
      {microservices.map((microservice, index) => (
        <p key={index}>{microservice}</p>
      ))}
    </motion.div>
  );
}
