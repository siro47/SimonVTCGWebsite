import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page | SimonV TCG",
  description: "This is Services Page for SimonV TCG Webpage",
};

const ProductsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Servicios"
        description="Consigue lo que necesites de tu TCG Favorito"
      />
      <Services></Services>
    </>
  );
};

export default ProductsPage;
