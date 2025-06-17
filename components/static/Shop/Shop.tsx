import { CustomImage } from '@/components/shared/Image'
import Rectangle24 from '@/public/Rectangle 24.svg'
import Rectangle25 from '@/public/Rectangle 25.svg'
import Rectangle28 from '@/public/Rectangle 28.svg'
import Rectangle33 from '@/public/Rectangle 33.svg'
import Rectangle38 from '@/public/Rectangle 38.svg'
import Rectangle48 from '@/public/Rectangle 48.svg'
import Rectangle49 from '@/public/Rectangle 49.svg'
import Rectangle51 from '@/public/Rectangle 51.svg'
import Frame430 from '@/public/Frame 430.svg'
import Iphone from '@/public/ShopIphone.svg'
import { Button } from '@/components/ui/button'
import { MaxScreenWrapper } from '@/components/shared/MaxScreen'
import { RevealAnimation } from '@/components/shared/RevealAnitaion'

export const Shop = () => {
  return (
    <MaxScreenWrapper className='bg-gray-100 flex xl:flex-nowrap flex-wrap xl:gap-2 gap-8 items-end justify-center sm:py-8 md:py-[8rem] py-6'>

      <div className='xl:pb-[8rem] pb-0 sm:ps-8 md:ps-14 ps-2 flex flex-col xl:justify-start justify-center xl:items-start items-center gap-8'>
        <RevealAnimation direction='left'>
          <h1 className='sm:text-[52px] text-[40px] leading-[54px] sm:leading-[60px] xl:text-start text-center'>
            Shop Online
          </h1>
        </RevealAnimation>

        <div className='flex flex-col xl:justify-start justify-center xl:items-start items-center gap-4'>
          <RevealAnimation direction='left' delay={0.1}>
            <p className='text-base xl:text-start text-center leading-5 font-medium'>
              Experience the world at your fingertips with our seamless online
              shopping platform.
            </p>
          </RevealAnimation>

          <RevealAnimation direction='left' delay={0.2}>
            <p className='text-base xl:text-start text-center leading-5 font-medium'>
              {`From the latest fashion trends to must-have gadgets, shop the
              world's best brands and products from the comfort of your own
              home.`}
            </p>
          </RevealAnimation>

          <RevealAnimation direction='left' delay={0.3}>
            <p className='text-base xl:text-start text-center leading-5 font-medium mt-4'>
              Get Revve on your phone
            </p>
          </RevealAnimation>

          <RevealAnimation direction='left' delay={0.4}>
            <Button className='rounded-[12px] w-full max-w-[160px] sm:max-w-[186px] h-[44px] sm:h-[48px] bg-black text-white hover:bg-white/10 border-2 border-white text-[14px] sm:text-[16px] font-[700] leading-[24px] text-white transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent mx-auto md:mx-0'>
              Download the app
            </Button>
          </RevealAnimation>
        </div>
      </div>

      <div className='xl:mb-[8rem] mb-0 sm:w-[400px] md:w-auto w-full relative h-[700px] flex flex-col sm:px-0 px-3'>
        <RevealAnimation direction='down' delay={0.2}>
          <CustomImage
            src={Iphone}
            style='mx-auto mt-auto mb-0 sm:w-[400px] w-full h-[700px]'
            imgStyle='sm:object-none object-contain rounded-sm'
          />
        </RevealAnimation>
      </div>

      <div className='flex gap-3 items-end justify-between sm:pe-8 md:pe-14 xl:pe-0 pe-2'>
        <div className='flex flex-col gap-3'>
          <RevealAnimation direction='right' delay={0.3}>
            <CustomImage
              src={Rectangle48}
              style='w-[110px] h-[120px]'
              imgStyle='object-none rounded-sm'
            />
          </RevealAnimation>
          <RevealAnimation direction='right' delay={0.4}>
            <CustomImage
              src={Rectangle25}
              style='w-[110px] h-[120px]'
              imgStyle='object-none rounded-sm'
            />
          </RevealAnimation>
          <RevealAnimation direction='right' delay={0.5}>
            <CustomImage
              src={Rectangle33}
              style='w-[110px] h-[120px]'
              imgStyle='object-none rounded-sm'
            />
          </RevealAnimation>
          <RevealAnimation direction='right' delay={0.6}>
            <CustomImage
              src={Rectangle24}
              style='w-[110px] h-[120px]'
              imgStyle='object-none rounded-sm'
            />
          </RevealAnimation>
        </div>

        <div className='flex flex-col pb-[16rem]'>
          <RevealAnimation direction='right' delay={0.4}>
            <CustomImage
              src={Rectangle51}
              style='w-[110px] h-[120px]'
              imgStyle='object-none rounded-sm'
            />
          </RevealAnimation>
          <RevealAnimation direction='right' delay={0.5}>
            <CustomImage
              src={Rectangle38}
              style='w-[110px] h-[256px] mt-[5rem]'
              imgStyle='object-none rounded-sm'
            />
          </RevealAnimation>
        </div>

        <div className='sm:flex hidden flex-col gap-3 pb-[8rem]'>
          <RevealAnimation direction='right' delay={0.5}>
            <CustomImage
              src={Rectangle49}
              style='w-[110px] h-[120px]'
              imgStyle='object-none rounded-sm'
            />
          </RevealAnimation>
          <RevealAnimation direction='right' delay={0.6}>
            <CustomImage
              src={Rectangle28}
              style='w-[240px] h-[256px]'
              imgStyle='object-none rounded-l-sm'
            />
          </RevealAnimation>
          <RevealAnimation direction='right' delay={0.7}>
            <CustomImage
              src={Frame430}
              style='w-[240px] h-[120px]'
              imgStyle='object-none rounded-l-sm'
            />
          </RevealAnimation>
        </div>
      </div>
    </MaxScreenWrapper>
  )
}
