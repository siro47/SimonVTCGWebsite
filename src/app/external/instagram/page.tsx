'use client'
import { redirect } from 'next/navigation'

const FallbackComp = () => {
    return (
      <section id="loading" className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          Redireccionando...
        </div>
      </section>
    )
} 

const ExternalPage = () => {
  redirect('https://www.instagram.com/simonvtcg/profilecard');
};
  
export default ExternalPage;