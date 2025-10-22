import Image from "next/image";

const EventsSection = () => {
  return (
    <section id="riftbound-x-madrid" className="md:pt-4 lg:pt-10">
      <h1 className="mb-8 text-3xl"> Riftbound: X-Madrid 2025 </h1>
      <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
        <div className="-mx-4 flex flex-wrap items-center">

          <div className="lg:w-3/12"></div>

          <div className="w-full px-4 md:p-10">
            <div className="relative aspect-[3/4] animate-fadeInRight">
              <Image
                src="/images/tournaments/riftbound-x-madrid.webp"
                alt="altered-event"
                fill
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
              />
            </div>
            </div>
        </div>
        <div className="text-end md:pr-10">
            <a href="/events/Riftbound-XMadrid" className="text-primary italic"> Más información {'>'} </a>
          </div>
        <div className="w-fit mx-auto mt-10">
          <a href="https://buytickets.at/simonvtcg/1916137" target="_blank">
            <button className="w-[200px] px-8 py-4 rounded-sm text-base text-white dark:bg-secondary">
              Apúntate
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
