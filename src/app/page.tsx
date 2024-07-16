import HomeHeader from "./components/HomeHeader";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import TecnologySpace from "./components/TecnologySpace";
import ContactForm from "@/app/contact/components/ContactForm";

export default function Home() {
  return (
    <>
    <HomeHeader />
    <AboutUs />
    <Services />
    <TecnologySpace />
    <ContactForm />
    </>
  );
}
