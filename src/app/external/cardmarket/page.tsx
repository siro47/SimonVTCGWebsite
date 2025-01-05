'use client'
import { Suspense } from 'react'
import { redirect, useSearchParams } from 'next/navigation'

const RedirectComp = () => {
  const searchParams = useSearchParams()
  const game = searchParams.get('game');
  redirect(`https://www.cardmarket.com/es/${game}/Users/SimonVtcg`)
}

const ExternalPage = () => {
  return (
    <Suspense>
      <RedirectComp/>
    </Suspense>
  )
};
  
export default ExternalPage;