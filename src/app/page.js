'use client'
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

import imgYo from '../../public/SonGoku.webp'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.contImg}>
          <Image src={imgYo} alt='Rubén Yáñez' fill />
        </div>
      </div>

      <div className={styles.body}>
        <div>
          <h1 className={styles.textIntro}>
            Hey there, my name is Rubén Yáñez. I am a Fullstack Web Developer
            based in La Coruña, Spain.
          </h1>
          <h3 className={styles.textDescription}>
            I am a self-taught developer with a passion for learning new things
            and solving problems. I am currently working as a freelancer, but I
            am looking for new opportunities to grow as a developer.
          </h3>
        </div>

        <div className={styles.contLinks}>
          <Link href='projects' className={styles.link}>
            Projects
          </Link>
          <Link href='contact' className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
