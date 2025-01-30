import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookies Policy Page | SimonV TCG",
    description: "This is Cookies Policy Page for SimonV TCG Webpage",
};

const Cookies = () => {
  return (
    <>
      <Breadcrumb
        pageName="Política de Cookies"
        description="Política de Cookies en SimonV TCG"
      />
      <div className="container py-8 md:p-8">
        <p className="pb-4">En <strong className='text-secondary'>SimonV TCG </strong> utilizamos cookies para mejorar la experiencia de nuestros usuarios, analizar el tráfico del sitio y personalizar el contenido. Al acceder a nuestro sitio, aceptas el uso de cookies conforme a nuestra política.</p>
          <h2 className="text-xl font-bold my-8">¿Qué son las cookies?</h2>
          <p className="pb-4">Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estas permiten recordar tus preferencias y actividades para facilitar la navegación en futuras visitas.</p>

          <h2 className="text-xl font-bold my-8">Tipos de cookies que utilizamos:</h2>

          <ul className="pb-4 list-disc">
            <li className="ml-12 p-2"><strong>Cookies necesarias: </strong> Son esenciales para el funcionamiento básico del sitio y no pueden desactivarse en nuestros sistemas.</li>
            <li className="ml-12 p-2"><strong>Cookies de rendimiento: </strong> Recogen información sobre cómo interactúas con nuestro sitio, lo que nos ayuda a mejorar el rendimiento y la funcionalidad.</li>
            <li className="ml-12 p-2"><strong>Cookies de funcionalidad: </strong> Permiten recordar tus preferencias (como el idioma o la región) para ofrecerte una experiencia más personalizada</li>
            <li className="ml-12 p-2"><strong>Cookies de terceros: </strong> Usamos servicios de terceros, como Google Analytics, para analizar el tráfico y realizar campañas de publicidad.</li>
          </ul>

          <h2 className="text-xl font-bold my-8">Gestionar tus cookies</h2>
          <p>Puedes gestionar o desactivar las cookies en cualquier momento desde la configuración de tu navegador. Sin embargo, ten en cuenta que algunas funcionalidades del sitio pueden verse afectadas si decides desactivar las cookies.</p>
      </div>

    </>
  );
};

export default Cookies;
