"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.remove("bg-background/85");
          navbar.classList.add("bg-background");
        } else {
          navbar.classList.remove("bg-background");
          navbar.classList.add("bg-background/85");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const pathname = usePathname();
  const links = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Nosotros",
      href: "/about",
    },
    {
      name: "Carpintería",
      href: "/carpentry",
    },
    {
      name: "Drywall",
      href: "/drywall",
    },
    {
      name: "Serv. Generales",
      href: "/generalservices",
    },
    {
      name: "Contáctanos",
      href: "/contact",
    },
  ];

  return (
    <nav
      id="navbar"
      className="flex items-center justify-between w-screen h-20 bg-background/85 border-b-[1px] fixed top-0 z-50"
    >
      <Link href={"/"} className="w-56">
        <Image
          className="w-40 h-auto lg:ml-5 object-cover px-3"
          priority
          src="/logotipo.svg"
          alt="logotipo"
          width={200}
          height={100}
        />
      </Link>

      <div className="mr-7 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu size={30} className="text-primary cursor-pointer" />
          </SheetTrigger>
          <SheetContent
            side={"top"}
            className="bg-gradient-to-t from-slate-50 to-slate-100"
          >
            <SheetTitle hidden/>
            <SheetDescription hidden/>
            <menu className="flex flex-col h-5/6 justify-center">
              {links.map(({ href, name }) => (
                  <SheetClose key={name} asChild>
                    <Link
                      href={href}
                      className={`flex items-center justify-center rounded-sm w-full h-14  ${
                        pathname === href && "text-background bg-primary"
                      }`}
                    >
                      {name}
                    </Link>
                  </SheetClose>
              ))}
            </menu>
          </SheetContent>
        </Sheet>
      </div>

      <menu className="hidden lg:flex flex-1 justify-center gap-5">
        {links.map(({ href, name }) => (
            <Link key={name}
              href={href}
              className={`rounded-sm px-3 py-2 text-md uppercase text-sm ${
                pathname === href && "text-background bg-primary"
              }`}
            >
              {name}
            </Link>
        ))}
      </menu>
    </nav>
  );
}
