'use client'
import { Suspense } from 'react'
import { redirect, useSearchParams } from 'next/navigation'

const FallbackComp = () => {
    return (
      <section id="loading" className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container flex justify-center">
          <div><p>Redireccionando al sitio...</p></div>
        </div>
      </section>
    )
} 

const RedirectComp = () => {
  const searchParams = useSearchParams()
  const game = searchParams.get('game');
  return (
    <section id="loading" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container flex justify-center mt-16">
          <div> <p>Redireccionando al sitio web...</p> </div>
        {
          redirect(`https://www.cardmarket.com/es/${game}/Users/SimonVtcg`)
        }
      </div>
    </section>
  )
}

const ExternalPage = () => {
  return (
    <Suspense fallback={<FallbackComp/>}>
      <RedirectComp/>
    </Suspense>
  )
};
  
export default ExternalPage;