"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export function ScrollReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Начало: прозрачный и чуть ниже
      whileInView={{ opacity: 1, y: 0 }} // При скролле: проявляется и встает на место
      viewport={{ once: true, margin: "-100px" }} // Анимация сработает один раз
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }} // Плавный "дорогой" эффект
    >
      {children}
    </motion.div>
  )
}