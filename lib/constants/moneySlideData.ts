import Hero2SliderA from '@/public/Hero2SliderA.svg'
import Hero2SliderB from '@/public/Hero2SliderB.svg'
import Hero2SliderC from '@/public/Hero2SliderC.svg'
import Hero2SliderD from '@/public/Hero2SliderD.svg'
import Eating from '@/public/Eating.svg'
import Eating1 from '@/public/Eating (1).svg'
import Eating2 from '@/public/Eating (2).svg'
import Eating3 from '@/public/Eating (3).svg'
import Shopping from '@/public/Shopping.svg'
import Shopping1 from '@/public/Shopping (1).svg'
import Shopping2 from '@/public/Shopping (2).svg'
import Shopping3 from '@/public/Shopping (3).svg'
import PaperPlane from '@/public/Paper Plane.svg'
import Currency from '@/public/Currency.svg'
import Se from '@/public/se.svg'
import Nd from '@/public/nd.svg'

export const slides = [
  {
    id: 1,
    image: Hero2SliderA,
    leftImages: [
      { src: Nd, style: 'w-[76px] h-[150px]' },
      { src: Currency, style: 'w-[152px] h-[150px] ms-auto' },
      { src: Shopping, style: 'w-[191px] h-[280px] mt-auto' },
    ],
    rightImages: [
      { src: Eating, style: 'w-[191px] h-[200px] ms-auto mr-14' },
      { src: PaperPlane, style: 'w-[152px] h-[152px] md:mt-[6rem] mt-8' },
      { src: Se, style: 'w-[76px] h-[150px] mt-auto ms-auto' },
    ],
    text: 'Seamlessly bridge distances with our effortless remittance service. Send support, and financial care to your loved ones back home.',
  },
  {
    id: 2,
    image: Hero2SliderB,
    leftImages: [
      { src: Nd, style: 'w-[76px] h-[150px]' },
      { src: Currency, style: 'w-[152px] h-[150px] ms-auto' },
      { src: Shopping1, style: 'w-[191px] h-[280px] mt-auto' },
    ],
    rightImages: [
      { src: Eating1, style: 'w-[191px] h-[200px] ms-auto mr-14' },
      { src: PaperPlane, style: 'w-[152px] h-[152px] md:mt-[6rem] mt-8' },
      { src: Se, style: 'w-[76px] h-[150px] mt-auto ms-auto' },
    ],
    text: 'Experience secure and fast money transfers with our advanced technology. Your funds reach their destination safely and quickly.',
  },
  {
    id: 3,
    image: Hero2SliderC,
    leftImages: [
      { src: Nd, style: 'w-[76px] h-[150px]' },
      { src: Currency, style: 'w-[152px] h-[150px] ms-auto' },
      { src: Shopping2, style: 'w-[191px] h-[280px] mt-auto' },
    ],
    rightImages: [
      { src: Eating2, style: 'w-[191px] h-[200px] ms-auto mr-14' },
      { src: PaperPlane, style: 'w-[152px] h-[152px] md:mt-[6rem] mt-8' },
      { src: Se, style: 'w-[76px] h-[150px] mt-auto ms-auto' },
    ],
    text: 'Connect with family across borders through reliable financial services. Making international money transfers simple and affordable.',
  },
  {
    id: 4,
    image: Hero2SliderD,
    leftImages: [
      { src: Nd, style: 'w-[76px] h-[150px]' },
      { src: Currency, style: 'w-[152px] h-[150px] ms-auto' },
      { src: Shopping3, style: 'w-[191px] h-[280px] mt-auto' },
    ],
    rightImages: [
      { src: Eating3, style: 'w-[191px] h-[200px] ms-auto mr-14' },
      { src: PaperPlane, style: 'w-[152px] h-[152px] md:mt-[6rem] mt-8' },
      { src: Se, style: 'w-[76px] h-[150px] mt-auto ms-auto' },
    ],
    text: 'Trust in our platform for all your remittance needs. Send money with confidence knowing every transaction is protected and monitored.',
  },
]
