'use client'
import { motion } from 'framer-motion'
import styles from './navBar.module.css'
import Link from 'next/link'

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

const pages = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
  {
    name: 'About',
    path: '/about'
  }
]

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
      <ul className={styles.ul}>
        {pages.map((page, index) => (
          <li key={index} className={styles.li}>
            <Link href={page.path} className={styles.link}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
