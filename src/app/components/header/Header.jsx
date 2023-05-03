'use client'
import styles from './header.module.css'
import Image from 'next/image'
import iconGithub from '../../../../public/github.svg'
import iconLinkedin from '../../../../public/linkedin.svg'
import { ButtonBars } from '../btnBars/ButtonBars'
import { useContext } from 'react'
import { AnimationContext } from '@/app/store/AnimationProvider'

export default function Header() {
  const { isOpen, setIsOpen } = useContext(AnimationContext)
  return (
    <header className={styles.header}>
      <span className={styles.logo}>R</span>
      <div className={styles.containerButton}>
        <ButtonBars />
      </div>
      <div className={styles.socialIcons}>
        <a href='https://github.com/RubenMeju' target='_blank'>
          <Image src={iconGithub} className={styles.img} alt='Github' />
        </a>
        <a
          href='https://www.linkedin.com/in/rub%C3%A9n-y%C3%A1%C3%B1ez-bb12b71bb/'
          target='_blank'
          className={styles.a}
        >
          <Image src={iconLinkedin} className={styles.img} alt='Linkedin' />
        </a>
      </div>
    </header>
  )
}
