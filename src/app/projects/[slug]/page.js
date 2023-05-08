import React from 'react'
import { projects } from '../projectList'
import styles from './slug.module.css'
import Image from 'next/image'

import iconGithub from '../../../../public/github.svg'
import iconGoDemo from '../../../../public/goDemo.svg'

export default function page({ params }) {
  console.log('slug', params.slug)
  const project = projects.find((project) => project.path === params.slug)
  console.log('project', project)
  // if (!project) {
  //   return <h1>Project not found</h1>
  // }
  return (
    <div style={{ color: 'aliceblue' }}>
      <div className={styles.header}>
        <h1 className={styles.title}>{project?.title}</h1>
        <p className={styles.subTitle}>{project?.subTitle}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.contImg}>
          <Image
            src={project.image}
            alt={project.title}
            className={styles.img}
            fill
          />
        </div>

        <div className={styles.details}>
          <div className={styles.headerDetails}>
            <h2>Technologies</h2>
            <div className={styles.links}>
              <a href={project?.url_github} target='_blank' rel='noreferrer'>
                <Image
                  src={iconGithub}
                  alt='Repository github'
                  width={36}
                  height={36}
                />
              </a>
              <a href={project?.url_vercel} target='_blank' rel='noreferrer'>
                <Image src={iconGoDemo} alt='demo app' width={36} height={36} />
              </a>
            </div>
          </div>
          <ul className={styles.ul}>
            {project?.technology?.map((tech, index) => (
              <li key={index} className={styles.li}>
                {tech}
              </li>
            ))}
          </ul>

          <div>
            <p className={styles.description}>{project?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
