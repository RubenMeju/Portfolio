'use client'
import { useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
import { useMediaQuery } from './hooks/useMediaQuery'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const isSmall = useMediaQuery('(max-width: 1024px)')

  const variants = isSmall
    ? {
        open: {
          width: '20%',
          transform: ' rotateY(-5deg)'
        },

        closed: {
          width: '100%',
          height: '100%'
        }
      }
    : {
        open: {
          height: '90%',
          transform: ' rotateY(-15deg)'
          // backgroundColor: 'orange'
        },
        closed: {
          width: '100%',
          height: '100%'
        }
      }

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className='container'>
          <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
          <motion.div
            className='childrens'
            initial='closed'
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </div>
      </body>
    </html>
  )
}
