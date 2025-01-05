'use client'
import { redirect, usePathname } from 'next/navigation'

export default function Page() {
    const pathname = usePathname();
    const game = pathname.split('/').at(-1);
    redirect(`https://www.cardmarket.com/es/${game}/Users/SimonVtcg`)
  }