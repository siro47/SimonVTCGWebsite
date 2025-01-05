import { redirect } from 'next/navigation'

const ExternalPage = () => {
    return(
      <>
        <section className="relative z-10 py-16 md:py-20 lg:py-28">
          <div className="container flex justify-center mt-16">
            <div> <p>Redireccionando al sitio web...</p> </div>
          </div>
        </section>
      {redirect('http://chat.whatsapp.com/JWrJAkUXPNi11hsGbgNFx0')}
    </>)
};
  
export default ExternalPage;