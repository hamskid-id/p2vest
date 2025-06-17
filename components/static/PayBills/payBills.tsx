import { CustomImage } from '@/components/shared/Image'
import PayBillsBg from '@/public/PayBillsBg.svg'
import Calender from '@/public/Calendar.svg'
import { Button } from '@/components/ui/button'
import { MaxScreenWrapper } from '@/components/shared/MaxScreen'
import { RevealAnimation } from '@/components/shared/RevealAnitaion'

export const PayBills = () => {
  return (
    <MaxScreenWrapper className='md:min-h-[960px] min-h-auto relative bg-gray-100 flex xl:flex-nowrap flex-wrap gap-8 items-center md:justify-between justify-center sm:py-8 sm:px-8 md:px-14 px-2 md:py-0 py-6'>
      <CustomImage
        src={PayBillsBg}
        style='absolute inset-0 w-full'
        imgStyle='object-cover'
        priority
      />

      <div className='flex flex-col xl:justify-start justify-center xl:items-start items-center gap-8 z-20 md:w-[30%] w-full'>
        <RevealAnimation direction='left'>
          <h1 className='text-white sm:text-[52px] text-[40px] leading-[54px] sm:leading-[60px] xl:text-start text-center'>
            Pay Bills
          </h1>
        </RevealAnimation>

        <RevealAnimation direction='left' delay={0.1}>
          <p className='text-white text-base xl:text-start text-center leading-5 font-medium mb-12'>
            Say goodbye to long queues and endless processes—our platform offers
            a seamless solution for paying bills instantly without any hiccups.
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
      </div>

      <RevealAnimation
        direction='right'
        className='md:mt-[8rem] mt-0 sm:w-auto w-full'
      >
        <CustomImage
          src={Calender}
          style='sm:w-[340px] w-full h-[368px]'
          imgStyle='sm:object-none object-contain'
        />
      </RevealAnimation>
    </MaxScreenWrapper>
  )
}
