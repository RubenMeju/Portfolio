'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../../../i18n-config'
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

  useEffect(() => {
    setLoading(true)
    setLanguage(pathName)

    if (pathName === '/en') {
      setLanguage('en')
      setLoading(false)
    } else if (pathName === '/es') {
      setLanguage('es')
      setLoading(false)
    }
  }, [pathName])
  return (
    <>
      {loading ? (
        <Image
          src={iconSpain}
          alt='Spain'
          width={30}
          height={30}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <div className={styles.container}>
          <Image
            src={language === 'en' ? iconUnitedKingdom : iconSpain}
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
                    <Image
                      src={locale === 'en' ? iconUnitedKingdom : iconSpain}
                      alt={locale === 'en' ? 'United Kingdom' : 'Spain'}
                      width={30}
                      height={30}
                    />

                    <Link
                      href={redirectedPathName(locale)}
                      className={styles.link}
                    >
                      {locale === 'en' ? 'English' : 'Español'}
                    </Link>
                  </li>
                )
              })}
            </ul>
          ) : null}
        </div>
      )}
    </>
  )
}
