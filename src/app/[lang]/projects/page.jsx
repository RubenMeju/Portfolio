import styles from './projects.module.css'
import Card from '../components/card/Card'

import { projects } from './projectList'
import { getDictionary } from '../../../../get-dictionary'

export default async function Portfolio({ params: { lang } }) {
  const dictionary = await getDictionary(lang)

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>{dictionary['projects'].title}</h1>
      </div>
      <div className={styles.body}>
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </>
  )
}
