import { redirect } from 'next/navigation'

import { stripe } from '../../lib/stripe'

import Breadcrumb from "@/components/Common/Breadcrumb";
import Return from "@/components/Return";

import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Payment Finished Page | SimonV TCG",
    description: "This is Payment Finished Page for SimonV TCG Webpage",
};

const ReturnPage = async ({ searchParams }) => {
    const { session_id } = await searchParams

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const session = await stripe.checkout.sessions.retrieve(session_id, {
          expand: ['line_items', 'payment_intent']
      })
    const status = session.status
    const customerEmail = session.customer_details?.email

    if (status === 'open') {
        return redirect('/')
    }

    return (
      <>
        <Breadcrumb
          pageName="Compra realizada"
          description="Compra realizada en SimonV TCG"
        />
        <Return customerEmail={customerEmail}></Return>
      </>
    );
  };
  
  export default ReturnPage;