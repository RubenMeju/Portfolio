'use client'
import { motion } from 'framer-motion'
import styles from './navBar.module.css'
import Link from 'next/link'

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
      <ul className={styles.ul}>
        {pages.map((page, index) => (
          <Link
            href={page.path}
            key={index}
            className={styles.link}
            onClick={() => setIsOpen(!isOpen)}
          >
            <li className={styles.li}>{page.name}</li>
          </Link>
        ))}
      </ul>
    </motion.nav>
  )
}
