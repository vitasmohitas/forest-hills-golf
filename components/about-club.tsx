import { SectionTitle } from "@/components/section-title"

const points = [
  {
    n: "01",
    title: "Этикет",
    description: "Строгий этикет и уважение к партнёрам по игре — основа культуры клуба, передаваемой из поколения в поколение.",
  },
  {
    n: "02",
    title: "Турниры",
    description: "Турниры проводятся регулярно с 1930 года. Клуб принимает как камерные кубки, так и международные чемпионаты.",
  },
  {
    n: "03",
    title: "Семейные ценности",
    description: "Членство нередко передаётся внутри семей. Клуб объединяет поколения, хранящие общие традиции.",
  },
  {
    n: "04",
    title: "Приватность",
    description: "Закрытость и конфиденциальность — неотъемлемая часть атмосферы. Каждый член клуба ценит право на уединение.",
  },
]

export function AboutClub() {
  return (
    <section id="about" className="relative z-10 w-full bg-transparent px-6 py-20 md:px-[40px] md:py-10">
      <div className="mx-auto max-w-[1440px]">
        
        {/* ВЕРХНЯЯ ЧАСТЬ: Oswald для заголовка, Great Vibes для акцентов */}
        <div className="md:grid md:grid-cols-4 md:gap-x-10">
          <div className="md:col-span-1">
            {/* Предполагаем, что SectionTitle внутри использует font-heading */}
            <SectionTitle left="О клубе" right="История" />
          </div>
          
          <div className="mt-8 md:mt-0 md:col-start-2 md:col-span-3">
            <p className="font-sans text-[clamp(1.25rem,2.2vw,2.3rem)] font-normal leading-[1.2] tracking-tight text-[#476556]">
              <span className="font-display text-[1.4em] leading-none text-[#476556] mr-2">Forest Hills Golf Club</span> 
              был основан в 1928 году группой предпринимателей и дипломатов, увлечённых гольфом и английской культурой досуга. 
              Первое поле из 18 лунок было спроектировано британским архитектором 
              <span className="font-display text-[1.4em] leading-none text-[#476556] mx-2">George Henderson</span>, 
              чья идея заключалась в том, чтобы безупречно интегрировать игру в ландшафт старого загородного парка.
            </p>
          </div>
        </div>

        {/* СРЕДНЯЯ ЧАСТЬ: Карточки на фоне #FFFBF2 с сеткой border-surface-dash */}
        <div className="mt-24 md:grid md:grid-cols-4 md:gap-x-10">
          {/* Левая половина пустая (2 колонки) */}
          <div className="hidden md:block md:col-span-2"></div>
          
          {/* Сетка карточек (3 и 4 колонки) */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 border-t border-l border-dashed border-[#ccc9c2]">
            {points.map((p) => (
              <div
                key={p.n}
                className="flex flex-col p-6 md:p-6 min-h-[300px] bg-[#FFFBF2] border-r border-b border-dashed border-[#ccc9c2]"
              >
                {/* Номер шрифтом Oswald */}
                <p className="font-heading text-[64px] leading-none text-[#82998d]/40 mb-10">
                  {p.n}
                </p>
                <div className="mt-auto">
                  {/* Заголовок шрифтом Oswald */}
                  <p className="font-heading text-[20px] uppercase tracking-wider text-[#476556] mb-3">
                    {p.title}
                  </p>
                  {/* Описание шрифтом Inter */}
                  <p className="font-sans text-[15px] leading-relaxed text-[#668073]">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* НИЖНЯЯ ЧАСТЬ: Мелкий текст Inter в две колонки справа */}
        <div className="mt-16 md:grid md:grid-cols-4 md:gap-x-10">
          <div className="hidden md:block md:col-span-2"></div>
          
          <div className="md:col-span-1">
            <p className="font-sans text-[14px] leading-relaxed text-[#668073] pr-6">
              Клубом управляет совет директоров, в который входят представители делового и дипломатического сообщества. Исполнительная команда включает управляющего директора и комитет по турнирам.
            </p>
          </div>
          <div className="md:col-span-1">
            <p className="font-sans text-[14px] leading-relaxed text-[#668073]">
              С 1995 года клуб ежегодно проводит благотворительный турнир «Гольф во благо»; средства направляются на программы поддержки здоровья и образования детей.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}