import Image from 'next/image'
import styles from './about.module.css'
import { getDictionary } from '../../../get-dictionary'

import { technologies } from './technologies'

export default async function page({ params: { lang } }) {
  const dictionary = await getDictionary(lang)

  return (
    <div className={styles.about}>
      <div className={styles.section1}>
        <h1 className={styles.title}>{dictionary['about'].title}</h1>
        <p className={styles.p}>
          {dictionary['about'].intro}
          <strong className={styles.strong}>
            {dictionary['about'].profession}
          </strong>
          {dictionary['about'].description}
        </p>
      </div>
      <div className={styles.section2}>
        <h2 className={styles.title}> {dictionary['about'].technologies}</h2>
        <ul className={styles.ul}>
          {technologies.map((technology) => (
            <li key={technology.name} className={styles.li}>
              <Image
                src={technology.icon}
                alt={technology.name}
                width={32}
                height={32}
              />
              <span className={styles.span}>{technology.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
