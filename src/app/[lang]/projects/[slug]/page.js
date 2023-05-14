import React from 'react'
import { useListProjects } from '../../hooks/useListProjects'
import styles from './slug.module.css'
import Image from 'next/image'

import iconGithub from '../../../../../public/github.svg'
import iconGoDemo from '../../../../../public/goDemo.svg'
import Link from 'next/link'
import { getDictionary } from '../../../../get-dictionary'

export default async function Page({ params }) {
  const { lang } = params
  const dictionary = await getDictionary(lang)
  const { projects } = await useListProjects(lang)
  const { slug } = params
  const project = projects.find((project) => project.path === slug)

  if (!project) {
    return <h1>Project not found</h1>
  }

  const {
    title,
    subTitle,
    image,
    technology,
    description,
    url_github,
    url_vercel
  } = project

  return (
    <div
      style={{
        paddinbottom: '100px'
      }}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>

      <div className={styles.body}>
        <section className={styles.container1}>
          <div className={styles.contImg}>
            <Image src={image} alt={title} className={styles.img} fill />
          </div>

          <div className={styles.details}>
            <h2>{dictionary['projectsSlug'].title}</h2>
            <ul className={styles.ul}>
              {technology.map((tech, index) => (
                <li key={index} className={styles.li}>
                  {tech}
                </li>
              ))}
            </ul>
            <p className={styles.description}>{description}</p>

            <div className={styles.icons}>
              <a href={url_github} target='_blank' rel='noreferrer'>
                <Image
                  src={iconGithub}
                  alt='Repository github'
                  width={36}
                  height={36}
                />
              </a>
              <a href={url_vercel} target='_blank' rel='noreferrer'>
                <Image src={iconGoDemo} alt='demo app' width={36} height={36} />
              </a>
            </div>
          </div>
        </section>

        <section className={styles.container2}>
          <h1 className={styles.paddingBottom}>
            {dictionary['projectsSlug'].subTitle}
          </h1>
          <p>{dictionary['projectsSlug'].description}</p>
          <p>{dictionary['projectsSlug'].postData}</p>
          <div className={styles.links}>
            <Link href='projects' className='btn'>
              {dictionary['projectsSlug'].btnProjects}
            </Link>
            <Link href='contact' className='btn'>
              {dictionary['projectsSlug'].btnContact}
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
