"use client";
import { motion } from "framer-motion";
interface ChardHorizontalLogoTitleProps {
  reason: {
    icon: React.JSX.Element;
    title: string;
    descriptions: string[];
  };
}

export default function CardHorizontalLogoTitle({
  reason,
}: ChardHorizontalLogoTitleProps) {
  const { icon, descriptions, title } = reason;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.5, duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }, 
      }}
      className="flex items-center py-3 gap-3"
    >
      {icon}
      <div className="w-5/6">
        <h3 className="font-bold">{title}</h3>
        {descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
    </motion.div>
  );
}
