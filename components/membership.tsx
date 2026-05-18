import { Check } from "lucide-react"

const plans = [
  {
    name: "Гость",
    price: "от 10 000 ₽",
    period: "за раунд",
    featured: false,
    features: [
      { text: "Доступ к полю по записи", included: true },
      { text: "Аренда оборудования", included: true },
      { text: "Доступ в ресторан", included: true },
      { text: "Скидки на обучение", included: false },
      { text: "Приоритетное бронирование", included: false },
      { text: "Приглашение гостей", included: false },
    ],
  },
  {
    name: "Членство в клубе",
    price: "250 000 ₽",
    period: "в год",
    featured: true,
    features: [
      { text: "Неограниченный доступ к полю", included: true },
      { text: "Бесплатная аренда оборудования", included: true },
      { text: "Скидка 20% в ресторане", included: true },
      { text: "Скидки на обучение 30%", included: true },
      { text: "Приоритетное бронирование", included: true },
      { text: "2 гостевых визита в месяц", included: true },
    ],
  },
  {
    name: "Пожизненное членство",
    price: "1 500 000 ₽",
    period: "единоразово",
    featured: false,
    features: [
      { text: "Все привилегии клубного членства", included: true },
      { text: "Передача членства по наследству", included: true },
      { text: "VIP-обслуживание", included: true },
      { text: "Персональный кэдди", included: true },
      { text: "Безлимитные гостевые визиты", included: true },
      { text: "Участие в закрытых турнирах", included: true },
    ],
  },
]

export function Membership() {
  return (
    <section id="membership" className="flex min-h-screen items-center px-6 py-10s md:px-[40px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 className="mb-4 font-heading text-3xl tracking-[-0.03em] text-foreground md:text-4xl">
          Членство в клубе
        </h2>
        <p className="mb-12 max-w-2xl font-sans text-[15px] font-medium leading-[1.3] tracking-[-0.45px] text-brand-secondary">
          Выберите подходящий тариф и станьте частью элитного сообщества
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-sm p-8 transition-all duration-300 hover:shadow-lg ${
                plan.featured
                  ? "border-2 border-foreground bg-card"
                  : "border border-transparent bg-card/80"
              }`}
            >
              <h3 className="mb-2 font-heading text-xl tracking-wide text-foreground">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="font-heading text-3xl text-foreground">
                  {plan.price}
                </span>
                <span className="ml-2 text-sm text-foreground/60">
                  {plan.period}
                </span>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border ${
                        feature.included
                          ? "border-foreground bg-foreground"
                          : "border-foreground/30 bg-transparent"
                      }`}
                    >
                      {feature.included && (
                        <Check className="h-3 w-3 text-primary-foreground" />
                      )}
                    </div>
                    <span
                      className={`text-sm leading-relaxed ${
                        feature.included
                          ? "text-foreground"
                          : "text-foreground/40"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`w-full rounded-[5px] py-3 font-heading text-[20px] font-semibold tracking-[-0.6px] transition-all duration-300 ${
                  plan.featured
                    ? "bg-foreground text-[#f2eee6] hover:bg-foreground/90"
                    : "border border-foreground/30 bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-[#f2eee6]"
                }`}
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
