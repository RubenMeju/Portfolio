'use client'

import { useMediaQuery } from '@/app/hooks/useMediaQuery'
import { AnimationContext } from '@/app/store/AnimationProvider'
import { motion } from 'framer-motion'
import { useContext } from 'react'

export const WrapperAnimated = ({ children }) => {
  const { isOpen } = useContext(AnimationContext)

  const isSmall = useMediaQuery('(max-width: 820px)')

  const variants = isSmall
    ? {
        open: {
          x: '40%'
        },

        closed: {
          x: '0%'
        }
      }
    : {
        open: {
          overflow: 'hidden'
        },
        closed: { overflowX: 'hidden' }
      }

  return (
    <motion.div
      className='contChildrens'
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
