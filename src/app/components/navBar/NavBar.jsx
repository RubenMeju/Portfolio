'use client'
import { motion } from 'framer-motion'
import styles from './navBar.module.css'
import NavItems from './navItems/NavItems'

const variants = {
  open: {
    x: 0,
    width: '100%'
    // borderRadius: ['50%', '50%', '50%', '10%', '0%']
  },
  closed: {
    width: 0,

    x: '-100%'
  }
}

export default function NavBar({ isOpen, setIsOpen }) {
  console.log('isOpen in navbar', isOpen)
  return (
    <motion.nav
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.3 }}
      className={styles.nav}
    >
      <NavItems isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.nav>
  )
}
