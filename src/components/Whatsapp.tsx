import Image from "next/image";
import Link from "next/link";

function Whatsapp() {
  return (
    <Link
    href={"https://wa.me/51970882196"}
    target="_blank"
    className="fixed bottom-7 right-8 z-50 transition ease-in-out duration-300 hover:scale-110 "
    >
      <Image
              src="/whatsapp.png"
              alt="Whatsapp Logo"
              height={60}
              width={60}
              />
    </Link>
  );
}

export default Whatsapp;
