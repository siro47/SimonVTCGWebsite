import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faMap, faMoneyBill1, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Pokémon TCG - XMadrid 2025 | SimonV TCG",
  description: "Main page of Pokémon TCG - XMadrid 2025",
  // other metadata
};

const EventPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Eventos"
        pageLink="events"
        subPageName="Pokémon TCG - XMadrid 2025"
        description="Torneo Pokémon TCG - XMadrid 2025"
      />

      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="w-full px-4 md:p-10">
          <div className="relative aspect-[3/4] animate-fadeInLeft">
            <Image
              src="/images/tournaments/pokemon-x-madrid.jpeg"
              alt="pokemon-xmadrid-event"
              fill
              className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 "
            />
          </div>
        </div>
        <div className="mt-12">
          <div className="pb-4">
            <FontAwesomeIcon icon={faCalendar} className="fas fa-calendar fa-2xl mr-8"></FontAwesomeIcon>
            14 de Septiembre de 2025
          </div>
          <div className="pb-4">
            <FontAwesomeIcon icon={faClock} className="fas fa-clock fa-2xl mr-8"></FontAwesomeIcon>
            10.30 - 15.00
          </div>
          <div className="pb-4">
            <FontAwesomeIcon icon={faMoneyBill1} className="fas fa-money-bill-1 fa-2xl mr-8"></FontAwesomeIcon>
            10€
          </div>
          <div className="pb-4">
            <FontAwesomeIcon icon={faMap} className="fas fa-map fa-2xl mr-8"></FontAwesomeIcon>
            X-Madrid Espacio Comercial, C. Oslo, 53, 28922 Alcorcón, Madrid
          </div>
          <div className="w-fit mx-auto mt-10">
            <a href="https://www.eventbrite.com/e/torneo-pokemon-tcg-x-madrid-simonv-tickets-1630017749969" target="_blank">
              <button className="w-[200px] px-8 py-4 rounded-sm text-base text-white dark:bg-secondary">
                Apúntate
              </button>
            </a>
          </div>
          <div className="mt-8">
            <div className='text-sm'>
                <p className='pb-4'>La inscripción en el torneo será vía Online mediante el link de esta web o de forma presencial el sábado 13 en el stand de SimonV.</p>
            </div>
            <h1 className='text-xl font-bold pb-8 mt-8'>Detalles del evento</h1>
            <div className='text-sm'>
                <ul className='pb-4 list-disc'>
                    <li className="p-2">Formato de juego: Standard Construido (Regulación G, H e I)</li>
                    <li className="p-2">Rondas: Suizo, 25 minutos, (Al mejor de 1 partida)</li>
                    <li className="p-2">Rondas totales: Hasta 7 (dependiendo del nº de participantes)</li>
                    <li className="p-2">100% de la recaudación para premios</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1">
        <div className="px-10">
          <h1 className='text-xl font-bold pb-8 mt-8'>Listado de premios</h1>
          <div className="text-sm">
            <p>Se destinará el 100% de la recaudación a premios y se añadirán premios y sorteos adicionales a cargo del organizador. Los premios se ajustarán al número de participantes. Los premios listados en el anuncio corresponde a una estimación para 32 jugadores.  </p>
          </div>
          <div className="relative animate-fadeInLeft mt-8">
            <Image
              src="/images/tournaments/pokemon-prizes.jpg"
              width="1000"
              height="500"
              alt="altered-prizes"
              className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
            />
          </div>
          <div className="container grid grid-cols-3 xl:grid-cols-3 mt-8 text-center">
            <div>
              <h2 className='text-xl font-bold pb-8 mt-8'>ETBs Llama blanca / Fulgor negro</h2>
              <Image
                  src="/images/tournaments/PokemonXMadrid/etb-llamablanca.webp"
                  width="1000"
                  height="500"
                  alt="etb-llamablanca"
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
                />
            </div>
            <div>
              <h2 className='text-xl font-bold pb-8 mt-8'>Sobres Mega Symphonia</h2>
              <Image
                src="/images/tournaments/PokemonXMadrid/mega-symphonia.png"
                width="1000"
                height="500"
                alt="altered-adventure"
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
            <div>
              <h2 className='text-xl font-bold pb-8 mt-8'>Sobres Mega Brave</h2>
              <Image
                src="/images/tournaments/PokemonXMadrid/mega-brave.png"
                width="1000"
                height="500"
                alt="altered-adventure"
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          <h1 className='text-xl font-bold pb-8 mt-8'>Bases legales</h1>
          <div className="text-sm">
            <p className='mb-2'>
                La presente normativa tiene como objetivo establecer las reglas de la competición. Estas reglas deberán ser conocidas y entendidas por la totalidad de los participantes, habiendo aceptado las mismas una vez que se formaliza la inscripción. Todos los participantes deberán comprometerse en su buena fe, para velar por el cumplimiento de las mismas. En lo que respecta al reglamento del juego Pokémon TCG y todo lo que no contemple la presente normativa, el evento se regirá por el reglamento oficial establecido por Pokémon Company, actualizado siempre a fecha del torneo. Éste debe ser conocido por todos los jugadores, al menos en sus aspectos más básicos. El formato para este torneo es estándar y cada jugador deberá traer su baraja.
            </p>
          </div>
          <h1 className='text-xl font-bold pb-8 mt-8'>Ranking</h1>
          <div className='text-sm mb-8'>
            <p className='mb-2'>
                Se utilizará la herramienta de Toornament para el emparejamiento y la clasificación de los jugadores. Es una herramienta testada y utilizada en múltiples torneos.
            </p>
          </div>
          <h1 className='text-xl font-bold pb-8 mt-8'>Lesión o Retirada</h1>
          <div className='text-sm mb-8'>
            <p className='mb-2'>
                Una lesión que impida al jugador no acudir a una ronda, se le dará por perdida la misma. En caso de que un participante decida retirarse del torneo, se le retirará del mismo y no se podrá reincorporar. Bajo ningún concepto se podrá sustituir los jugadores por otros, sea cual sea el motivo.
            </p>
          </div>
          <h1 className='text-xl font-bold pb-8 mt-8'>Retirada del torneo</h1>
          <div className='text-sm mb-8'>
            <p className='mb-2'>
            Si un jugador se retirara del campeonato ya comenzado, por la causa que fuera, BAJO NINGÚN CONCEPTO SE PERMITE INTRODUCIR NUEVOS JUGADORES. Sólo en el caso de que el torneo no se haya iniciado se admitirán nuevos jugadores. LA RETIRADA DEL CAMPEONATO POR MOTIVOS NO JUSTIFICADOS IMPLICA LA PÉRDIDA DE CUALQUIER DERECHO A RECLAMAR.
            </p>
          </div>
          <h1 className='text-xl font-bold pb-8 mt-8'>Otras Normas</h1>
          <div className='text-sm mb-8'>
            <p className='mb-2'>
            Aunque se trate de un torneo amateur, el objetivo sigue siendo disfrutar del juego y nuestro hobby. Aun así, en un juego en el que siempre tiene que haber un vencedor y es normal que todos queramos ganar, pero lo principal es la diversión de todos los participantes. Si no estás dispuesto a divertirte o piensas que puedes molestar a otro participante, abstente de participar. No se permitirán ningún tipo de menosprecio, insultos, vandalismo, etc. En estos casos y en los que no expuestos se consideran una conducta inapropiada para el buen desarrollo del evento, el jugador irrespetuoso recibirá una amonestación. En caso de recibir una segunda amonestación el jugador amonestado puede ser eliminado del evento, y bajo ningún concepto se permitirá su re-enganche al mismo. El evento puede ser fotografiado o grabado, por lo que cualquier jugador autoriza a ser grabado o fotografiado por personal de la organización. Este material gráfico puede ser público en cualquier medio que la organización considere oportuno (redes sociales, medios de comunicación, etc.)
            </p>
            <p className='mb-2'>
            Todos los participantes deberán ser arbitrados por los propios jugadores basándose en las reglas oficiales de Pokémon TCG, recordando que ante todo debe primar la cordura y el respeto entre todos los participantes del torneo. En caso de que una mesa no sea capaz de resolver cualquier duda o exista disconformidad, será el organizador quien decida la resolución de la incidencia. En los casos en los que estas bases no contemplen alguna situación, y sea necesario ser incluidas en las bases, la dirección podrá incluirlas sin previo aviso. Asimismo, también podrán modificar aquello que sea necesario, sea cual sea su naturaleza.
            </p>
          </div>
          <h1 className='text-xl font-bold pb-8 mt-8'>Otras consideraciones</h1>
          <div className='text-sm mb-8'>
            <p className='mb-2'>
            No se tolerará ninguna conducta que la organización considere inapropiada u obscena, en tal caso la organización se reservará el derecho a tomar las medidas que considere oportunas. La organización se reserva el derecho de adoptar cualquier iniciativa que, sin estar regulada en las presentes bases, contribuya al mayor éxito del concurso. La participación en el concurso implica la cesión del derecho de imagen. Los datos de carácter personal suministrados para la realización de la inscripción en el concurso se tratarán confidencialmente. Serán usados exclusivamente para la realización de este concurso y no serán vendidos ni cedidos a terceros en ningún caso. La participación en el torneo supone la aceptación plena de estas bases y de la decisión del jurado.
En caso de tener dudas puedes mandar un email a simonvtcg@gmail.com
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default EventPage;