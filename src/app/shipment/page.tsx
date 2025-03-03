import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shipment Page | SimonV TCG",
    description: "This is Shipment for SimonV TCG Webpage",
};

const Shipment = () => {
  return (
    <>
      <Breadcrumb
        pageName="Envíos y devoluciones"
        description="Envíos y devoluciones en SimonV TCG"
      />
      <div className="container py-8 md:p-8">
      <h2 className="text-xl font-bold my-8">Envío del paquete</h2>
      <p>Como norma general, los paquetes se envían dentro de las 48 horas siguientes a la recepción del pago. Los envíos se realizan a través de empresas de mensajería privada y Correos. Sea cual sea la forma de envío, te proporcionaremos un enlace y número de seguimiento para que puedas seguir tu pedido en línea.</p>
      <br/>
      <p>Enviamos todos sus pedidos protegidos y preparados para que lleguen en perfectas condiciones. Si el pedido que recibes tiene algún defecto o ha sufrido daños en el trayecto, podrás solicitar el cambio del producto o reembolso del dinero del pedido o de los productos dañados.</p>
      <h2 className="text-xl font-bold my-8">Devolución del paquete</h2>
      <p>Aceptamos devoluciones de nuestros productos siempre que se cumplan las siguientes condiciones:</p>
      <ul className="pb-4 list-disc">
      <li className="ml-4 p-2">Que se hayan recibido en mal estado o estén defectuosos.</li>
      <li className="ml-4 p-2">Que no hayan pasado 14 días a partir de la recepción del producto.</li>
      <li className="ml-4 p-2">Que el producto se encuentre en su embalaje original.</li>
      </ul>
      <p>El cliente deberá enviar una fotografía o vídeo del embalaje y del producto a fin de poder juzgar su estado y si la devolución es correcta. Una vez recibida la mercancía en nuestros almacenes, y previa comprobación del estado de la misma, se procederá al reintegro de su importe conforme a la modalidad de pago realizada por el cliente. Los gastos de envío serán reembolsados solo en el caso de devoluciones por producto roto o defectuoso. En el resto de casos, el coste de devolución corre a cargo del comprador.</p>
      <br/>
      <p>Para realizar su devolución, póngase en contacto con nosotros en: simonvtcg@gmail.com</p>
      <h2 className="text-xl font-bold my-8">Preventas y productos bajo pedido</h2>
      <p>Todos los productos en preventa o bajo pedido no se encuentran en stock y se servirán una vez se reciban en almacén. Las fechas de disponibilidad han sido ofrecidas por los proveedores y son orientativas y sujetas a cambios. La compra de un producto en preventa o bajo pedido supone la aceptación de estos estos puntos y no son motivos necesarios de cancelación o compensación.</p>
      <br/>
      <p>Los pedidos que incluyan productos en preventa o bajo pedido quedan sujetos a su tramitación y envío una vez el pedido esté completado en su totalidad. Todos los juegos en preventa serán enviados en la fecha marcada por el proveedor y que señalamos en el producto.</p>
      <br/>
      <p>Las preventas pueden estar sujetas a retrasos y cambios propias de los procesos de producción y no son causa única justificada de anulación de la compra. La cancelación de estos pedidos y la devolución de la compra siempre debe ser consultada a contacto@wargenwargames.com que valorará el caso.</p>
      </div>
    </>
  );
};

export default Shipment;