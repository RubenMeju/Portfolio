'use client'
import styles from './header.module.css'
import Image from 'next/image'
import iconGithub from '../../../../public/github.svg'
import iconLinkedin from '../../../../public/linkedin.svg'
import { ButtonBars } from '../btnBars/ButtonBars'

export default function Header({ isOpen, setIsOpen }) {
  console.log('isOpen', isOpen)
  return (
    <header className={styles.header}>
      <span className={styles.logo}>R</span>
      <div className={styles.containerButton}>
        <ButtonBars isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={styles.socialIcons}>
        <Image src={iconGithub} className={styles.img} alt='Github' />
        <Image src={iconLinkedin} className={styles.img} alt='Linkedin' />
      </div>
    </header>
  )
}
