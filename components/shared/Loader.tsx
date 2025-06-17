import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBrandLoader = () => {
  const animationSequence = {
    hidden: {
      clipPath: 'circle(0% at 50% 50%)',
      opacity: 0,
    },
    visible: {
      clipPath: 'circle(150% at 50% 50%)',
      opacity: 1,
    },
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
      <div className='relative'>
        <div className='flex items-center space-x-4'>
          <motion.div className='relative'>
            <motion.div
              className='absolute w-3 h-3 rounded-full bg-amber-800 z-10'
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 1],
                opacity: [0, 1, 0.8],
              }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.3],
              }}
            />
            <motion.div
              className='text-8xl font-black relative'
              style={{
                fontFamily: "'Inter', 'Helvetica', sans-serif",
                color: '#4a3728',
              }}
              initial='hidden'
              animate='visible'
              variants={animationSequence}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
            >
              R
            </motion.div>
          </motion.div>
          <motion.div className='relative'>
            <div
              className='text-4xl font-light tracking-[0.2em]'
              style={{
                fontFamily: "'Inter', 'Helvetica', sans-serif",
                color: '#4a3728',
              }}
            >
              {'revve'.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  className='relative inline-block'
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 1, 1],
                    scale: [0.5, 1.1, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: 'backOut',
                    times: [0, 0.3, 0.8],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Underline animation - plays once and stays visible */}
        <motion.div
          className='absolute -bottom-2 left-0 h-0.5 bg-amber-800'
          initial={{ width: 0, left: '50%' }}
          animate={{
            width: ['0%', '100%'],
            left: ['50%', '0%'],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Corner drawing animations - play once and stay visible */}
        <motion.div className='absolute -top-4 -left-4 w-6 h-6'>
          <motion.div
            className='absolute top-0 left-0 w-full h-0.5 bg-amber-800'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{
              duration: 0.4,
              delay: 1.5,
            }}
          />
          <motion.div
            className='absolute top-0 left-0 w-0.5 h-full bg-amber-800'
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{
              duration: 0.4,
              delay: 1.7,
            }}
          />
        </motion.div>

        <motion.div className='absolute -bottom-4 -right-4 w-6 h-6'>
          <motion.div
            className='absolute bottom-0 right-0 w-full h-0.5 bg-amber-800'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{
              duration: 0.4,
              delay: 1.9,
            }}
          />
          <motion.div
            className='absolute bottom-0 right-0 w-0.5 h-full bg-amber-800'
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{
              duration: 0.4,
              delay: 2.1,
            }}
          />
        </motion.div>

        {/* Loading dots indicator - removed since we don't want infinite animation */}
      </div>
    </div>
  )
}

export default AnimatedBrandLoader