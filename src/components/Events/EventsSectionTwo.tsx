import Image from "next/image";

const EventsSectionTwo = () => {
  return (
    <section id="altered-event" className="pt-10">
      <div className="container">
        <h1 className="mb-8 text-3xl"> Star Wars Unlimited </h1>
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">

            <div className="lg:w-3/12"></div>

            <div className="w-full px-4 lg:w-6/12">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/tournaments/swu.jpeg"
                  alt="swu-event"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSectionTwo;
