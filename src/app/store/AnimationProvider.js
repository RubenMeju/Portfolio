'use client'

import { createContext, useMemo } from 'react'
import { useState } from 'react'

export const AnimationContext = createContext({
  isOpen: false,
  setIsOpen: () => {}
})

export default function AnimationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen])
  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  )
}
