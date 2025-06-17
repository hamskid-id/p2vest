import { MaxScreenWrapper } from '@/components/shared/MaxScreen'
import { FooterContent } from './FooterContent'
import { FooterForm } from './FooterForm'
import Call from '@/public/YellowCall.svg'
import Mail from '@/public/GreenMessage.svg'
import Chat from '@/public/Chat.svg'
import { CustomImage } from '@/components/shared/Image'
import { RevealAnimation } from '@/components/shared/RevealAnitaion'

export const Footer = () => {
  return (
    <MaxScreenWrapper className='md:pb-[20rem] pb-6 relative bg-[#4F0072] sm:px-8 lg:px-14 px-4 sm:py-8 lg:pt-[4rem] pt-6'>
      <RevealAnimation
        direction='right'
        className='absolute bottom-[10rem] right-[0]'
      >
        <CustomImage
          src={Call}
          style='lg:w-[288px] lg:h-[286px] w-[150px] h-[160px]'
          imgStyle='object-contain'
        />
      </RevealAnimation>

      <RevealAnimation
        direction='left'
        className='absolute bottom-[5rem] left-[0]'
      >
        <CustomImage
          src={Mail}
          style='w-[160px] h-[238px]'
          imgStyle='object-contain'
        />
      </RevealAnimation>

      <RevealAnimation
        direction='down'
        className='absolute bottom-[30rem] right-[0] lg:z-30 z-10'
      >
        <CustomImage
          src={Chat}
          style='w-[210px] h-[204px]'
          imgStyle='object-contain'
        />
      </RevealAnimation>

      <div className='grid lg:grid-cols-2 grid-cols-1 rounded-[32px] bg-[#6D1F8F66] backdrop-blur-lg flex-wrap gap-8 lg:gap-24 lg:justify-between justify-center items-center h-full md:p-24 p-4 z-20 relative'>
        <FooterContent />

        <RevealAnimation direction='right' delay={0.2} className='w-full'>
          <FooterForm />
        </RevealAnimation>
      </div>
    </MaxScreenWrapper>
  )
}
