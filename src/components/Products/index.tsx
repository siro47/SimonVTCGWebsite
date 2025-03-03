"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Brands from "@/components/Brands";

import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import brandsData from "../Brands/brandsData";

const Products = ({params}) => {
  const [products, setProducts] = useState([]);

  const { id } = params ?? {};
  const router = useRouter();

  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    async function getProducts() {
      if (!id) return;
      const brand = brandsData.find(b => b.name === id)
      if (!brand) return;
      const url = `/api/products?section=${brand.key}`;
      const headers = {'Content-Type': 'application/json'};
      const res = await fetch(url, {headers});
      const jsonRes = await res.json()

      setProducts(jsonRes.data);
    }
    getProducts();
  }, [id])

  const handleClick = (section) => {
    router.push(`/products/${section}`)
  }
  
  return (
    <>
    <Brands onClick={handleClick} />
    <section id="pricing" className="relative z-10 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 items-center">
          {
            products.map((product: any) =>  
                <PricingBox
                  key={product.name}
                  title={product.name}
                  priceId={product.default_price}
                  price={product.metadata.prices.data[0].unit_amount}
                  desc={product.description}
                  image={product.images[0]}
                  stock={product.metadata.Stock}
                  text="Añadir a carrito">
                  <OfferList text="All UI Components" status="active" />
                </PricingBox>)
          }
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
    </>
  );
};

export default Products;
