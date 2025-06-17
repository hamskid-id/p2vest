'use client'

import { cn } from '../../lib/utils'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface RevealAnimationProps {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  direction = 'up',
  className,
  delay = 0,
  duration = 0.6,
  once = true,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '0px 0px -50px 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const hiddenStyles = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
  }[direction]

  return (
    <div
      className={cn('overflow-hidden', className)}
      style={{
        maxWidth: '100%',
      }}
    >
      <motion.div
        ref={ref}
        className='will-change-transform'
        initial={hiddenStyles}
        animate={controls}
        variants={{
          hidden: hiddenStyles,
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.25, 0, 1],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
