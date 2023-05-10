import styles from './detailsContact.module.css'

export default function DetailsContact() {
  return (
    <section className={styles.section}>
      <h3 className={styles.subTitle}>Where to find me </h3>

      <p className={styles.p}>
        Do you have an interesting project I can help with? Feel free to reach
        out to me by using one of the following:
      </p>
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
      <p className={styles.p}>
        You can also use the contact form on this page.
      </p>
    </section>
  )
}
