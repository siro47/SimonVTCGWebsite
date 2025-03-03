import { NextRequest } from 'next/server'
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const section = searchParams.get('section')
    const products = await stripe.products.list(); // returns all customers sorted by createdDate
    products.data = products.data.filter(product => product.metadata.Section === section);
    for (const product of products.data) {
      // Improve with parallel requests
      const prices = await stripe.prices.list({ product: product.id });
      product.metadata.prices = prices;
    }
    return Response.json(products);
  }