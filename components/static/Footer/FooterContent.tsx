import { CustomImage } from '@/components/shared/Image'
import Call from '@/public/CallSvg.svg'
import Mail from '@/public/MailSvg.svg'
import Location from '@/public/LocationSvg.svg'
import { RevealAnimation } from '@/components/shared/RevealAnitaion'

export const FooterContent = () => {
  return (
    <div className='flex flex-col lg:justify-between justify-center lg:items-start items-center lg:gap-16 gap-8 z-20 w-full lg:sticky lg:top-8 lg:self-start h-full'>
      <RevealAnimation direction='left'>
        <h1 className='text-white sm:text-[52px] text-[40px] leading-[54px] sm:leading-[60px] lg:text-start text-center'>
          Get in Touch
        </h1>
      </RevealAnimation>

      <div>
        <RevealAnimation direction='left' delay={0.1}>
          <p className='text-white text-base lg:text-start text-center leading-5 font-medium mb-12 lg:w-[60%] w-full'>
            {`Do you have any questions or feedback? We'd love to hear from you.`}
          </p>
        </RevealAnimation>

        <div className='flex flex-col gap-6 lg:justify-between justify-center lg:items-start items-center'>
          <RevealAnimation direction='left' delay={0.2}>
            <div className='flex items-start gap-3'>
              <CustomImage
                src={Call}
                style='w-[16px] h-[16px]'
                imgStyle='object-none'
              />
              <p className='text-white text-base lg:text-start text-center leading-5 font-medium'>
                +1(343)338-5190
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation direction='left' delay={0.3}>
            <div className='flex items-start gap-3'>
              <CustomImage
                src={Mail}
                style='w-[16px] h-[13px]'
                imgStyle='object-none'
              />
              <p className='text-white text-base lg:text-start text-center leading-5 font-medium'>
                hello@revveme.com
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation direction='left' delay={0.4}>
            <div className='flex items-start gap-3'>
              <CustomImage
                src={Location}
                style='w-[16px] h-[16px]'
                imgStyle='object-none'
              />
              <p className='text-white text-base lg:text-start text-center leading-5 font-medium'>
                2482 Yonge St Toronto ON M4P 2H5
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </div>
  )
}
