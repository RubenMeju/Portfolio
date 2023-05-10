'use client'

import { motion } from 'framer-motion'
import { useContext } from 'react'
import styles from './wrapperAnimated.module.css'
import { AnimationContext } from '../../../store/AnimationProvider'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export const WrapperAnimated = ({ children }) => {
  const { isOpen } = useContext(AnimationContext)

  const isSmall = useMediaQuery('(max-width: 820px)')

  const variants = isSmall
    ? {
        open: {
          x: '80%'
        },

        closed: {
          x: '0%'
        }
      }
    : {
        open: {
          overflow: 'hidden'
        },
        closed: {
          overflowX: 'hidden'
        }
      }

  return (
    <motion.div
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.3 }}
      className={styles.wrapperAnimated}
    >
      {children}
    </motion.div>
  )
}
