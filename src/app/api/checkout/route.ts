'use server'

import { NextRequest, NextResponse } from "next/server";
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'

export async function POST(req: NextRequest, res: NextResponse) {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const body = await req.json();
    const line_items = body.line_items;

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items,
    mode: 'payment',
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  })
    return Response.json({clientSecret: session.client_secret})
}