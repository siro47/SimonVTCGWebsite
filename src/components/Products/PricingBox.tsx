import useStore from "@/lib/zustand";
import { useEffect, useState } from "react";

const PricingBox = (props: {
    title: string;
    priceId?: string;
    price?: string;
    desc: string;
    image: string;
    text: string;
    stock?: number;
    link?: string;
    children: React.ReactNode;
  }) => {
    const { title, price, priceId, stock, desc, text, image, link } = props;
    const { items, increase, clearPersistedState } = useStore() as any;
    // clearPersistedState();
    console.log(priceId)
    const [available, setAvailable] = useState(true);

    const formattedPrice = (price) => new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(price / 100);

    useEffect(() => {
      const itemsInCart = items.find(i => i.key === priceId)?.count ?? 0;
      if (stock != null) setAvailable(itemsInCart < stock)
    }, [items])
    
    return (
      <div className="w-full h-full opacity-0 animate-fadeInDown">
        <div className="relative h-full z-10 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
          <h3 className="price mb-2 text-[32px] font-bold text-black dark:text-white">
            {title}
          </h3>
          <p className="text-base text-body-color">{desc}</p>
          <div className="flex justify-center">
            <img src={image} className={`object-contain h-[300px] pt-10 hover:scale-125`}></img>
          </div>
          {
          price && <div className="text-end p-4">
            <span className="text-[32px] font-black shadow-lg [text-shadow:_4px_4px_rgb(0_84_143)]">{formattedPrice(price)}</span>
          </div>
          }
          <div className="self-end border-t border-body-color border-opacity-10 pt-8 dark:border-white dark:border-opacity-10">
            {
              !link && 
              <a target="_blank">
                <button onClick={() => increase(priceId)} disabled={!available} className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp disabled:bg-gray-400">
                  {available ? text: 'No puedes añadir más'}
                </button>
              </a>
            }
            {
              link &&
              <a target="_blank" href={link}>
                <button className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                  {text}
                </button>
              </a>
            }
          </div>
          <div className="absolute bottom-0 right-0 z-[-1]">
            <svg
              width="179"
              height="158"
              viewBox="0 0 179 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                fill="url(#paint0_linear_70:153)"
              />
              <path
                opacity="0.3"
                d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                fill="url(#paint1_linear_70:153)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_70:153"
                  x1="69.6694"
                  y1="29.9033"
                  x2="196.108"
                  y2="83.2919"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_70:153"
                  x1="165.348"
                  y1="-75.4466"
                  x2="-3.75136"
                  y2="103.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
  export default PricingBox;
  