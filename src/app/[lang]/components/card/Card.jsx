'use client'
import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

export default function Card({ project, params }) {
  return (
    <Link href={params + '/projects/' + project.path} className={styles.card}>
      <div className={styles.cardHeader}>
        <Image
          src={project.image}
          alt={project.title}
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.title}>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </Link>
  )
}
