"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/logo"
import { Menu, X } from "lucide-react" // Иконки меню

const nav: { label: string; href: string }[] = [
  { label: "О клубе", href: "#about" },
  { label: "Карта полей", href: "#map" },
  { label: "Услуги", href: "#services" },
  { label: "Членство в клубе", href: "#membership-benefits" },
  { label: "Галлерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
]

export function Header() {
  const [hidden, setHidden] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Состояние мобильного меню
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 200 && !isMenuOpen) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // Блокируем скролл сайта при открытом меню
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
  }, [isMenuOpen])

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] h-[70px] md:h-[100px]"
      >
        {/* Блюр и фон (только если меню закрыто) */}
        {!isMenuOpen && (
          <>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/95 via-background/60 to-transparent" />
            <div
              className="pointer-events-none absolute inset-0 backdrop-blur-l"
              style={{
                maskImage: "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
              }}
            />
          </>
        )}

        <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-6 md:px-[40px]">
          
          {/* КНОПКА МЕНЮ (Только Mobile) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-brand-tertiary bg-card text-brand-primary md:hidden z-[70]"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* НАВИГАЦИЯ (Только Desktop) */}
          <nav className="hidden md:flex flex-col gap-1.5 h-10" aria-label="Main navigation">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[15px] font-medium tracking-[-0.45px] text-brand-secondary transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ЛОГОТИП (Всегда по центру) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Logo className="pointer-events-auto" />
          </div>

          {/* КНОПКИ (Desktop + одна главная на Mobile) */}
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button className="hidden sm:inline-flex rounded-[30px] border border-dashed border-brand-tertiary bg-card/80 px-[15px] py-2.5 font-sans text-[15px] text-brand-tertiary md:inline-flex">
              Статус
            </button>
            <button className="rounded-[30px] bg-primary px-[14px] py-2.5 font-sans text-[13px] md:text-[15px] font-medium tracking-[-0.45px] text-[#f2eee6] shadow-sm transition-all hover:bg-primary/90">
              <span className="hidden md:inline">Забронировать игру</span>
              <span className="md:hidden">Запись</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* МОБИЛЬНОЕ МЕНЮ (Overlay) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[55] bg-[#F2EEE6] flex flex-col pt-[100px] px-8"
          >
            <div className="flex flex-col gap-6 mt-10">
              {nav.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)} // Закрыть при клике
                  className="font-heading text-4xl uppercase tracking-tighter text-brand-primary border-b border-dashed border-brand-tertiary pb-4"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            
            <div className="mt-auto mb-10 flex flex-col gap-4">
               <p className="font-sans text-brand-tertiary text-sm">Forest Hills Golf Club</p>
               <p className="font-sans text-brand-primary text-lg">+7 (999) 000-00-00</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}