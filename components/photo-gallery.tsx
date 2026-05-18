import Image from "next/image"
import { SectionTitle } from "@/components/section-title"

const tiles = [
  // Верхний ряд
  { id: 1, src: "https://images.unsplash.com/photo-1500932334442-8761ee4810a7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", className: "top-[0%] left-[15%] w-[10%] h-[15%]" },
  { id: 2, src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=800&auto=format&fit=crop", className: "top-[0%] left-[30%] w-[20%] h-[28%]" },
  { id: 3, src: "https://images.unsplash.com/photo-1562204320-31975a5e09ce?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", className: "top-[0%] left-[51%] w-[10%] h-[15%]" },
  
  // Средний ряд
  { id: 4, src: "https://images.unsplash.com/photo-1546555074-9b423ab59c54?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", className: "top-[70%] left-[2%] w-[14%] h-[22%]" },
  { id: 5, src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=600&auto=format&fit=crop", className: "top-[70%] left-[43%] w-[14%] h-[22%]" },
  { id: 6, src: "https://images.unsplash.com/photo-1597369199842-f08ca157e015?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", className: "top-[70%] left-[58%] w-[21%] h-[32%]" },
  { id: 7, src: "https://images.unsplash.com/photo-1623567341691-1f47b5cf949e?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", className: "top-[70%] left-[91%] w-[8%] h-[11%]" },
  
  // Нижний ряд
  { id: 8, src: "https://images.unsplash.com/photo-1775326420892-a233ed95ec58?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", className: "top-[105%] left-[21%] w-[21%] h-[32%]" },
  { id: 9, src: "https://images.unsplash.com/photo-1530028828-25e8270793c5?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", className: "top-[105%] left-[43%] w-[14%] h-[22%]" },
  { id: 10, src: "https://images.unsplash.com/photo-1593282153762-a41e3cceb06c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", className: "top-[105%] left-[84%] w-[14%] h-[22%]" },
]

export function PhotoGallery() {
  return (
    <section id="gallery" className="w-full h-400 bg-[#F2EEE6] px-6 py-12 md:px-[40px] md:py-12">
      <div className="mx-auto max-w-[1440px]">
        
        <div className="flex justify-center mb-16">
          <SectionTitle left="События и медиа" right="Галерея" />
        </div>

        <div className="relative w-full">
          
          {/* ТЕКСТ С СКОБКАМИ */}
          <div className="relative z-20 mb-12 flex justify-center md:absolute md:left-[45%] md:top-[35%] md:mb-0 md:w-[320px]">
            <div className="relative px-8 py-4">
              <span className="pointer-events-none absolute left-2 rotate-20 top-0 font-sans text-[60px] font-light leading-none text-[#82998d] opacity-100 md:text-[30px]">
                (
              </span>
              <p className="font-medium text-[16px] leading-90% tracking-tight text-[#668073] text-center md:text-left">
              Наша галерея запечатлила дух и наследие гольф-клуба. От места для семейного отдыха до национальных чемпионатов – каждая фотография отражает традиции, мастерство и заботу. Исследуйте моменты, которые определяют наш клуб и его выдающееся сообщество
              </p>
              <span className="pointer-events-none absolute right-5 rotate-20 bottom-2 font-sans text-[60px] font-light leading-none text-[#82998d] opacity-100 md:text-[30px]">
                )
              </span>
            </div>
          </div>

          {/* ПЛИТКИ ФОТОГРАФИЙ — ИСПРАВЛЕНА ВЫСОТА КОНТЕЙНЕРА */}
          <div className="relative w-full md:h-[900px]">
            {/* Мобильная сетка */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {tiles.map((t) => (
                <div
                  key={t.id}
                  className="relative h-[200px] overflow-hidden rounded-sm bg-[#D9D5CE] shadow-sm"
                >
                  <Image
                    src={t.src}
                    alt={`Гольф клуб фото ${t.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Десктопная асимметричная раскладка */}
            <div className="hidden md:block">
              {tiles.map((t) => (
                <div
                  key={t.id}
                  className={`absolute overflow-hidden rounded-sm bg-[#D9D5CE] shadow-sm transition-transform duration-500 hover:z-30 hover:scale-105 ${t.className}`}
                >
                  <Image
                    src={t.src}
                    alt={`Гольф клуб фото ${t.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center md:mt-100">
          <button
            type="button"
            className="min-h-[50px] w-full max-w-[405px] rounded-[5px] bg-primary px-[15px] py-[15px] font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.6px] text-[#f2eee6] transition-colors hover:bg-primary/90"
          >
            Подробнее
          </button>
        </div>
      </div>
    </section>
  )
}