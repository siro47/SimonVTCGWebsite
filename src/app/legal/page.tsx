import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal Terms Page | SimonV TCG",
    description: "This is Legal Terms Page for SimonV TCG Webpage",
};

const Privacy = () => {
  return (
    <>
      <Breadcrumb
        pageName="Aviso legal"
        description="Aviso legal en SimonV TCG"
      />
      <div className="container py-8 md:p-8">
        <h2 className="text-xl font-bold my-8">Titularidad</h2>
        <p>
        Se informa a los usuarios de la presente página web, en adelante Usuario, que el titular del website www.simonvtcg.es, en adelante <strong className='text-secondary'>SimonV TCG </strong>, es Pablo Fernández-Durán Moreno con NIF: 51457570S
        </p>
        <h2 className="text-xl font-bold my-8">Condiciones de Uso</h2>
        <p>El acceso a <strong className='text-secondary'>SimonV TCG </strong> es libre y gratuito siempre que el usuario acepte las condiciones de uso que se le muestren al entrar según la legislación vigente.</p>
        <br/>
<p>Si el usuario se suscribe a cualquier servicio de <strong className='text-secondary'>SimonV TCG </strong>, lo hará aceptando las Condiciones de Uso y Política de Privacidad y Cookies que se le mostrarán.</p>
<br/>
<p>Para poder realizar compras en <strong className='text-secondary'>SimonV TCG </strong>, el usuario debe haber cumplido la mayoría de edad acorde a las leyes vigentes en el país desde el que se realiza la compra.</p>
        <h2 className="text-xl font-bold my-8">Veracidad de los datos</h2>
        <p>El Usuario reconoce que los datos suministrados son veraces y ciertos, comprometiéndose a notificar cualquier cambio o modificación que se produzca en los mismos.</p>
        <h2 className="text-xl font-bold my-8">Modificación del servicio</h2>
        <p><strong className='text-secondary'>SimonV TCG </strong> se reserva el derecho de modificar o eliminar los servicios que ofrece a través de la web.</p>
        <h2 className="text-xl font-bold my-8">Normas generales de uso</h2>
        <p>
        El Usuario se obliga a utilizar <strong className='text-secondary'>SimonV TCG </strong> de forma diligente, correcta y respetuosa, en especial cuando publique opiniones y/o comentarios.
Asimismo, se obliga a título meramente enunciativo a no realizar comentarios o acciones:
        </p>
        <ul className="pb-4 list-disc">
            <li className="ml-4 p-2">Difamatorios, inexactos, falsos, abusivos, injuriosos, obscenos, irreverentes, ofensivos, insultantes, tácita o expresamente sexuales, amenazantes, acosadores, racistas, sexistas, discriminatorios por cualquier motivo, que atenten contra la moral, el orden público, los derechos fundamentales, las libertas públicas, el honor, la intimidad o la imagen de terceros y en general la normativa vigente, y/o ilegales o infractores de derechos de terceros (por ejemplo, p.e., derechos de propiedad industrial e intelectual; derechos de privacidad o publicidad).</li>
            <li className="ml-4 p-2">Transmisores de correo basura, “SPAM”, mensajes con fines comerciales, “cartas en cadena” o mailings masivos no solicitados, falsos, engañosos o promuevan actividades ilegales o conducta grosera, amenazante, obscena, difamatoria o injuriosa.</li>
            <li className="ml-4 p-2">Que suministren información práctica sobre actividades ilegales.</li>
            <li className="ml-4 p-2">Que conlleven cualquier actividad comercial, publicidad o ventas, incluso aunque no haya contraprestación monetaria.</li>
            <li className="ml-4 p-2">Que contengan datos de carácter personal sobre terceras personas que requieran el consentimiento del propietario o titular de los derechos.</li>
        </ul>
        <p>El Usuario responderá frente a <strong className='text-secondary'>SimonV TCG </strong> o frente a cualquier tercero, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación. <strong className='text-secondary'>SimonV TCG </strong> no interviene los contenidos de los Usuarios.</p>
        <h2 className="text-xl font-bold my-8">Propiedad intelectual</h2>
        <p>Mediante estas condiciones legales no se cede ningún derecho de propiedad intelectual o industrial sobre <strong className='text-secondary'>SimonV TCG </strong> y sus contenidos (fotografías, vídeos, creaciones, textos...). Quedando expresamente prohibido al usuario la reproducción, transformación, distribución, comunicación pública, puesta a disposición, extracción, reutilización, reenvío o la utilización de cualquier naturaleza, por cualquier medio o procedimiento, de cualquiera de ellos, salvo en los casos en que esté legalmente permitido o sea autorizado por el titular de los correspondientes derechos.</p>
        <h2 className="text-xl font-bold my-8">Obligaciones de SimonV TCG </h2>
        <p><strong className='text-secondary'>SimonV TCG </strong> es responsable de los servicios que presta por ella misma y de los contenidos directamente originados por la propia web e identificados con su correspondiente copyright.</p>
        <br/>
        <p><strong className='text-secondary'>SimonV TCG </strong> adoptará las medidas necesarias que permitan garantizar la seguridad y privacidad en las comunicaciones.</p>
        <br/>
        <p><strong className='text-secondary'>SimonV TCG </strong> se reserva el derecho a suspender temporalmente la prestación del servicio sin previo aviso al Usuario, siempre y cuando sea necesario para efectuar operaciones de mantenimiento, actualización o mejora del servicio.</p>
        <br/>
        <p><strong className='text-secondary'>SimonV TCG </strong> no puede asegurar la disponibilidad y continuidad permanente del servicio web debido a interrupciones, fallos etc.</p>
      </div>
    </>
  );
};

export default Privacy;