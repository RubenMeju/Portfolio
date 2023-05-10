'use client'
import { motion } from 'framer-motion'
import styles from './navBar.module.css'
import NavItems from './navItems/NavItems'
import { useContext } from 'react'
import { AnimationContext } from '../../../store/AnimationProvider'

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

export default function NavBar({ params }) {
  console.log(JSON.stringify(params))
  const { isOpen } = useContext(AnimationContext)

  return (
    <motion.nav
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.3 }}
      className={styles.nav}
    >
      <NavItems params={params} />
    </motion.nav>
  )
}
