'use client'

import { useEffect, useState } from 'react'
import AnimatedBrandLoader from '@/components/shared/Loader'
import { SliderHero } from './SliderHero/SliderHero'
import { Shop } from './Shop/Shop'
import { MoneySlide } from './MoneySlide/MoneySlide'
import { Wallet } from './Wallet/Wallet'
import { PayBills } from './PayBills/payBills'
import { Faq } from './Faq/Faq'
import { Footer } from './Footer/Footer'
import { FooterLinks } from './Footer/FooterLinks'

export const StaticPages = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  if (isLoading) return <AnimatedBrandLoader />

  return (
    <main>
      <SliderHero />
      <MoneySlide />
      <Wallet />
      <Shop />
      <PayBills />
      <Faq />
      <Footer />
      <FooterLinks/>
    </main>
  )
}
