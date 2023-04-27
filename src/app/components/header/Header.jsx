'use client'
import styles from './header.module.css'

export default function Header({ isOpen, setIsOpen }) {
  console.log('isOpen', isOpen)
  return (
    <header className={styles.header}>
      <span className={styles.logo}>R</span>
      <button
        className={styles.button}
        onClick={() => {
          console.log('clicked')
          setIsOpen(!isOpen)
        }}
      >
        X
      </button>
    </header>
  )
}
