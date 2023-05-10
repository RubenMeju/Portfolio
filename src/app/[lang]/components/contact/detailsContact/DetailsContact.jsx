import { getDictionary } from '../../../../../../get-dictionary'
import styles from './detailsContact.module.css'

export default async function DetailsContact({ lang }) {
  const dictionary = await getDictionary(lang)
  return (
    <section className={styles.section}>
      <h3 className={styles.subTitle}>{dictionary['contact'].subTitle}</h3>

      <p className={styles.p}>{dictionary['contact'].description}</p>
      <ul className={styles.ul}>
        <li className={styles.li}>
          Email:
          <a href='mailto:rubenmeju@outlook.es' className={styles.a}>
            Rubenmeju@outlook.es
          </a>
        </li>
        <li className={styles.li}>
          LinkedIn:
          <a
            href='https://www.linkedin.com/in/rub%C3%A9n-y%C3%A1%C3%B1ez-bb12b71bb/'
            target='_blank'
            className={styles.a}
          >
            Rubenmeju
          </a>
        </li>
        <li className={styles.li}>
          GitHub:
          <a
            href='https://github.com/RubenMeju'
            target='_blank'
            className={styles.a}
          >
            Rubenmeju
          </a>
        </li>
      </ul>
      <p className={styles.p}>{dictionary['contact'].postData}</p>
    </section>
  )
}
