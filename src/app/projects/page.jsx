import Image from 'next/image'
import styles from './projects.module.css'
import imagen from '../../../public/SonGoku.webp'

const projects = [
  {
    title: 'Project 1',
    description: 'This is a project',
    image: imagen,
    link: 'https://www.google.com'
  },
  {
    title: 'Project 2',
    description: 'This is a project',
    image: imagen,
    link: 'https://www.google.com'
  },
  {
    title: 'Project 3',
    description: 'This is a project',
    image: imagen,
    link: 'https://www.google.com'
  },
  {
    title: 'Project 1',
    description: 'This is a project',
    image: imagen,
    link: 'https://www.google.com'
  },
  {
    title: 'Project 2',
    description: 'This is a project',
    image: imagen,
    link: 'https://www.google.com'
  },
  {
    title: 'Project 3',
    description: 'This is a project',
    image: imagen,
    link: 'https://www.google.com'
  }
]

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Fullstack Web Developer Portfolio</h1>
      </div>
      <div className={styles.body}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <Image
                src={project.image}
                alt={project.title}
                className='image'
                fill
              />
            </div>
            <div className={styles.cardBody}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
