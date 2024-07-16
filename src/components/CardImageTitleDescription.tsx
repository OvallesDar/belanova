"use client";
import Image from "next/image";
import { motion } from "framer-motion";
interface CardImageTitleDescriptionProps {
  card: {
    image: string;
    title: string;
    description: string;
  };
}

export default function CardImageTitleDescription({
  card,
}: CardImageTitleDescriptionProps) {
  const { image, title, description } = card;
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
      id="card-container"
      className="w-full max-w-[300px] h-[400px] shadow-black/50 shadow-md rounded-sm"
    >
      <div id="card-image" className="h-1/2">
        <Image
          className="rounded-t-sm object-cover w-full h-full"
          src={image}
          alt="test"
          height={800}
          width={800}
        />
      </div>
      <div id="card-description" className="p-5 h-1/2">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-sm font-light">{description}</p>
      </div>
    </motion.div>
  );
}
