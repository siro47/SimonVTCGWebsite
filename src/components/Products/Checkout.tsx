'use client'

import { useEffect, useState } from "react";
import {
    EmbeddedCheckout,
    EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import useStore from "@/lib/zustand";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const Checkout = () => {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const { items } = useStore();

    useEffect(() => {
        if (!items.length) return;
        async function createCheckoutSession() {
          const response = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              line_items: items.map(i => ({price: i.key, quantity: i.count}))
            }),
          });
    
          const data = await response.json();
          setClientSecret(data.clientSecret);
        }
    
        createCheckoutSession();
      }, [items]);

      return (
        <div id="checkout" className="container">
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
        >
            <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
        </div>
    );
  };
  
  export default Checkout;