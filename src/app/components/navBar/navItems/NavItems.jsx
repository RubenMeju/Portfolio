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
  )
}
