'use client'
import { redirect, useSearchParams } from 'next/navigation'

const ExternalPage = () => {
  const searchParams = useSearchParams()
  const game = searchParams.get('game');
  redirect(`https://www.cardmarket.com/es/${game}/Users/SimonVtcg`);
};
  
export default ExternalPage;