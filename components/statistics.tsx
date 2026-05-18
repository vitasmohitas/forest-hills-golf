const stats = [
  { value: "18", label: "лунок на поле" },
  { value: "120+", label: "лет истории" },
  { value: "50", label: "турниров в сезон" },
  { value: "Топ 100", label: "полей Европы" },
]

export function Statistics() {
  return (
    <section id="stats" className="w-full bg-background px-6 py-16 md:px-[40px] md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-px bg-surface-dash md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex min-h-[195px] flex-col justify-between bg-background p-[20px]"
            >
              <p className="font-heading text-[clamp(3.5rem,10vw,6.875rem)] font-bold leading-[1.1] tracking-[-0.03em] text-brand-tertiary">
                {stat.value}
              </p>
              <p className="font-sans text-[18px] font-medium leading-[1.1] tracking-[-0.6px] text-foreground md:text-[20px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
