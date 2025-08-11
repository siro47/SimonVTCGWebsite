import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faMap, faMoneyBill1, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Altered - World Championship Qualifier Spain 2025 | SimonV TCG",
  description: "Main page of Altered - World Championship Qualifier Spain 2025",
  // other metadata
};

const SWUPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Eventos"
        pageLink="events"
        subPageName="Altered - World Championship Qualifier Spain 2025"
        description="Torneo Altered - World Championship Qualifier Spain 2025"
      />

      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="w-full px-4 md:p-10">
          <div className="relative aspect-[3/4] animate-fadeInLeft">
            <Image
              src="/images/tournaments/altered-world-qualifiers-spain.jpg"
              alt="world-qualifiers-event"
              fill
              className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 "
            />
          </div>
        </div>
        <div className="mt-12">
          <div className="pb-4">
            <FontAwesomeIcon icon={faCalendar} className="fas fa-calendar fa-2xl mr-8"></FontAwesomeIcon>
            6 y 7 de Septiembre de 2025
          </div>
          <div className="pb-4">
            <FontAwesomeIcon icon={faClock} className="fas fa-clock fa-2xl mr-8"></FontAwesomeIcon>
            11.00 - 19.00
          </div>
          <div className="pb-4">
            <FontAwesomeIcon icon={faMoneyBill1} className="fas fa-money-bill-1 fa-2xl mr-8"></FontAwesomeIcon>
            25€
          </div>
          <div className="pb-4">
            <FontAwesomeIcon icon={faMap} className="fas fa-map fa-2xl mr-8"></FontAwesomeIcon>
            Recinte ferial La Farga, Carrer de Barcelona, 26, 08901 L'Hospitalet de Llobregat, Barcelona
          </div>
          <div className="w-fit mx-auto mt-10">
            <a href="https://bclever.ai/eventos/barcelona/infrefest-2025" target="_blank">
              <button className="w-[200px] px-8 py-4 rounded-sm text-base text-white dark:bg-secondary">
                Apúntate
              </button>
            </a>
          </div>
          <div className="mt-8">
            <div className='text-sm'>
                <p className='pb-4'>Estamos encantados de colaborar con el Clasificatorio para el Campeonato Mundial de Altered TCG en Barcelona, España.</p>
                <p className='pb-4'>Compite con otros Expedicionarios por la oportunidad de unirte a los campeones en el Campeonato Mundial de Altered que se celebrará en París a finales de este año. Este evento final tiene como objetivo ser una gran celebración comunitaria del primer aniversario de Altered, donde se coronará al primer Campeón Mundial.</p>
            </div>
            <h1 className='text-xl font-bold pb-8 mt-8'>Detalles del evento</h1>
            <div className='text-sm'>
                <ul className='pb-4 list-disc'>
                    <li className="p-2">Formato de juego: Standard Construido (Beyond the Gates, Trial by Frost & Whispers from the Maze)</li>
                    <li className="p-2">Nivel de cumplimiento de reglas: Competitivo (Rondas Suizo), High stakes (Top cut)</li>
                    <li className="p-2">Rondas: Suizo, 30 minutos, Best-of-One</li>
                    <li className="p-2">Rondas totales: Hasta 7 (dependiendo del nº de participantes)</li>
                    <li className="p-2">El top 32 pasa a la segunda ronda que se celebra el domingo</li>
                    <li className="p-2">Top 8 (Best-of-Three; eliminación simple; cuartos de final: 50 minutos, semifinales/final: sin tiempo)</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1">
        <div className="px-10">
          <h1 className='text-xl font-bold pb-8 mt-8'>Listado de premios</h1>
          <div className="text-sm">
            <p>Los premios otorgados dependerán del número de participantes. En la imagen de abajo encontrarás los premios para un torneo de hasta 128 participantes. ¡Pero podrían ser más si superamos esta cifra!</p>
            <p>¿Quién será el afortunado que se llevará la entrada a los Worlds con viaje y alojamiento pagado?</p>
          </div>
          <div className="relative animate-fadeInLeft mt-8">
            <Image
              src="/images/tournaments/altered-prizes-image.png"
              width="1000"
              height="500"
              alt="altered-prizes"
              className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
            />
          </div>
          <div className="container grid grid-cols-2 xl:grid-cols-4 mt-8 text-center">
            <div>
              <h2 className='text-xl font-bold pb-8 mt-8'>Playmat</h2>
              <Image
                  src="/images/tournaments/alteredWQC/ALT_WC_PLAYMAT_TOP8.png"
                  width="1000"
                  height="500"
                  alt="altered-champion"
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
                />
            </div>
            <div>
              <h2 className='text-xl font-bold pb-8 mt-8'>Adventure Pack</h2>
              <Image
                src="/images/tournaments/alteredWQC/ALT_AVENTURECARDS_BTG.png"
                width="1000"
                height="500"
                alt="altered-adventure"
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
            <div>
              <h2 className='text-xl font-bold pb-8 mt-8'>Faction Champion</h2>
              <Image
                src="/images/tournaments/alteredWQC/ALT_FACTIONCHAMPION_WC.png"
                width="1000"
                height="500"
                alt="altered-adventure"
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
            <div>
              <h2 className='text-xl font-bold pb-8 mt-8'>Hero Booster</h2>
              <Image
                src="/images/tournaments/alteredWQC/ALT_HEROSBOOSTER_WC.png"
                width="1000"
                height="500"
                alt="altered-adventure"
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          <h1 className='text-xl font-bold pb-8 mt-8'>Información sobre proxies</h1>
          <div className="text-sm">
            <p className='mb-2'>El uso de proxies se permite únicamente para cartas únicas y siguiendo las siguientes condiciones:</p>
            <ul className='pb-4 list-disc'>
              <li className="mx-6 py-2">Los jugadores que usen cartas proxy deberán notificar a los jueces antes del inicio del torneo</li>
              <li className="mx-6 py-2">La propiedad digital de las cartas únicas deberá probarse por todos los participantes a través de la aplicación oficial de Altered</li>
              <li className="mx-6 py-2">Las cartas proxy deberán imprimirse con suficiente calidad para que permitan una lectura similar a la carta oficial</li>
              <li className="mx-6 py-2">Las cartas proxy deberán mantenerse fuera del mazo principal y en un color de funda diferente</li>
              <li className="mx-6 py-2">Las cartas únicas que se sustituyan por proxies deberán sustituirse en el mazo por cartas 'Convergencias de Maná' en las que se indique claramente la carta única a la que reemplazen (Ejemplo: The Hunger – WFM-096-U-15709“)</li>
              <li className="mx-6 py-2">Las jugadores que utilicen proxies deberán informar a sus oponentes antes del inicio de cada partida y mostrar las cartas proxy boca abajo</li>
            </ul>
          </div>
          <h1 className='text-xl font-bold pb-8 mt-8'>Mantente informado</h1>
          <div className='text-sm mb-8'>
            <p>Entra en el grupo de WhatsApp del torneo para estar al tanto de todas las novedades
            <a href="https://chat.whatsapp.com/JWrJAkUXPNi11hsGbgNFx0" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} className="fas fa-instagram fa-2xl hover:text-secondary mx-2"></FontAwesomeIcon>
            </a>
            </p>
            <p>⁠Si deseas cartas escribenos al correo o por WhatsApp, envio a toda europa o entrega en mano el dia del torneo. ¡Descuentos exclusivos para participantes!
            <a href="mailto:simonvtcg@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} className="fas fa-envelope fa-2xl hover:text-secondary mx-2"></FontAwesomeIcon>
            </a>
            <a href="https://wa.me/627107240" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} className="fas fa-instagram fa-2xl hover:text-secondary mx-2"></FontAwesomeIcon>
            </a>
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default SWUPage;