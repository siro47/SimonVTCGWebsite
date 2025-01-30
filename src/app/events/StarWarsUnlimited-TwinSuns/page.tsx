import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Star Wars Unlimited - Twin Suns | SimonV TCG",
  description: "Main page of Star Wars Unlimited - Twin Suns Tournament organised by SimonV TCG",
  // other metadata
};

const SWUPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Eventos"
        pageLink="events"
        subPageName="StarWarsUnlimited - TwinSuns"
        description="Torneo StarWarsUnlimited - TwinSuns"
      />

      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="w-full px-4 md:p-10">
          <div className="relative aspect-[3/4] animate-fadeInLeft">
            <Image
              src="/images/tournaments/sw-unlimited.png"
              alt="swu-event"
              fill
              className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 "
            />
          </div>
        </div>
        <div>
          <h1 className='text-xl font-bold pb-8'> Reglas </h1>
          <div className='text-sm'>
            <p className="pb-4"><strong className='text-secondary'>Twin Suns</strong> es un formato construido para el que se utilizan las reglas de multijugador. Normalmente este formato enfrenta a todos los jugadores entre sí, pero queremos plantear este modo <strong className='text-primary'>cooperativo por parejas</strong> para darle una mayor diversión al torneo. </p>
            <p className="pb-4">Para jugar con el formato <strong className='text-secondary'>Twin Suns</strong>, tienes que diseñar tu mazo con un mínimo de <strong className="text-primary">80 cartas</strong>, más <strong className="text-primary">10 cartas</strong> de banquillo, que incluya un <strong className="text-primary">máximo de una copia por carta</strong>. Además se compone de <strong className="text-primary">dos líderes</strong> que tienen que coincidir en el aspecto de maldad o heroísmo y una base.</p>
            <p className="pb-4">En principio se juega de la misma forma, con algunas reglas especiales:</p>
            <ul className="pb-4 list-image-ship">
              <li className="ml-12 p-2">Los jugadores competirán por parejas en lugar de individualmente.</li>
              <li className="ml-12 p-2">Cuando un jugador es eliminado del juego la partida termina, quedando su pareja eliminada y dando la ronda por ganada al equipo superviviente.</li>
              <li className="ml-12 p-2">En lugar de solo la ficha de iniciativa, existirán dos fichas más. La de plan, que te permitirá robar una carta y luego descartar otra. Y la de explosión que hará 1 punto de daño a la base de cada jugador enemigo. Al coger cualquiera de estas fichas el turno habrá terminado para el jugador y no podrá jugar cartas hasta la siguiente fase.</li>
              <li className="ml-12 p-2">Las cartas que especifiquen que afectan a sus aliados, afectarán también a las cartas de los Compañeros.</li>
              <li className="ml-12 p-2">Los jugadores se sentarán de forma alterna de manera que, cada jugador quedará de forma diagonal a su compañero.</li>
              <li className="ml-12 p-2">Los jugadores no podrán compartir información abiertamente entre ellos acerca de las cartas de su mano, esto hará que el compañerismo y la estrategia del torneo sea mejor.</li>
              <li className="ml-12 p-2">Las rondas de juego serán de 60 minutos. </li>
            </ul>
            <p className="pb-4">Estarán permitidas las cartas de las siguientes expansiones: <br/> Chispas de la Rebelión, Sombras de la Galaxia, El Ocaso de la República y Salto a la Velocidad de la Luz</p>
            <p className="">Mayoritariamente tendremos en cuenta las reglas oficiales de <strong className='text-primary'>Fantasy Flight Games</strong> con algunas modificaciones: </p>
            <p className="pb-8"><a href="https://starwarsunlimited.com/es/how-to-play?chapter=twin-suns" className="hover:text-primary italic">Link de reglas oficiales Fantasy Flight Games</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SWUPage;
