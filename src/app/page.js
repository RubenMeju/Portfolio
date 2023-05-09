import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

import imgYo from '../../public/yo.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.contImage}>
          <Image
            src={imgYo}
            alt='Rubén Yáñez'
            fill
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            className='img'
          />
        </div>
      </div>

      <div className={styles.body}>
        <div>
          <h1 className={styles.textIntro}>
            Hey there,
            <br /> my name is Rubén Yáñez. <br /> I am a Fullstack Web Developer
            based in La Coruña, Spain.
          </h1>
          <h3 className={styles.textDescription}>
            I am a self-taught developer with a passion for learning new things
            and solving problems. I am currently working as a freelancer, but I
            am looking for new opportunities to grow as a developer.
          </h3>
        </div>

        <div className={styles.contLinks}>
          <Link href='projects' className='btn'>
            Projects
          </Link>
          <Link href='contact' className='btn'>
            Contact me
          </Link>
        </div>
      </div>
    </div>
  )
}
