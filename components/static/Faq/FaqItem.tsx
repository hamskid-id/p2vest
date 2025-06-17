'use client'

import { FaqData } from '@/lib/types/faq'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqItemProps {
  faq: FaqData
  isOpen: boolean
  onToggle: () => void
}

export const FaqItem = ({ faq, isOpen, onToggle }: FaqItemProps) => {
  return (
    <div className='border-b border-white/20'>
      <button
        onClick={onToggle}
        className='w-full text-left py-4 flex items-center justify-between text-white'
      >
        <span className='flex items-center gap-4 justify-between w-full'>
          <h1
            className={cn(
              'text-white/60 sm:text-[40px] text-[28px] sm:leading-[60px] leading-[40px]',
              isOpen && 'text-white'
            )}
          >
            {faq.question}
          </h1>
          <motion.h1
            animate={{
              rotate: isOpen ? 45 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className={cn(
              'text-white/60 sm:text-[40px] text-[28px] sm:leading-[60px] leading-[40px]',
              isOpen && 'text-white'
            )}
          >
            +
          </motion.h1>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className='overflow-hidden'
          >
            <div className='bg-[#3B0055] px-4 py-6 mb-4 rounded-md'>
              <p className='text-white text-base leading-6 text-16px '>
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
