import './globals.css'
import { Inter } from 'next/font/google'
import { i18n } from '../../i18n-config'
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
import { WrapperAnimated } from './components/wrapperAnimated/WrapperAnimated'
import { WrapperPerspective } from './components/wrapperPerspective/WrapperPerspective'
import AnimationProvider from '../store/AnimationProvider'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio de Rubén Yáñez'
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <AnimationProvider>
          <Header />
          <NavBar params={params} />

          <WrapperAnimated>
            <WrapperPerspective>{children}</WrapperPerspective>
          </WrapperAnimated>
        </AnimationProvider>
      </body>
    </html>
  )
}
