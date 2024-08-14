import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function useForm({NEXT_PUBLIC_SERVICE, NEXT_PUBLIC_TEMPLATE, NEXT_PUBLIC_KEY} : {NEXT_PUBLIC_SERVICE: string, NEXT_PUBLIC_TEMPLATE: string, NEXT_PUBLIC_KEY: string}) {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
 
  const refForm = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (refForm.current) {
      emailjs
        .sendForm(NEXT_PUBLIC_SERVICE, NEXT_PUBLIC_TEMPLATE, refForm.current, {
          publicKey: NEXT_PUBLIC_KEY,
        })
        .then(() => {
          setLoading(false);
          setSuccessMessage(true);
          refForm.current?.reset();
        })
        .catch((error) => {
          alert(error);
          setLoading(false);
        });
    }
  };

  const handleSuccesMessage = () => {
    setSuccessMessage(false);
  };

  return {
    loading,
    successMessage,
    refForm,
    sendEmail,
    handleSuccesMessage
  };
}
