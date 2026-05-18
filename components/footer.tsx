"use client"

import { useState } from "react"
import { Logo } from "@/components/logo"

const navLinks = [
  { label: "Клуб", href: "#" },
  { label: "Игра", href: "#" },
  { label: "Турниры", href: "#" },
  { label: "События", href: "#" },
  { label: "Контакты", href: "#" },
]

const socialLinks = [
  { label: "ВКонтакте", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "YouTube", href: "#" },
]

const legalLinks = [
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Дизайн сайта", href: "#" },
]

export function Footer() {
  const [form, setForm] = useState({ name: "", contact: "", comment: "" })
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    setSubmitted(true)
  }

  return (
    <footer id="contacts" className="w-full bg-background">

      {/* Upper section */}
      <div className="px-6 md:px-12 lg:px-[40px] py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr_2fr] gap-12 lg:gap-8">

          {/* Col 1: Logo + nav */}
          <div className="flex flex-col gap-8">
            <Logo showWordmark />
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 2: Socials */}
          <div className="flex flex-col gap-2.5 lg:pt-14">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Col 3: Contact form in dashed border */}
          <div className="border-2 border-dashed border-brand-tertiary bg-card p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[220px] text-center gap-3">
                <p className="font-heading text-2xl text-foreground">Заявка отправлена</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <>
                <p className="font-sans text-base md:text-lg text-foreground leading-snug mb-8 max-w-sm">
                  Есть вопросы или предложения? Заполните форму — мы обязательно ответим
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-0">
                  {/* Row: Name + Phone/Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                    <input
                      type="text"
                      required
                      placeholder="Имя"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-transparent border-b border-foreground/25 focus:border-foreground outline-none py-3 font-sans text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Телефон / Email"
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className="bg-transparent border-b border-foreground/25 focus:border-foreground outline-none py-3 font-sans text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200"
                    />
                  </div>

                  {/* Comment */}
                  <textarea
                    placeholder="Комментарий"
                    rows={3}
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="bg-transparent border-b border-foreground/25 focus:border-foreground outline-none py-3 mt-4 font-sans text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 resize-none"
                  />

                  {/* Consent checkbox */}
                  <label className="mt-6 flex items-start gap-3 cursor-pointer group select-none">
                    <span className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        required
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="peer sr-only"
                      />
                      <span className="block w-4 h-4 border border-foreground/40 rounded-[3px] bg-transparent transition-colors duration-200 peer-checked:bg-foreground peer-checked:border-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-foreground/40" />
                      <svg
                        viewBox="0 0 16 16"
                        className="absolute inset-0 w-4 h-4 text-primary-foreground opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 8.5 6.5 12 13 5" />
                      </svg>
                    </span>
                    <span className="font-sans text-xs leading-relaxed text-foreground/70 group-hover:text-foreground transition-colors duration-200">
                      Я согласен с обработкой персональных данных и{" "}
                      <a href="#" className="underline underline-offset-2 hover:text-foreground">
                        политикой конфиденциальности
                      </a>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!agreed}
                    className="mt-5 w-full bg-foreground text-primary-foreground font-sans text-sm tracking-widest uppercase py-4 rounded-md hover:bg-foreground/90 active:scale-[0.99] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
                  >
                    Узнать подробнее
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>


      {/* Lower section */}
      <div className="px-6 md:px-12 lg:px-[50px] pt-10 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr_2fr] gap-10 lg:gap-8 items-end">

          {/* Legal links */}
          <div className="flex flex-col gap-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-foreground/50 hover:text-foreground/80 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Address + year */}
          <div className="flex flex-col gap-1">
            <p className="font-sans text-xs text-foreground/60 leading-relaxed">
              Форест Хиллс,<br />
              Московская область, 143000<br />
              Россия
            </p>
            <p className="font-sans text-xs text-foreground/40 mt-3">
              2025 foresthills
            </p>
          </div>

          {/* Phone + email */}
          <div className="flex flex-col gap-1">
            <p className="font-sans text-sm text-foreground/70 tracking-wide">
              +7 (912) 130–12–12
            </p>
            <a
              href="mailto:foresthills@mail.ru"
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-none hover:text-foreground/80 transition-colors duration-200 break-all"
            >
              foresthills@mail.ru
            </a>
          </div>

        </div>
      </div>

    </footer>
  )
}
