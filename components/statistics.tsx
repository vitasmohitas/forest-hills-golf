const stats = [
  { value: "18", label: "лунок на поле" },
  { value: "120+", label: "лет истории" },
  { value: "50", label: "турниров в сезон" },
  { value: "Топ 100", label: "полей Европы" },
]

export function Statistics() {
  return (
    <section id="stats" className="relative z-10 w-full bg-transparent px-6 py-16 md:px-[40px] md:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* 
           1. Убираем gap-px и bg-surface-dash. 
           2. Добавляем border-t и border-l (верхняя и левая границы всей сетки).
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-dashed border-surface-dash">
          {stats.map((stat) => (
            <div
              key={stat.value}
              /* 
                 3. Каждой карточке даем border-r и border-b (правая и нижняя границы).
                 4. Теперь линии будут видны, а фон внутри — прозрачный.
              */
              className="flex min-h-[195px] flex-col justify-between p-[20px] border-r border-dashed border-surface-dash bg-transparent"
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