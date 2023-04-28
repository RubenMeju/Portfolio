'use client'
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

import imgProfile from '../../public/SonGoku.webp'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h1>
            Hey there, my name is Rubén Yáñez. I am a Fullstack Web Developer
            based in La Coruña, Spain.
          </h1>
          <p>
            I am a self-taught developer with a passion for learning new things
            and solving problems. I am currently working as a freelance
            developer and I am open to new opportunities.
          </p>

          <Link href='/projects'>projects </Link>
        </div>
        <div className={styles.contImage}>
          <Image
            width={200}
            height={200}
            src={imgProfile}
            className={styles.img}
            alt='Rubén'
          />
        </div>
      </div>
    </div>
  )
}
