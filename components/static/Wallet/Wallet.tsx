import { CustomImage } from '@/components/shared/Image'
import { Text } from '@/components/shared/Text'
import USD from '@/public/WalletUsd.svg'
import CAD from '@/public/WalletCad.svg'
import GHA from '@/public/WalletCFA.svg'
import NGN from '@/public/WalletNgn.svg'
import Iphone from '@/public/Iphone.svg'
import girl from '@/public/Girl.svg'
import { MaxScreenWrapper } from '@/components/shared/MaxScreen'
import { RevealAnimation } from '@/components/shared/RevealAnitaion'

export const Wallet = () => {
  return (
    <MaxScreenWrapper className='flex xl:flex-nowrap flex-wrap gap-8 items-end justify-center sm:px-12 px-3 sm:pt-8 md:pt-[8rem] pt-6'>

      <div className='xl:pb-[12rem] pb-0 flex flex-col gap-8 max-w-xl'>
        <RevealAnimation direction='left' className='w-full'>
          <h1 className='sm:text-[52px] text-[40px] leading-[54px] sm:leading-[60px] xl:text-start text-center'>
            Multi-currency Wallets
          </h1>
        </RevealAnimation>
        <div className='space-y-4'>
          <RevealAnimation direction='left' className='w-full' delay={0.2}>
            <Text
              as='p'
              className='text-base xl:text-start text-center leading-5 font-medium'
            >
              Facilitate effortless management of multiple wallets, each
              dedicated to a specific currency, streamlining transactions and
              storage across various currencies.
            </Text>
          </RevealAnimation>
          <RevealAnimation direction='left' className='w-full' delay={0.3}>
            <Text
              as='p'
              className='text-base xl:text-start text-center leading-5 font-medium'
            >
              Enhance user experience with tailored wallets for different
              currencies, empowering efficient financial management and
              flexibility in global transactions.
            </Text>
          </RevealAnimation>
        </div>
      </div>

      <div className='relative h-[900px] flex flex-col sm:w-[400px] w-full'>
        <div className='absolute backdrop-blur-2xl p-0 rounded-lg z-10 sm:w-[328px] w-[75%] left-1/2 -translate-x-1/2 bottom-[20%]'>
          <div className='space-y-3'>
            {[NGN, GHA, CAD, USD].map((currency, index) => (
              <RevealAnimation
                key={index}
                direction='down'
                delay={0.5 + index * 0.1}
                className='w-full'
              >
                <CustomImage
                  src={currency}
                  priority
                  style='w-full h-[170px] rounded-xl'
                  imgStyle='object-contain'
                />
              </RevealAnimation>
            ))}
          </div>
        </div>
        <RevealAnimation
          direction='down'
          delay={0.5}
          className='sm:w-fit w-full mt-auto mb-0 mx-auto'
        >
          <CustomImage
            src={Iphone}
            priority
            style=' sm:w-[400px] w-full h-[700px]'
            imgStyle='sm:object-none object-contain'
          />
        </RevealAnimation>
      </div>

      <div className='xl:flex-1 flex justify-end'>
        <RevealAnimation direction='right' delay={0.2} className='w-fit'>
          <CustomImage
            priority
            src={girl}
            style='md:h-[500px] h-[400px] md:w-[414px] w-[310px]'
            imgStyle='md:object-none object-contain'
          />
        </RevealAnimation>
      </div>
    </MaxScreenWrapper>
  )
}
