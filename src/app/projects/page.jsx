import styles from './projects.module.css'
import imagen from '../../../public/SonGoku.webp'
import Card from '../components/card/Card'

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
        <h1 className={styles.title}>Fullstack Web Developer Portfolio</h1>
      </div>
      <div className={styles.body}>
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
