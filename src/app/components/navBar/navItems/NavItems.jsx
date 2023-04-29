import Link from 'next/link'
import styles from './navItems.module.css'

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

export default function NavItems({ isOpen, setIsOpen }) {
  return (
    <ul className={styles.ul}>
      {pages.map((page, index) => (
        <li key={index} className={styles.li}>
          <Link
            href={page.path}
            className={styles.link}
            onClick={() => setIsOpen(!isOpen)}
          >
            {page.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
