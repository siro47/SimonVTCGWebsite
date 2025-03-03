import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms And Conditions Page | SimonV TCG",
    description: "This is Terms And Conditions Page for SimonV TCG Webpage",
};

const Terms = () => {
  return (
    <>
      <Breadcrumb
        pageName="Términos y condiciones"
        description="Términos y condiciones en SimonV TCG"
      />
      <div className="container py-8 md:p-8">
        <h2 className="text-xl font-bold my-8">Titularidad</h2>
        <p>simonvtcg.es es una página web propiedad de Pablo Fernández-Durán Moreno, con NIF 51457570S, Madrid (España), simonvtcg@gmail.es
Las siguientes condiciones serán aplicadas a todas las ventas realizadas en simonvtcg.es</p>
<p>La realización de cualquier pedido supone que el cliente ha leído y aceptado las presentes condiciones de venta.</p>
        <h2 className="text-xl font-bold my-8">Productos</h2>
        <p>simonvtcg.es comercializa productos de los que se da información detallada en la que se incluye fotografía de los mismos, descripción, nombre y su precio con IVA incluido.</p>
        <h2 className="text-xl font-bold my-8">Precios</h2>
        <p>Los productos que aparecen en simonvtcg.es aparecen con el precio en Euros e IVA incluido. Los precios podrán variar sin previo aviso y en cualquier momento. El precio de los artículos no se considerará ningún compromiso contractual y será considerado como una propuesta de compra para realizar el pedido. Por esta razón si existiera algún error en el precio o fuera modificado por wargenwargames.com se informará debidamente al cliente y se pedirá confirmación al mismo para dar curso al pedido.</p>
        <h2 className="text-xl font-bold my-8">Coste y formas de envío</h2>
        <p>El coste de los envíos a península será gratuito.</p>
        <br/>
        <p>
        Como norma general, los paquetes se envían dentro de las 48 horas siguientes a la recepción del pago. Los envíos se realizan a través de empresas de mensajería privada y Correos. Sea cual sea la forma de envío, te proporcionaremos un enlace y número de seguimiento para que puedas seguir tu pedido en línea.
        </p>
        <br/>
        <p>
        Toda la información sobre los envíos podrá leerla en nuestras condiciones de <Link href="/shipment" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">Envío y Devoluciones</Link>
        </p>
        <h2 className="text-xl font-bold my-8">Promociones y ofertas</h2>
        <p>
        Las ofertas que sean presentadas en simonvtcg.es serán validas mientras estén expuestas en la Web o existan unidades disponibles en stock. Las condiciones serán las mismas que para el resto de productos.
        </p>
        <h2 className="text-xl font-bold my-8">Preventa</h2>
        <p>Todos los productos en preventa no se encuentran en stock y se servirán una vez se reciban en almacén. Las fechas de disponibilidad han sido ofrecidas por los proveedores y son orientativas y sujetas a cambios. La compra de un producto en preventa supone la aceptación de estos estos puntos y no son motivos necesarios de cancelación o compensación.</p>
        <p>Los pedidos que incluyan productos en preventa quedan sujetos a su tramitación y envío una vez el pedido esté completado en su totalidad. Todos los juegos en preventa serán enviados en la fecha marcada por el proveedor y que señalamos en el producto.</p>
        <p>Las preventas pueden estar sujetas a retrasos y cambios propias de los procesos de producción y no son causa única justificada de anulación de la compra. La cancelación de estos pedidos y la devolución de la compra siempre debe ser consultada a simonvtcg@gmail.com que valorará el caso.</p>
        <h2 className="text-xl font-bold my-8">Medios de Pago</h2>
        <p>El pago de los productos adquiridos en simonvtcg.es será abonado a través de:</p>
        <ul className="pb-4 list-disc">
        <li className="ml-4 p-2">Tarjeta de crédito o débito</li>
        <li className="ml-4 p-2">Google Pay</li>
        <li className="ml-4 p-2">Apple Pay</li>
        </ul>
        <p>A la hora de realizar el pedido se conectará con la plataforma de pago seguro Stripe donde deberá indicar los datos correspondientes requeridos por la plataforma.</p>
      </div>
      </>
  );
};

export default Terms;