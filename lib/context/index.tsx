'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import type { Swiper as SwiperType } from 'swiper'

interface SwiperContextType {
  swiperRef: SwiperType | null
  setSwiperRef: (swiper: SwiperType | null) => void
}

const SwiperContext = createContext<SwiperContextType | undefined>(undefined)

export const SwiperProvider = ({ children }: { children: ReactNode }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)

  return (
    <SwiperContext.Provider value={{ swiperRef, setSwiperRef }}>
      {children}
    </SwiperContext.Provider>
  )
}

export const useGlobalSwiper = () => {
  const context = useContext(SwiperContext)
  if (context === undefined) {
    throw new Error('useGlobalSwiper must be used within a SwiperProvider')
  }
  return context
}
