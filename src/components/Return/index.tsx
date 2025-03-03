'use client'
import useStore from "@/lib/zustand";
import { useEffect } from "react";

const Return = ({customerEmail}) => { 
    const { items, clearPersistedState } = useStore();

    if (items.length) clearPersistedState();

    return (
      <div className="container py-8 md:p-8">
        <section id="success">
            <p>
                We appreciate your business! A confirmation email will be sent to{' '}
            {customerEmail}. If you have any questions, please email{' '}
            </p>
            <a href="mailto:simonvtcg@gmail.com">simonvtcg@gmail.com</a>.
        </section>
      </div>
    )
}

export default Return;