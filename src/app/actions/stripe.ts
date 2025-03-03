'use server'

import { NextApiRequest, NextApiResponse } from "next";
import { headers } from 'next/headers'
import useStore from "@/lib/zustand";

import { stripe } from '../../lib/stripe'

export async function fetchClientSecret(req: NextApiRequest, res: NextApiResponse) {
  const { count } = req.body;

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of
        // the product you want to sell
        price: 'price_1QuiKdRsEyb6ujLEMUllynED',
        quantity: count
      },
      {
        // Provide the exact Price ID (for example, pr_1234) of
        // the product you want to sell
        price: 'price_1QuiOfRsEyb6ujLETicnEMBk',
        quantity: count
      }
    ],
    mode: 'payment',
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  })

  return session.client_secret
}