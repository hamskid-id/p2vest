import { MaxScreenWrapper } from '@/components/shared/MaxScreen'
import { FaqContent } from './FaqContent'
import { FaqList } from './FaqList'

export const Faq = () => {
    return (
      <MaxScreenWrapper className='md:min-h-[960px] min-h-auto relative bg-[#4F0072] sm:px-8 md:px-14 px-4 sm:py-8 md:py-[8rem] py-6'>
        <div className='flex xl:flex-nowrap flex-wrap gap-8 md:gap-24 md:justify-between justify-center items-center h-full'>
          <FaqContent />
          <FaqList />
        </div>
      </MaxScreenWrapper>
    )
  }
