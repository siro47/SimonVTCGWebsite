import Breadcrumb from "@/components/Common/Breadcrumb";
import Products from "@/components/Products";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Page | SimonV TCG",
  description: "This is Products Page for SimonV TCG Webpage",
  // other metadata
};

const ProductsPage = ({params}) => {
  return (
    <>
      <Breadcrumb
        pageName="Productos"
        description="Consigue lo que necesites de tu TCG Favorito"
      />
      <Products params={params}></Products>
    </>
  );
};

export default ProductsPage;
