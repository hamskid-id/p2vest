'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Mousewheel } from 'swiper/modules'
import React from 'react'
import { Text } from '@/components/shared/Text'
import { useGlobalSwiper } from '@/lib/context'

interface ICountrySlide {
  slide: string[] | React.ReactNode[]
  isVertical?: boolean
  isCountryText?: boolean
  rtl?: boolean
}

export const CountrySlide: React.FC<ICountrySlide> = ({
  slide,
  isVertical = true,
  isCountryText = false,
  rtl = false,
}) => {
  const { setSwiperRef } = useGlobalSwiper()
  const processedSlides = rtl ? [...slide].reverse() : slide
  
  return (
    <div className='relative comingswiper'>
      <Swiper
        {...(rtl && { rtl: true })}
        direction={isVertical ? 'vertical' : 'horizontal'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          reverseDirection: rtl,
        }}
        slidesPerView={'auto'}
        autoHeight={true}
        loop={true}
        mousewheel={true}
        speed={2500}
        modules={[Autoplay, Mousewheel]}
        onSwiper={setSwiperRef}
        className='mySwiper'
      >
        {processedSlides.map((info, index) => (
          <SwiperSlide key={index}>
            {isCountryText ? (
              <Text className='text-[32px] md:text-[44px] text-white font-semibold'>
                {info}
              </Text>
            ) : (
              info
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}