'use client'
import { motion } from 'framer-motion'
import styles from './navBar.module.css'

const variants = {
  open: {
    opacity: 1,
    x: 0
    // borderRadius: ['50%', '50%', '50%', '10%', '0%']
  },
  closed: {
    opacity: 0,
    x: '-100%'
  }
}

export default function NavBar({ isOpen }) {
  console.log('isOpen in navbar', isOpen)
  return (
    <motion.nav
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={styles.nav}
    >
      <span>items</span>
      <span>items</span>
      <span>items</span>
    </motion.nav>
  )
}
