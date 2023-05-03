'use client'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './formContact.module.css'

export const FormContact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_6kgabzh',
        'template_1e3t7r7',
        form.current,
        'irgJ2UCocjQKQEJ4M'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
      <label className={styles.label}>Name</label>
      <input
        className={styles.input}
        type='text'
        name='user_name'
        placeholder='Enter your full name...'
      />
      <label className={styles.label}>Email</label>
      <input
        className={styles.input}
        type='email'
        name='user_email'
        placeholder='Enter your email...'
      />
      <label className={styles.label}>Message</label>
      <textarea
        className={styles.input}
        name='message'
        placeholder='Enter your message'
      />
      <input className={styles.inputSubmit} type='submit' value='Send' />
    </form>
  )
}
