'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { CustomImage } from '@/components/shared/Image'
import Brand from '@/public/brand.svg'
import { SliderHeader } from './SliderHeader'
import { SliderContent } from './SliderContent'
import { slides } from '@/lib/constants/slideData'
import { MaxScreenWrapper } from '@/components/shared/MaxScreen'
import { useGlobalSwiper } from '@/lib/context'

export const SliderHero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { setSwiperRef, swiperRef } = useGlobalSwiper()

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }

  const goToSlide = (index: number) => {
    if (swiperRef) {
      swiperRef.slideTo(index)
    }
  }

  const goToPrevious = () => {
    if (swiperRef) {
      swiperRef.slidePrev()
    }
  }

  const goToNext = () => {
    if (swiperRef) {
      swiperRef.slideNext()
    }
  }

  return (
    <MaxScreenWrapper className='relative'>
      <Swiper
        modules={[EffectFade, Navigation, Autoplay]}
        effect='fade'
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 3900,
          disableOnInteraction: false,
        }}
        speed={2500}
        loop={true}
        onSwiper={setSwiperRef}
        onSlideChange={handleSlideChange}
        className='h-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='relative h-full'>
              <CustomImage
                src={slide.bgImage}
                alt={`Revve remittance service background ${index + 1}`}
                style='absolute inset-0 w-full h-full'
                imgStyle='object-center object-cover'
                priority={index === 0}
              />

              <div className='relative z-20 h-full flex flex-col md:px-[4.5rem]'>
                <SliderHeader
                  brandSrc={Brand}
                  onPrevious={goToPrevious}
                  onNext={goToNext}
                  activeIndex={activeIndex}
                  totalSlides={slides.length}
                  onSlideSelect={goToSlide}
                />
                <SliderContent slide={slide} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </MaxScreenWrapper>
  )
}
