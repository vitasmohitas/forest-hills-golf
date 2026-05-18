"use client"

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1,         // Плавность (0.1 - стандарт)
        duration: 0.8,      // Длительность прокрутки
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}