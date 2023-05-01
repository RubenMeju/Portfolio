import Image from 'next/image'
import styles from './card.module.css'

export default function Card({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image
          src={project.image}
          alt={project.title}
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.cardBody}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
