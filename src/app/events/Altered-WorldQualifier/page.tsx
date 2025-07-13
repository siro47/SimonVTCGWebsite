import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faMap, faMoneyBill1} from "@fortawesome/free-regular-svg-icons";

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
            6 Septiembre 2025
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
                <p className='pb-4'>Estamos encantados de albergar el Clasificatorio para el Campeonato Mundial de Altered TCG en Barcelona, España.</p>
                <p className='pb-4'>Compite con otros Expedicionarios por la oportunidad de unirte a los campeones en el Campeonato Mundial de Altered que se celebrará en París a finales de este año. Este evento final tiene como objetivo ser una gran celebración comunitaria del primer aniversario de Altered, donde se coronará al primer Campeón Mundial.</p>
            </div>
            <h1 className='text-xl font-bold pb-8 mt-8'>Detalles del evento</h1>
            <div className='text-sm'>
                <ul className='pb-4 list-disc'>
                    <li className="p-2">Game format: Standard Constructed (Beyond the Gates, Trial by Frost & Whispers from the Maze)</li>
                    <li className="p-2">Rules Enforcement Level: Competitive (Swiss rounds), High stakes (Top cut)</li>
                    <li className="p-2">Rounds: Swiss, 30 minutes, Best-of-One</li>
                    <li className="p-2">Total rounds: up to 7 (depending on attendance)</li>
                    <li className="p-2">Top 8 Cut (Best-of-Three; single elimination; quarterfinals: 50 minutes time, semifinals/finals: untimed)</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1">
        <div className="px-20">
          <div className="relative aspect-[3/4] animate-fadeInLeft">
            <Image
              src="/images/tournaments/altered-prizes-img.jpg"
              width="1000"
              height="500"
              alt="swu-event"
              className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
            />
          </div>
        </div>
      </div>

    </>
  );
};

export default SWUPage;