import { SectionTitle } from "@/components/section-title"

const benefits = [
  {
    title: "Академия и наставники",
    body: "Персональные занятия с чемпионами и скидки на обучение для детей и взрослых.",
  },
  {
    title: "Приоритетная игра",
    body: "Свободный доступ к полям в удобное время, в том числе в часы, закрытые для гостей.",
  },
  {
    title: "Турнирные привилегии",
    body: "Участие во внутренних и международных соревнованиях клуба.",
  },
  {
    title: "Клубный дом",
    body: "Закрытый доступ к лаунжам, ресторану, библиотеке и закрытым мероприятиям.",
  },
]

export function MembershipBenefits() {
  return (
    <section
      id="membership-benefits"
      className="w-full bg-background px-6 py-20 md:px-[40px] md:py-5 lg:px-[40px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionTitle left="Членство в клубе" className="mb-10 md:mb-12" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,702px)] lg:items-start lg:gap-16">
          <div className="max-w-[485px] space-y-6">
            <p className="font-sans text-[clamp(1.25rem,2.2vw,2.1875rem)] font-normal leading-[1.15] tracking-[-0.03em] text-brand-secondary">
              <span className="font-display text-[clamp(2rem,3.5vw,3.125rem)] text-foreground not-italic">
                Членство
              </span>{" "}
              в Forest Hills — это не только спорт, а{" "}
              <span className="font-display text-[clamp(2rem,3.5vw,3.125rem)] text-foreground not-italic leading-[0.95]">
                образ жизни
              </span>
              .
            </p>
            <p className="font-sans text-[15px] font-medium leading-[1.3] tracking-[-0.45px] text-brand-secondary">
              С момента основания клуб оставался закрытым сообществом. Первыми членами были предприниматели,
              дипломаты и деятели культуры. В 1930-х сюда приезжали гости из Европы, в том числе представители
              дипломатических миссий.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex min-h-[170px] flex-col justify-between border-2 border-dashed border-surface-dash bg-transparent p-[15px]"
                >
                  <p className="font-heading text-[25px] font-normal leading-[1.1] tracking-[-0.75px] text-brand-tertiary">
                    {b.title}
                  </p>
                  <p className="font-sans text-[20px] font-medium leading-[1.1] tracking-[-0.6px] text-foreground">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <button
            type="button"
            className="min-h-[50px] w-full max-w-[405px] rounded-[5px] bg-primary px-[15px] py-[15px] font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.6px] text-[#f2eee6] transition-colors hover:bg-primary/90"
          >
            Узнать подробнее
          </button>
        </div>
      </div>
    </section>
  )
}
