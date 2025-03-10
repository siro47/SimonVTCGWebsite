import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy Page | SimonV TCG",
    description: "This is Privacy Policy Page for SimonV TCG Webpage",
};

const Privacy = () => {
  return (
    <>
      <Breadcrumb
        pageName="Política de Privacidad"
        description="Política de Privacidad en SimonV TCG"
      />

<div className="container py-8 md:p-8">
          <p className="pb-4">En <strong className='text-secondary'>SimonV TCG </strong> (en adelante, "nosotros" o "nuestro"), nos comprometemos a proteger tu privacidad y a garantizar que la información personal que compartas con nosotros se maneje de manera segura y responsable. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal cuando utilizas nuestro sitio web.</p>

          <h2 className="text-xl font-bold my-8">Información que recopilamos</h2>
          <p>Recopilamos los siguientes tipos de información cuando interactúas con nuestro sitio:</p>
          <ul className="pb-4 list-disc">
            <li className="ml-4 p-2"><strong>Información personal: </strong>Cuando te registras, realizas una compra, o te suscribes a nuestros boletines, podemos recopilar tu nombre, dirección de correo electrónico, número de teléfono, dirección de facturación y otra información necesaria.</li>
            <li className="ml-4 p-2"><strong>Información técnica: </strong> Recopilamos información automáticamente a través de cookies o tecnologías similares, como tu dirección IP, tipo de navegador, sistema operativo, fecha y hora de acceso, y las páginas que visitas en nuestro sitio.</li>
            <li className="ml-4 p-2"><strong>Información de pagos: </strong> Si realizas compras a través de nuestro sitio, la información relacionada con los pagos (como número de tarjeta de crédito o débito) es procesada por nuestros proveedores de servicios de pago, quienes tienen sus propias políticas de privacidad.</li>
          </ul>

          <h2 className="text-xl font-bold my-8">Cómo utilizamos tu información</h2>
          <p>Utilizamos la información personal que recopilamos para los siguientes fines: </p>
            <ul className="pb-4 list-disc">
                <li className="ml-4 p-2">Proveer los servicios solicitados, como procesar tus compras o responder a tus consultas.</li>
                <li className="ml-4 p-2">Enviarte comunicaciones relacionadas con nuestros productos y servicios, como promociones, actualizaciones y boletines informativos (si te has suscrito).</li>
                <li className="ml-4 p-2">Mejorar nuestro sitio web y la experiencia del usuario.</li>
                <li className="ml-4 p-2">Cumplir con nuestras obligaciones legales y resolver disputas.</li>
            </ul>
          <h2 className="text-xl font-bold my-8">Compartir tu información</h2>
          <p>No vendemos, alquilamos ni compartimos tu información personal con terceros, salvo en los siguientes casos:</p>
          <ul className="pb-4 list-disc">
              <li className="ml-4 p-2"><strong>Proveedores de servicios: </strong>Podemos compartir tu información con proveedores de servicios que nos ayuden a operar nuestro sitio web o realizar nuestras actividades comerciales (por ejemplo, procesadores de pagos, servicios de alojamiento web).</li>
              <li className="ml-4 p-2"><strong>Obligaciones legales: </strong>Si así lo exige la ley o en respuesta a un proceso legal, como una citación o orden judicial, podemos divulgar tu información personal.</li>
            </ul>
          <h2 className="text-xl font-bold my-8">Seguridad de la información</h2>
          <p>Tomamos medidas de seguridad razonables para proteger tu información personal contra accesos no autorizados, alteraciones, divulgaciones o destrucción. Sin embargo, ten en cuenta que ninguna transmisión de datos por internet o almacenamiento electrónico es completamente segura.</p>
          <h2 className="text-xl font-bold my-8">Tus derechos</h2>
          <p>Dependiendo de tu ubicación y las leyes que apliquen, podrías tener ciertos derechos sobre la información personal que tenemos sobre ti, como:</p>
          <ul className="pb-4 list-disc">
              <li className="ml-4 p-2">Acceder a los datos personales que hemos recopilado.</li>
              <li className="ml-4 p-2">Rectificar datos incorrectos o incompletos.</li>
              <li className="ml-4 p-2">Solicitar la eliminación de tu información personal, salvo que tengamos la obligación de conservarla por razones legales.</li>
              <li className="ml-4 p-2">Oponerte o limitar el uso de tus datos en ciertos casos.</li>
          </ul>
          <h2 className="text-xl font-bold my-8">Enlaces a otros sitios web</h2>
          <p>Nuestro sitio puede contener enlaces a otros sitios web de terceros. No somos responsables de las prácticas de privacidad de esos sitios, por lo que te recomendamos leer sus políticas de privacidad antes de proporcionarles cualquier tipo de información personal.</p>
          <h2 className="text-xl font-bold my-8">Cambios en esta Política de Privacidad</h2>
          <p>Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página, con una fecha de actualización. Te recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos tu información.</p>
          <h2 className="text-xl font-bold my-8">Contacto</h2>
          <p>Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad o sobre cómo manejamos tus datos, por favor, contáctanos                     <Link
                      href="mailto:simonvtcg@gmail.com" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">aquí</Link></p>
      </div>
    </>
  );
};

export default Privacy;
