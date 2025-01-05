'use client'
import { Suspense } from 'react'
import { redirect, useSearchParams } from 'next/navigation'

const FallbackComp = () => {
    return (
      <section id="loading" className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          Redireccionando...
        </div>
      </section>
    )
} 

const RedirectComp = () => {
  const searchParams = useSearchParams()
  const game = searchParams.get('game');
  redirect(`https://www.cardmarket.com/es/${game}/Users/SimonVtcg`)
}

const ExternalPage = () => {
  return (
    <Suspense fallback={<FallbackComp/>}>
      <RedirectComp/>
    </Suspense>
  )
};
  
export default ExternalPage;