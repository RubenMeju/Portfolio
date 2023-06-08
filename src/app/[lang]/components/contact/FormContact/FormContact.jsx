'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './formContact.module.css'
import Loader from '../../loader/Loader'

export const FormContact = ({ dictionary }) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })

  const form = useRef()

  const resetForm = () => {
    setFormData({
      user_name: '',
      user_email: '',
      message: ''
    })
    setFormErrors({
      user_name: '',
      user_email: '',
      message: ''
    })
  }
  const sendEmail = (e) => {
    e.preventDefault()
    setSuccess(false)
    setError(false)

    // Validar campos antes de enviar el correo electrónico
    if (validateForm()) {
      setLoading(true)

      emailjs
        .sendForm(
          'service_6kgabzh',
          'template_1e3t7r7',
          form.current,
          'irgJ2UCocjQKQEJ4M'
        )
        .then(
          (result) => {
            setLoading(false)
            setSuccess(true)
            resetForm() // Restablecer los campos del formulario
          },
          (error) => {
            setLoading(false)
            setError(true)
          }
        )
    }
  }

  const validateForm = () => {
    let valid = true
    const errors = {}

    // Validar campo de nombre
    if (formData.user_name.trim() === '') {
      errors.user_name = 'Por favor, ingresa tu nombre'
      valid = false
    }

    // Validar campo de correo electrónico
    if (formData.user_email.trim() === '') {
      errors.user_email = 'Por favor, ingresa tu correo electrónico'
      valid = false
    } else if (!isValidEmail(formData.user_email)) {
      errors.user_email = 'Por favor, ingresa un correo electrónico válido'
      valid = false
    }

    // Validar campo de mensaje
    if (formData.message.trim() === '') {
      errors.message = 'Por favor, ingresa un mensaje'
      valid = false
    }

    setFormErrors(errors)
    return valid
  }

  const isValidEmail = (email) => {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <>
      {loading && <Loader />}
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        {success && <p className={styles.success}>Email enviado con éxito</p>}
        {error && <p className={styles.error}>Error al enviar el email</p>}
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          type='text'
          name='user_name'
          value={formData.user_name}
          onChange={handleInputChange}
          placeholder={dictionary['contact'].name}
        />
        {formErrors.user_name && (
          <p className={styles.error}>{formErrors.user_name}</p>
        )}
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type='email'
          name='user_email'
          value={formData.user_email}
          onChange={handleInputChange}
          placeholder={dictionary['contact'].email}
        />
        {formErrors.user_email && (
          <p className={styles.error}>{formErrors.user_email}</p>
        )}
        <label className={styles.label}>Message</label>
        <textarea
          className={styles.input}
          name='message'
          value={formData.message}
          onChange={handleInputChange}
          placeholder={dictionary['contact'].message}
        />
        {formErrors.message && (
          <p className={styles.error}>{formErrors.message}</p>
        )}
        <button className='btn' type='submit'>
          {dictionary['contact'].btnSend}
        </button>
      </form>
    </>
  )
}
