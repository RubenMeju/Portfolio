import Link from 'next/link'
import styles from './navItems.module.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AnimationContext } from '@/app/store/AnimationProvider'

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

const variants = {
  open: {
    x: 0,
    width: '100%'
  },
  closed: {
    width: 0,
    x: '-100%'
  }
}

export default function NavItems() {
  const { isOpen, setIsOpen } = useContext(AnimationContext)

  return (
    <ul className={styles.ul}>
      {pages.map((page, index) => (
        <motion.li
          key={index}
          className={styles.li}
          initial='closed'
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            href={page.path}
            className={styles.link}
            onClick={() => setIsOpen(!isOpen)}
          >
            {page.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}
