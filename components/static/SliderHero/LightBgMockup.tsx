import { CustomImage } from '@/components/shared/Image'
import { SlideData } from '@/lib/constants/slideData'
import { CountrySlide } from './CountrySlide'
import SliderACurrency from '@/public/+C$750.svg'
import CanadaCountry from '@/public/CanadaCountry.svg'
import SliderBCurrency from '@/public/+₵3,920.svg'
import GhanaCountry from '@/public/GhanaCountry.svg'
import NigeriaCountry from '@/public/NigeriaCountry.svg'
import SliderCCurrency from '@/public/-₦98,000.svg'
import SliderDCurrency from '@/public/-₦17,000.svg'

interface ILightBgMockup {
  slide: SlideData
}

const FirstSlideMiddleTop = () => (
  <div className='flex items-center justify-between'>
    <CustomImage src={CanadaCountry} style='w-[52px] h-[52px]' />
    <CustomImage src={SliderACurrency} style='w-[181px] h-[73px]' />
  </div>
)

const SecondSlideMiddleTop = () => (
  <div className='flex items-center justify-between'>
    <CustomImage src={SliderBCurrency} style='w-[181px] h-[73px]' />
    <CustomImage src={GhanaCountry} style='w-[52px] h-[52px]' />
  </div>
)

const ThirdSlideMiddleTop = () => (
  <div className='flex items-center justify-between'>
    <CustomImage src={NigeriaCountry} style='w-[52px] h-[52px]' />
    <CustomImage src={SliderCCurrency} style='w-[181px] h-[73px]' />
  </div>
)

const ForthSlideMiddleTop = () => (
  <div className='flex items-center justify-between'>
    <CustomImage src={SliderDCurrency} style='w-[181px] h-[73px]' />
    <CustomImage src={NigeriaCountry} style='w-[52px] h-[52px]' />
  </div>
)

export const LightBgMockup = ({ slide }: ILightBgMockup) => {
  return (
    <div className='flex-shrink-0 relative self-center w-full sm:w-[420px] h-[466px] sm:h-[533px] md:h-[560px] lg:h-[592px]'>
      <div className='absolute inset-0 bg-white/1 rounded-t-[42px] backdrop-brightness-200'></div>
      <div className='relative z-10 w-full h-full border-x-[6px] border-t-[6px] border-white rounded-t-[42px] bg-transparent overflow-hidden'>
        <div className='z-[50] absolute top-[35%] left-[1.5rem] right-[1.5rem] h-[84px]'>
          <CountrySlide
            isVertical={false}
            slide={[
              <FirstSlideMiddleTop key={1} />,
              <SecondSlideMiddleTop key={2} />,
              <ThirdSlideMiddleTop key={3} />,
              <ForthSlideMiddleTop key={4} />,
            ]}
          />
        </div>
        <div className='backdrop-blur-md rounded-[16px] sm:h-[84px] h-[54px] z-50 absolute sm:left-[1.5rem] left-[1rem] sm:right-[1.5rem] right-[1rem] bottom-[1rem] sm:bottom-[3rem]'>
          <CustomImage
            style='h-full w-full rounded-[16px]'
            src={slide.transactionImage}
            imgStyle='object-cover rounded-[16px]'
            alt='Transaction details'
          />
        </div>
      </div>
    </div>
  )
}
