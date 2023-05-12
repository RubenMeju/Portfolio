'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../../i18n-config'
import Image from 'next/image'
import iconSpain from '../../../../public/languages/spain.png'
import iconUnitedKingdom from '../../../../public/languages/united-kingdom.png'
import styles from './languages.module.css'

export default function LocaleSwitcher() {
  const [language, setLanguage] = useState('')
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)

  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  console.log('pathName', pathName.split('/')[1])
  const languagePath = pathName.split('/')[1]

  return (
    <>
      <div className={styles.container}>
        <Image
          src={languagePath === 'en' ? iconUnitedKingdom : iconSpain}
          alt='Spain'
          width={30}
          height={30}
          onClick={() => setOpen(!open)}
        />

        {open ? (
          <ul className={styles.ul}>
            {i18n.locales.map((locale) => {
              return (
                <li key={locale} className={styles.li}>
                  <Link
                    href={redirectedPathName(locale)}
                    className={styles.link}
                  >
                    <Image
                      src={locale === 'en' ? iconUnitedKingdom : iconSpain}
                      alt={locale === 'en' ? 'United Kingdom' : 'Spain'}
                      width={30}
                      height={30}
                    />
                    {locale === 'en' ? 'English' : 'Español'}
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </>
  )
}
