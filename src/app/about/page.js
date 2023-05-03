import Image from 'next/image'
import styles from './about.module.css'
import { technologies } from './technologies'

export default function page() {
  return (
    <div>
      <section className={styles.section1}>
        <h1 className={styles.title}>About Rubén Yañez</h1>
        <p className={styles.p}>
          I am a 27 years old passionate
          <strong className={styles.strong}> Fullstack Web Developer </strong>
          based in La Coruña, Spain who enjoys building software. Very positive
          and highly motivated person in building beautiful websites, web and
          mobile applications with a stronger focus on the frontend
          technologies.
        </p>
      </section>
      <section className={styles.section2}>
        <h2 className={styles.title}>Most used technologies</h2>
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
      </section>
    </div>
  )
}
