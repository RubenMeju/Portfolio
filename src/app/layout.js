import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
import { WrapperAnimated } from './components/wrapperAnimated/WrapperAnimated'
import { WrapperPerspective } from './components/wrapperPerspective/WrapperPerspective'
import AnimationProvider from './store/AnimationProvider'

const inter = Inter({ subsets: ['latin'] })
/*
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}
*/

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AnimationProvider>
          <Header />
          <NavBar />

          <WrapperAnimated>
            <WrapperPerspective>{children}</WrapperPerspective>
          </WrapperAnimated>
        </AnimationProvider>
      </body>
    </html>
  )
}
