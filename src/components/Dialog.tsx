"use client";

export default function Dialog({handleSuccesMessage}: { handleSuccesMessage: () => void; }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-[9999] flex justify-center items-center" onClick={handleSuccesMessage}>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">¡Mensaje Enviado!</h2>
        <p className="text-lg">Tu mensaje ha sido enviado con éxito.</p>
        <p className="mb-4 text-xs">Pronto nos pondremos en contacto contigo.</p>
        <button
          className="text-white font-light bg-primary py-1 px-4 rounded-xl border-2 border-slate-50"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
