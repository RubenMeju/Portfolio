import React from 'react'
import { projects } from '../projectList'
import styles from './slug.module.css'
import Image from 'next/image'

import iconGithub from '../../../../public/github.svg'
import iconGoDemo from '../../../../public/goDemo.svg'
import Link from 'next/link'

export default function Page({ params }) {
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
    <div style={{ color: 'aliceblue' }}>
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
            <h2>Technologies</h2>
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
          <h1>Let`s get in touch</h1>
          <p>Do you have an interesting project I can help with?</p>
          <p>Feel free to reach out to me!</p>
          <div className={styles.links}>
            <Link href='projects' className='btn'>
              Projects
            </Link>
            <Link href='contact' className='btn'>
              Contact me
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
