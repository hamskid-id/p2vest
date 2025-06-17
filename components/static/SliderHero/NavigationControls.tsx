import { CustomImage } from '@/components/shared/Image'
import LeftControl from '@/public/LeftControl.png'
import RightControl from '@/public/RightControl.png'
import TopControl from '@/public/TopControl.png'
import BottomControl from '@/public/BottomControl.png'

interface NavigationControlsProps {
  onPrevious: () => void
  onNext: () => void
  activeIndex: number
  totalSlides: number
  onSlideSelect: (index: number) => void
}

export const NavigationControls = ({
  onPrevious,
  onNext,
  activeIndex,
  totalSlides,
  onSlideSelect,
}: NavigationControlsProps) => {
  return (
    <nav
      className='lg:ms-[unset] ms-auto flex flex-col gap-3 justify-end items-center'
      aria-label='Slider navigation'
    >
      <button
        onClick={onPrevious}
        className='p-1 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded'
        aria-label='Previous slide'
      >
        <CustomImage
          style='w-[20px] h-[20px]'
          src={TopControl}
          alt='Previous slide control'
        />
      </button>

      <div className='flex gap-3 items-center'>
        <button
          onClick={() =>
            onSlideSelect(activeIndex > 0 ? activeIndex - 1 : totalSlides - 1)
          }
          className='p-1 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded'
          aria-label='Navigate left'
        >
          <CustomImage
            style='w-[20px] h-[20px]'
            src={LeftControl}
            alt='Left navigation control'
          />
        </button>
        <button
          onClick={onNext}
          className='p-1 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded'
          aria-label='Next slide'
        >
          <CustomImage
            style='w-[20px] h-[20px]'
            src={BottomControl}
            alt='Next slide control'
          />
        </button>
        <button
          onClick={() =>
            onSlideSelect(activeIndex < totalSlides - 1 ? activeIndex + 1 : 0)
          }
          className='p-1 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded'
          aria-label='Navigate right'
        >
          <CustomImage
            style='w-[20px] h-[20px]'
            src={RightControl}
            alt='Right navigation control'
          />
        </button>
      </div>
    </nav>
  )
}
