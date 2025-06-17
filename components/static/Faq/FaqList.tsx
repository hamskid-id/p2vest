import { useState } from 'react'
import { FaqItem } from './FaqItem'
import { faqs } from '@/lib/constants/faqData'
import { RevealAnimation } from '@/components/shared/RevealAnitaion'

export const FaqList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='flex-1'>
      {faqs.map((faq, index) => (
        <RevealAnimation
          key={index}
          direction='right'
          delay={0.1 + index * 0.05}
          className='mb-4 last:mb-0'
        >
          <FaqItem
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => toggleFaq(index)}
          />
        </RevealAnimation>
      ))}
    </div>
  )
}
