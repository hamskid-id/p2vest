import { StaticImageData } from 'next/image'
import middleImageA from '@/public/Slider A Inner.svg'
import middleImageB from '@/public/Slider B Inner.svg'
import middleImageC from '@/public/Slider C Inner.svg'
import middleImageD from '@/public/Slider D Inner.svg'
import SliderABg from '@/public/Slider A.svg'
import SliderBBg from '@/public/Slider B.svg'
import SliderCBg from '@/public/Slider C.svg'
import SliderDBg from '@/public/Slider D.svg'
import TransactionImageA from '@/public/Transaction.svg'
import TransactionImageB from '@/public/TransactionB.svg'
import TransactionImageC from '@/public/TransactionC.svg'
import TransactionImageD from '@/public/TransactionD.svg'
import SliderACurrency from '@/public/+C$750.svg'
import CanadaCountry from '@/public/CanadaCountry.svg'
import SliderBCurrency from '@/public/+₵3,920.svg'
import GhanaCountry from '@/public/CanadaCountry.svg'
import NigeriaCountry from '@/public/NigeriaCountry.svg'
import SliderCCurrency from '@/public/-₦98,000.svg'
import SliderDCurrency from '@/public/NigeriaCountry.svg'

export interface SlideData {
  bgImage: StaticImageData
  countryLeft: string
  countryRight: string
  sliderInner: StaticImageData
  transactionImage: StaticImageData
  leftCountryFlag: StaticImageData
  rightCountryFlag: StaticImageData
  leftCurrency: StaticImageData
  rightCurrency?: StaticImageData
  description: string
}

export const slides: SlideData[] = [
  {
    bgImage: SliderABg,
    countryLeft: 'Nigeria',
    countryRight: 'Canada',
    sliderInner: middleImageA,
    transactionImage: TransactionImageA,
    leftCountryFlag: CanadaCountry,
    rightCountryFlag: NigeriaCountry,
    leftCurrency: SliderACurrency,
    description: 'Seamlessly bridge distances with our effortless remittance service. Send support and financial care to your loved ones back home.'
  },
  {
    bgImage: SliderBBg,
    countryLeft: 'Ghana',
    countryRight: 'Canada',
    sliderInner: middleImageB,
    transactionImage: TransactionImageB,
    leftCountryFlag: SliderBCurrency,
    rightCountryFlag: GhanaCountry,
    leftCurrency: SliderBCurrency,
    description: 'Seamlessly bridge distances with our effortless remittance service. Send support and financial care to your loved ones back home.'
  },
  {
    bgImage: SliderCBg,
    countryLeft: 'Ghana',
    countryRight: 'Nigeria',
    sliderInner: middleImageC,
    transactionImage: TransactionImageC,
    leftCountryFlag: NigeriaCountry,
    rightCountryFlag: GhanaCountry,
    leftCurrency: SliderCCurrency,
    description: 'Seamlessly bridge distances with our effortless remittance service. Send support and financial care to your loved ones back home.'
  },
  {
    bgImage: SliderDBg,
    countryLeft: 'Nigeria',
    countryRight: 'Nigeria',
    sliderInner: middleImageD,
    transactionImage: TransactionImageD,
    leftCountryFlag: SliderDCurrency,
    rightCountryFlag: NigeriaCountry,
    leftCurrency: SliderDCurrency,
    description: 'Seamlessly bridge distances with our effortless remittance service. Send support and financial care to your loved ones back home.'
  },
]