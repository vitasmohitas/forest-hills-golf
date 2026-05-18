"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Каков дресс-код клуба?",
    answer:
      "На поле обязательны воротник-поло, брюки или шорты до колена (мужчины), а также юбки или брюки (женщины). Джинсы, спортивные костюмы и майки не допускаются. В ресторане клубхауса действует аналогичный дресс-код — smart casual.",
  },
  {
    question: "Можно ли начать учиться без опыта?",
    answer:
      "Да, наша Академия гольфа принимает игроков любого уровня — от полных новичков до опытных спортсменов. Для начинающих предусмотрен вводный курс из 6 занятий с сертифицированным тренером PGA.",
  },
  {
    question: "Есть ли ограничения по возрасту?",
    answer:
      "Дети от 7 лет могут посещать юниорскую программу обучения. Для игры на основном поле без сопровождения взрослых необходим возраст от 14 лет и подтверждённый гандикап.",
  },
  {
    question: "Как происходит запись на поле?",
    answer:
      "Члены клуба могут бронировать время через личный кабинет на сайте или по телефону за 7 дней. Гости бронируют не ранее чем за 3 дня при наличии свободных слотов.",
  },
  {
    question: "Предоставляется ли оборудование в аренду?",
    answer:
      "Клуб предлагает полный комплект оборудования в аренду: клюшки, мячи, специальная обувь, тележка. Гостям аренда доступна за дополнительную плату, членам клуба — бесплатно.",
  },
]

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="flex min-h-screen w-full items-center bg-background px-6 py-5 md:px-[40px]">
      <div className="mx-auto w-full max-w-[1440px]">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-3 font-sans text-[15px] font-medium uppercase tracking-[-0.45px] text-brand-secondary">
              Частые вопросы
            </p>
            <h2 className="font-sans text-[clamp(1.25rem,2.2vw,2.1875rem)] font-normal leading-[1.15] tracking-[-0.03em] text-brand-secondary">
              <span className="font-display text-[clamp(2rem,3.5vw,3.125rem)] text-foreground not-italic">
                Сообщество
              </span>{" "}
              Forest Hills — это не только спорт, но и{" "}
              <span className="font-display text-[clamp(2rem,3.5vw,3.125rem)] text-foreground not-italic leading-[0.95]">
                стиль жизни
              </span>
            </h2>
            <button
              type="button"
              className="mt-8 hidden rounded-[5px] bg-primary px-[15px] py-[15px] font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.6px] text-[#f2eee6] transition-colors hover:bg-primary/90 md:inline-flex"
            >
              Узнать больше
            </button>
          </div>

          <div className="divide-y divide-surface-dash">
            {faqs.map((faq, i) => (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="group flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span
                    className={`font-sans text-[15px] font-medium leading-relaxed tracking-[-0.45px] transition-colors duration-200 ${
                      openIndex === i ? "text-foreground" : "text-brand-secondary group-hover:text-foreground"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="mt-0.5 shrink-0 text-brand-tertiary transition-colors group-hover:text-foreground">
                    {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-60 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-sans text-[15px] font-medium leading-[1.3] tracking-[-0.45px] text-brand-secondary">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
