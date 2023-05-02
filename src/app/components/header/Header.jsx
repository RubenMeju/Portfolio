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
        <a href='https://github.com/RubenMeju' target='_blank'>
          <Image src={iconGithub} className={styles.img} alt='Github' />
        </a>
        <a
          href='https://www.linkedin.com/in/rub%C3%A9n-y%C3%A1%C3%B1ez-bb12b71bb/'
          target='_blank'
        >
          <Image src={iconLinkedin} className={styles.img} alt='Linkedin' />
        </a>
      </div>
    </header>
  )
}
