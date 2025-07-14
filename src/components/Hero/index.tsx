import Link from "next/link";
import ImageSlider from './ImageSlider';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-0 pt-[120px] dark:bg-gray-dark md:pt-[150px] xl:pt-[120px] 2xl:pt-[120px]"
      >
        <ImageSlider />
        <div className="relative -top-[400px] -mb-[200px] md:-mb-[100px] z-10 flex flex-row">
          <div className="w-10 sm:w-1/6 md:w-1/4"></div>
          <div className="sm:w-2/3 md:w-1/2">
            <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              Torneo Altered - World Championship Qualifier Spain 2025
            </h1>
            <p className="mb-8 text-xl leading-tight">
              Inscríbete al clasificatorio para los mundiales de 2025
              <br/>
              Viaje + alojamiento pagado a los mundiales para el ganador
            </p>
            <a href="https://bclever.ai/eventos/barcelona/infrefest-2025" target="_blank">
              <button className="w-[200px] px-8 py-4 rounded-sm text-base text-white dark:bg-secondary">
                Apúntate
              </button>
            </a>
          </div>
          <div className="w-10 sm:w-1/6 md:w-1/4"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
