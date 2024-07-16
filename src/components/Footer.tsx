import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  const LinksStyles = "hover:text-primary"

  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full bg-slate-100">
      <div className="container flex gap-5 py-3 md:gap-0 flex-col flex-wrap md:flex-row z-50">
        <section className="flex flex-col justify-center items-center  md:w-2/4 lg:w-1/4 p-5">
          <Link href={"/"}>
            <Image
              src={"/logotipo.svg"}
              alt="Logotipo"
              width={150}
              height={150}
              priority
            />
          </Link>
          <h3 className="text-center font-semibold">
          Somos Belanova Inc expertos en remodelación, construcción y/o arreglo de tu hogar, oficinas o cualquier espacio.
          </h3>
        </section>
        <section className="flex flex-col gap-1 justify-center items-center md:w-2/4 lg:w-1/4 p-5">
          <h3 className="font-semibold text-lg text-primary">Contacto</h3>
          <Link  href="/mailto:info@belanovainc.com" className="flex gap-5 hover:text-primary">
            <Mail />
            info@belanovainc.com
          </Link>

          <Link href="tel:+51970882196" className="flex gap-5 mb-5 hover:text-primary">
            <Phone />
            +51 970 882 196
          </Link>
          <h3 className="font-semibold text-lg text-primary">RRSS</h3>
          <div className="flex gap-5 mt-1">
            <Link
              target="_blank"
              href="https://www.facebook.com/Belanova.Inc.Pe"
              className={LinksStyles}
            >
              <Facebook />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/belanova.inc/"
              className={LinksStyles}
            >
              <Instagram />
            </Link>
            <Link
            target="_blank"
            href="https://www.tiktok.com/@belanova.inc"
            className={LinksStyles}
          >
            <Image
              src={"/tiktok.png"}
              alt="logo"
              width={23}
              height={23}
              className="mx-1"
            />
          </Link>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center  md:w-2/4 lg:w-1/4 p-5 gap-1">
          <h3 className="font-semibold text-lg text-primary">Servicios</h3>
          <Link className={LinksStyles} href={"/carpentry"}>Carpintería</Link>
          <Link className={LinksStyles} href={"/drywall"}>Drywall</Link>
          <Link className={LinksStyles} href={"/generalservices"}>Servicios Generales</Link>
        </section>
        <section className="flex flex-col justify-center items-center md:w-2/4 lg:w-1/4 p-5">
        <h3 className="font-semibold text-lg">¡TU EMPRESA POR EXCELENCIA!</h3>
        <p>Déjanos tus datos y te contactamos</p>
        <Link href={"/contact#contactForm"} className="text-background bg-primary rounded-sm px-3 py-2 text-md uppercase text-sm">¡TE LLAMAMOS!</Link>
        </section>
      </div>
      <div className="bg-slate-200 py-10">
      <h3 className="text-center">
            {year}{" "}
            <span className="text-primary font-semibold">Belanova INC.</span> Todos
            los derechos reservados.
          </h3>
      </div>
    </footer>
  );
}
