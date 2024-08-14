"use client";
import { motion } from "framer-motion";
import useForm from "@/hooks/useForm";
import Loading from "@/components/Loading";
import Dialog from "@/components/Dialog";

const NEXT_PUBLIC_SERVICE = "service_jvd3u4k";
const NEXT_PUBLIC_TEMPLATE = "template_87n860m";
const NEXT_PUBLIC_KEY = "DgQ_rN9KDCYyErWFY";

export default function ContactForm() {
  const { loading, successMessage, refForm, sendEmail, handleSuccesMessage } =
    useForm({ NEXT_PUBLIC_SERVICE, NEXT_PUBLIC_TEMPLATE, NEXT_PUBLIC_KEY });

  return (
    <div className="overflow-hidden" id="contactForm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex container flex-col md:flex-row justify-between py-32 gap-5"
      >
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-3xl font-extralight">
            <span className="text-primary">Contáctanos</span>
            <br /> Déjanos un mensaje
          </h2>
          <p className="text-xl font-extralight">
            Si deseas consultar mayor información sobre nuestros servicios o
            cotizaciones.
          </p>
        </div>
        <div className="w-full relative">
          {loading ? <Loading /> : null}
          {successMessage ? (
            <Dialog handleSuccesMessage={handleSuccesMessage} />
          ) : null}
          <form
            ref={refForm}
            onSubmit={sendEmail}
            className="flex flex-col gap-2"
          >
            <input
              required
              className="border-slate-500 border-solid border-[1px] p-2 rounded-sm"
              name="user_name"
              type="text"
              placeholder="Nombre"
            />
            <input
              required
              className="border-slate-500 border-solid border-[1px] p-2 rounded-sm"
              name="user_email"
              type="email"
              placeholder="Email"
            />
            <input
              required
              className="border-slate-500 border-solid border-[1px] p-2 rounded-sm"
              name="user_phone"
              type="tel"
              placeholder="Teléfono"
            />
            <textarea
              required
              className="border-slate-500 border-solid border-[1px] p-2 rounded-sm"
              name="message"
              placeholder="Mensaje"
              rows={5}
            />
            <button className="font-light bg-primary text-slate-50 p-3 rounded-sm">
              Enviar
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
