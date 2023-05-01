import { motion } from 'framer-motion'

const variants = {
  open: {
    // height: '90%',
    transform: 'translateZ(-100px) rotateY(-15deg)',
    backgroundColor: 'green'
  },
  closed: {}
}

export const WrapperPerspective = ({ children, isOpen }) => {
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
