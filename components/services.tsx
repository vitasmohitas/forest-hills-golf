import Image from "next/image"
import { SectionTitle } from "@/components/section-title"

const services = [
  {
    title: "Игра на поле",
    description: "18 лунок мирового класса среди живописных ландшафтов",
    image: "/images/golf-course.jpg",
  },
  {
    title: "Гольф-академия",
    description: "Профессиональное обучение для всех уровней подготовки",
    image: "/images/golf-academy.jpg",
  },
  {
    title: "Ресторан ClubHouse",
    description: "Изысканная кухня с видом на поле",
    image: "/images/clubhouse.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="flex min-h-screen items-center px-6 py-5 md:px-[40px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionTitle left="Услуги" right="Поля и академия" className="mb-10 md:mb-12" />
        <h2 className="sr-only">Наши услуги</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-all duration-500 group-hover:bg-foreground/10" />
              </div>
              <h3 className="mb-2 font-heading text-xl tracking-wide text-foreground transition-opacity duration-300 group-hover:opacity-70">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70 transition-opacity duration-300 group-hover:opacity-60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
