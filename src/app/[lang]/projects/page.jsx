import styles from './projects.module.css'
import Card from '../components/card/Card'

import { projects } from './projectList'

export default function Portfolio() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Fullstack Web Developer Portfolio</h1>
      </div>
      <div className={styles.body}>
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </>
  )
}
