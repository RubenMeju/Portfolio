import { useMediaQuery } from '@/app/hooks/useMediaQuery'
import { motion } from 'framer-motion'

export const WrapperAnimated = ({ children, isOpen }) => {
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
        closed: {}
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
