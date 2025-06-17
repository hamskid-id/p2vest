'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { CustomImage } from '@/components/shared/Image'
import { Text } from '@/components/shared/Text'
import SandLoading from '@/public/SandLoading.svg'
import { slides } from '@/lib/constants/moneySlideData'
import { MaxScreenWrapper } from '@/components/shared/MaxScreen'
import { RevealAnimation } from '@/components/shared/RevealAnitaion'

export const MoneySlide = () => {
  return (
    <MaxScreenWrapper className='relative'>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect='fade'
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2500}
        className='hero-slider'
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='flex md:flex-row flex-col md:gap-24 gap-8 md:justify-between justify-center'>
              <div className='flex flex-col md:py-12 py-0 md:w-[30%] w-full'>
                {slide.leftImages.map((img, index) => (
                  <RevealAnimation
                    key={index}
                    direction='left'
                    delay={0.2 + index * 0.1}
                    className='mb-4 last:mb-0 w-full'
                  >
                    <CustomImage priority src={img.src} style={img.style} />
                  </RevealAnimation>
                ))}
              </div>

              <div className='flex justify-center items-center flex-col gap-8 py-8'>
                <RevealAnimation direction='down' delay={0.3}>
                  <CustomImage
                    priority
                    src={SandLoading}
                    style='w-[128px] h-[20px]'
                  />
                </RevealAnimation>

                <RevealAnimation direction='down' delay={0.4}>
                  <div className='relative'>
                    <CustomImage
                      src={slide.image}
                      style='sm:w-[424px] w-[310px] h-[493px] sm:rounded-[52px] rounded-[32px]'
                      imgStyle='sm:rounded-[52px] rounded-[32px] object-none'
                      priority={slide.id === 1}
                    />
                    <RevealAnimation direction='down' delay={0.6}>
                      <Text
                        as='p'
                        className='text-white leading-[20px] text-[16px] font-[500] absolute sm:bottom-[2rem] bottom-[1.5rem] sm:left-[2rem] left-[1.5rem] sm:right-[2rem] right-[1.5rem]'
                      >
                        {slide.text}
                      </Text>
                    </RevealAnimation>
                  </div>
                </RevealAnimation>

                <RevealAnimation direction='down' delay={0.5}>
                  <h1 className='sm:text-[52px] text-[40px] leading-[54px] sm:leading-[60px] text-center m-2'>
                    Send and Receive Money
                  </h1>
                </RevealAnimation>
              </div>

              <div className='flex flex-col md:w-[30%] w-full md:py-12 py-0'>
                {slide.rightImages.map((img, index) => (
                  <RevealAnimation
                    key={index}
                    direction='right'
                    delay={0.2 + index * 0.1}
                    className='mb-4 last:mb-0 w-full'
                  >
                    <CustomImage priority src={img.src} style={img.style} />
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </MaxScreenWrapper>
  )
}
