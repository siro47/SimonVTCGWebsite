'use client'
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = ({onClick}) => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[10px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} onClick={onClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand, onClick }: { brand: Brand, onClick: Function }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4">
      <a rel="nofollow noreferrer" className="relative h-28 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100 cursor-pointer">
        <Image src={imageLight} alt={name} width={200} height={100} className="hidden dark:block max-h-24 mx-auto" onClick={() => onClick(brand.name)}/>
      </a>
    </div>
  );
};
