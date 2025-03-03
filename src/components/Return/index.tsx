'use client'
import useStore from "@/lib/zustand";
import { useEffect } from "react";

const Return = ({customerEmail}) => { 
    const { items, clearPersistedState } = useStore() as any;

    if (items.length) clearPersistedState();

    return (
      <div className="container py-8 md:p-8">
        <section id="success">
            <p>
                ¡Tu compra se ha realizado con éxito! Recibirás un email de confirmación en {' '}
            {customerEmail}. Si tienes alguna pregunta, no dudes en contactarnos en {' '}
            </p>
            <a href="mailto:simonvtcg@gmail.com">simonvtcg@gmail.com</a>.
        </section>
      </div>
    )
}

export default Return;