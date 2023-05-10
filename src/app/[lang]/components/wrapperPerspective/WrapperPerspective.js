'use client'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '../../../store/AnimationProvider'

const variants = {
  open: {
    backgroundColor: 'rgb(40, 57, 104)',
    height: '100vh',
    overflow: 'hidden',
    transform: 'translateZ(-100px) rotateY(-15deg)'
  },
  closed: { height: 'inherit' }
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
