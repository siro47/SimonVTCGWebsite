import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

import Checkout from "@/components/Products/Checkout";

export const metadata: Metadata = {
    title: "Checkout Page | SimonV TCG",
    description: "This is Checkout Page for SimonV TCG Webpage",
};

const CheckoutPage = () => {
    return (
      <>
        <Breadcrumb
          pageName="Checkout"
          description="Checkout en SimonV TCG"
        />
        <Checkout></Checkout>
      </>
    );
  };
  
  export default CheckoutPage;