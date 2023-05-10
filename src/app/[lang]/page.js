import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

import imgYo from '../../../public/yo1.jpg'
import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import LocaleSwitcher from './switchLanguage/locale-switcher'

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang)
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
          <LocaleSwitcher />
          <h1 className={styles.textIntro}>
            {dictionary['home'].welcome}
            <br /> {dictionary['home'].welcomeMy}
            <br /> {dictionary['home'].title}
          </h1>
          <h3 className={styles.textDescription}>
            {dictionary['home'].description}
          </h3>
        </div>

        <div className={styles.contLinks}>
          <Link href={lang + '/projects'} className='btn'>
            {dictionary['home'].btnProjects}
          </Link>
          <Link href={lang + '/contact'} className='btn'>
            {dictionary['home'].btnContact}
          </Link>
        </div>
      </div>
    </div>
  )
}
