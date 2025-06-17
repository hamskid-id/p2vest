import { StaticImageData } from 'next/image'
import { CustomImage } from '@/components/shared/Image'
import { NavigationControls } from './NavigationControls'

interface SliderHeaderProps {
  brandSrc: StaticImageData
  onPrevious: () => void
  onNext: () => void
  activeIndex: number
  totalSlides: number
  onSlideSelect: (index: number) => void
}

export const SliderHeader = ({
  brandSrc,
  onPrevious,
  onNext,
  activeIndex,
  totalSlides,
  onSlideSelect,
}: SliderHeaderProps) => {
  return (
    <header className='px-3 flex lg:flex-row flex-col justify-between lg:items-center items-start mb-8 md:mb-12'>
      <CustomImage
        src={brandSrc}
        alt='Revve brand logo'
        style='w-[120px] h-[120px]'
      />
      <h1 className='text-white sm:text-[64px] text-[54px] leading-[64px] sm:leading-[72px] text-center'>
        Send. Shop. Spend
      </h1>

      <NavigationControls
        onPrevious={onPrevious}
        onNext={onNext}
        activeIndex={activeIndex}
        totalSlides={totalSlides}
        onSlideSelect={onSlideSelect}
      />
    </header>
  )
}
