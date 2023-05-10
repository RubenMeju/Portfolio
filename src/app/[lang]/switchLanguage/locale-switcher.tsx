'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../../../i18n-config'

import imgSpain from '../../../../public/spain.png'
import Image from 'next/image'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div style={{ color: 'aliceblue' }}>
      <p>Locale switcher:</p>
      <Image src={imgSpain} alt='Spain' width={20} height={20} />
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale} style={{ color: 'aliceblue' }}>
              <Link
                href={redirectedPathName(locale)}
                style={{ color: 'aliceblue' }}
              >
                {locale}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
