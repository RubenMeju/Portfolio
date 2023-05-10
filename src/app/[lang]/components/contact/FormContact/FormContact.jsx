'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './formContact.module.css'
import Loader from '../../loader/Loader'
import { useTranslation } from '../../../../../../i18n-config'

export const FormContact = async ({ dictionary }) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

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
          setLoading(false)
          setSuccess(true)
        },
        (error) => {
          console.log(error.text)
          setLoading(false)
          setError(true)
        }
      )
  }
  if (loading) return <Loader />
  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
      {success && <p className={styles.success}>Email enviado con éxito</p>}
      {error && <p className={styles.error}>Error al enviar el email</p>}
      <label className={styles.label}>Name</label>
      <input
        className={styles.input}
        type='text'
        name='user_name'
        placeholder={dictionary['contact'].name}
      />
      <label className={styles.label}>Email</label>
      <input
        className={styles.input}
        type='email'
        name='user_email'
        placeholder={dictionary['contact'].email}
      />
      <label className={styles.label}>Message</label>
      <textarea
        className={styles.input}
        name='message'
        placeholder={dictionary['contact'].message}
      />
      <button className='btn' type='submit'>
        {dictionary['contact'].btnSend}
      </button>
    </form>
  )
}
