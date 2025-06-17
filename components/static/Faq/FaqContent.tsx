import { CustomImage } from '@/components/shared/Image'
import { Button } from '@/components/ui/button'
import Mouse from '@/public/Mouse.svg'
import { RevealAnimation } from '@/components/shared/RevealAnitaion'

export const FaqContent = () => {
  return (
    <div className='flex flex-col xl:justify-start justify-center xl:items-start items-center xl:gap-16 gap-8 z-20 md:w-[30%] w-full xl:sticky xl:top-8 xl:self-start'>
      <RevealAnimation direction='left'>
        <h1 className='text-white sm:text-[52px] text-[40px] leading-[54px] sm:leading-[60px] xl:text-start text-center'>
          FAQs
        </h1>
      </RevealAnimation>

      <RevealAnimation direction='left' delay={0.1}>
        <p className='text-white text-base xl:text-start text-center leading-5 font-medium'>
          Here are some basic questions and answers to help you get started.
        </p>
      </RevealAnimation>

      <RevealAnimation direction='left' delay={0.2}>
        <div>
          <p className='text-white text-base xl:text-start text-center leading-5 font-medium mb-4'>
            Get Revve on your phone
          </p>
          <Button className='rounded-[12px] w-full max-w-[160px] sm:max-w-[186px] h-[44px] sm:h-[48px] bg-white hover:bg-white/10 border-2 border-white text-[14px] sm:text-[16px] font-[700] leading-[24px] text-black transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent mx-auto md:mx-0'>
            Coming Soon
          </Button>
        </div>
      </RevealAnimation>

      <RevealAnimation direction='left' delay={0.3}>
        <div className='flex items-start gap-3'>
          <CustomImage
            src={Mouse}
            style='w-[16px] h-[20px]'
            imgStyle='object-none'
          />
          <p className='text-white/40 text-base xl:w-[60%] w-auto xl:text-start text-center leading-5 font-medium'>
            Point your mouse cursor here to continue scrolling
          </p>
        </div>
      </RevealAnimation>
    </div>
  )
}
