import ContactForm from "@/app/contact/components/ContactForm";
import DrywallHeader from "./components/DrywallHeader";
import DrywallSystem from "./components/DrywallSystem";

export default function page() {
  return (
    <>
      <DrywallHeader />
      <DrywallSystem />
      <ContactForm />
    </>
  )
}