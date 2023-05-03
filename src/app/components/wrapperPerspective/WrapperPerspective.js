'use client'
import { AnimationContext } from '@/app/store/AnimationProvider'
import { motion } from 'framer-motion'
import { useContext } from 'react'

const variants = {
  open: {
    // height: '90%',
    backgroundColor: 'rgb(40, 57, 104)',
    transform: 'translateZ(-100px) rotateY(-15deg)'
  },
  closed: {}
}

export const WrapperPerspective = ({ children }) => {
  const { isOpen } = useContext(AnimationContext)

  return (
    <motion.div
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.3 }}
      // className='children'
    >
      {children}
    </motion.div>
  )
}
