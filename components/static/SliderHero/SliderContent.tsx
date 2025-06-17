import { Text } from '@/components/shared/Text'
import { ArrowLeft, ArrowRight } from '@/svg'
import { Button } from '@/components/ui/button'
import { SlideData } from '@/lib/constants/slideData'
import { LightBgMockup } from './LightBgMockup'
import { CountrySlide } from './CountrySlide'
import { RevealAnimation } from '@/components/shared/RevealAnitaion'

interface SliderContentProps {
  slide: SlideData
}

const RIGHT_SLIDE_COUNTRIES = ['Nigeria', 'Ghana', 'Ghana', 'Nigeria']
const LEFT_SLIDE_COUNTRIES = ['Canada', 'Canada', 'Nigeria', 'Nigeria']
const ARROW_RIGHT_SLIDE = Array(4).fill(<ArrowRight />)
const ARROW_LEFT_SLIDE = Array(4).fill(<ArrowLeft />)

export const SliderContent = ({ slide }: SliderContentProps) => {
  return (
    <section className='md:px-3 px-0 flex lg:flex-row flex-col-reverse items-center lg:items-end justify-center lg:justify-between gap-[4rem] mt-4 md:mt-16 flex-1'>
      {/* Left Content Column */}
      <div
        className='lg:flex hidden flex-col gap-2 md:gap-4 pb-4 md:pb-8 flex-1 text-center md:text-left md:pt-16'
        aria-labelledby='left-country-section'
      >
        <RevealAnimation direction='left'>
          <CountrySlide slide={LEFT_SLIDE_COUNTRIES} isCountryText />
        </RevealAnimation>

        <RevealAnimation direction='left' delay={0.1}>
          <div className='w-[4.5rem]'>
            <CountrySlide
              isVertical={false}
              slide={ARROW_RIGHT_SLIDE}
              rtl={true}
            />
          </div>
        </RevealAnimation>

        <RevealAnimation direction='left' delay={0.2}>
          <Text className='w-[80%] mt-24 text-[14px] md:text-[16px] leading-[20px] font-[500] text-white max-w-md'>
            {slide.description}
          </Text>
        </RevealAnimation>
      </div>

      {/* Center Mockup */}
      <RevealAnimation direction='up' delay={0.1} className='sm:w-fit w-full'>
        <LightBgMockup slide={slide} />
      </RevealAnimation>

      {/* Right Content Column */}
      <div
        className='lg:flex hidden flex-col justify-end gap-2 items-end md:gap-4 pb-4 md:pb-8 flex-1 text-center md:text-left md:pt-16'
        aria-labelledby='right-country-section'
      >
        <RevealAnimation direction='right'>
          <div className='w-fit'>
            <CountrySlide slide={RIGHT_SLIDE_COUNTRIES} isCountryText />
          </div>
        </RevealAnimation>

        <RevealAnimation direction='right' delay={0.1} className='w-fit'>
          <div className='w-[4.5rem]'>
            <CountrySlide isVertical={false} slide={ARROW_LEFT_SLIDE} />
          </div>
        </RevealAnimation>

        <RevealAnimation direction='right' delay={0.2}>
          <Text className='mt-24 text-[16px] opacity-[0.5] text-white max-w-md'>
            Get Revve on your phone
          </Text>
        </RevealAnimation>

        <RevealAnimation direction='right' delay={0.3}>
          <Button
            className='rounded-[12px] w-full max-w-[160px] sm:max-w-[186px] h-[44px] sm:h-[48px] bg-transparent hover:bg-white/10 border-2 border-white text-[14px] sm:text-[16px] font-[700] leading-[24px] text-white transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent mx-auto md:mx-0'
            aria-label='Download Revve mobile app'
          >
            Download the app
          </Button>
        </RevealAnimation>
      </div>
    </section>
  )
}
