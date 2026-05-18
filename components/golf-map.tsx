"use client"

import { useState } from "react"
import Image from "next/image"

type Hole = {
  hole: number
  par: number
  distances: { I: number; II: number; III: number; IV: number }
  x: number // в процентах
  y: number // в процентах
}

// ВАЖНО: Тебе нужно будет подправить x и y под твою картинку
const holes: Hole[] = [
  { hole: 1,  par: 4, distances: { I: 380, II: 355, III: 330, IV: 290 }, x: 35, y: 65 },
  { hole: 2,  par: 3, distances: { I: 210, II: 195, III: 180, IV: 160 }, x: 42, y: 55 },
  { hole: 3,  par: 5, distances: { I: 510, II: 488, III: 460, IV: 420 }, x: 50, y: 45 },
  { hole: 4,  par: 4, distances: { I: 410, II: 390, III: 370, IV: 330 }, x: 58, y: 50 },
  { hole: 5,  par: 5, distances: { I: 520, II: 492, III: 468, IV: 420 }, x: 65, y: 60 },
  { hole: 10, par: 3, distances: { I: 295, II: 264, III: 252, IV: 203 }, x: 75, y: 70 },
]

export function GolfMap() {
  const [activeHole, setActiveHole] = useState<Hole>(holes[0])

  return (
    <section id="map" className="w-full bg-[#F2EEE6] px-6 py-20 md:px-[40px] md:py-20">
      <div className="mx-auto max-w-[1440px]">
        
        {/* ЗАГОЛОВОК В СТИЛЕ FIGMA */}
        <div className="mb-4 flex items-end justify-between pb-8">
          <h2 className="font-display text-7xl italic text-[#476556] md:text-7xl leading-none">
            Наши поля
          </h2>
          <div className="text-right">
            <p className="font-heading text-xl uppercase tracking-widest text-[#476556]">
              18 Лунок
            </p>
            <p className="font-sans text-sm text-[#668073]">Чемпионское поле</p>
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-4">
          
          {/* КОНТЕЙНЕР КАРТЫ (3 КОЛОНКИ) */}
          <div className="relative lg:col-span-3 aspect-[4/3] md:aspect-video w-full overflow-hidden rounded-xl bg-white/20 shadow-inner">
            <Image
              src="/images/golf-map.jpg"
              alt="Карта поля"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              priority
            />

            {/* ТОЧКИ НА КАРТЕ */}
            <div className="absolute inset-0">
              {holes.map((h) => {
                const isActive = activeHole.hole === h.hole
                return (
                  <button
                    key={h.hole}
                    onClick={() => setActiveHole(h)}
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
                  >
                    <div className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isActive ? "scale-125 border-[#476556] bg-white shadow-xl" : "border-white/50 bg-[#476556]/80 hover:bg-[#476556]"
                    }`}>
                      <span className={`font-heading text-xs ${isActive ? "text-[#476556]" : "text-white"}`}>
                        {h.hole}
                      </span>
                      {isActive && (
                        <span className="absolute -inset-1 animate-ping rounded-full border border-[#476556]/30" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* КНОПКИ ПЕРЕКЛЮЧЕНИЯ ЛУНОК ВНУТРИ КАРТЫ (MOBILE) */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-2 lg:hidden">
              {holes.map((h) => (
                <button
                  key={h.hole}
                  onClick={() => setActiveHole(h)}
                  className={`flex-shrink-0 px-4 py-2 font-heading text-xs rounded-full border transition-all ${
                    activeHole.hole === h.hole ? "bg-[#476556] text-white border-[#476556]" : "bg-white/80 backdrop-blur-sm border-transparent"
                  }`}
                >
                  ЛУНКА {h.hole}
                </button>
              ))}
            </div>
          </div>

          {/* ИНФОРМАЦИОННАЯ КАРТОЧКА (1 КОЛОНКА) */}
          <div className="flex flex-col justify-start">
            <div className="rounded-lg bg-[#FFFBF2] p-8 shadow-sm border border-[#ccc9c2] border-dashed">
              <div className="mb-6 border-b border-[#ccc9c2] pb-4">
                <h3 className="font-heading text-5xl text-[#476556]">ЛУНКА {activeHole.hole}</h3>
                <div className="mt-2 inline-block rounded bg-[#476556] px-3 py-1 font-heading text-white">
                  PAR {activeHole.par}
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-heading text-xs uppercase tracking-tighter text-[#82998d]">Дистанция (метры)</p>
                {(Object.entries(activeHole.distances) as [string, number][]).map(([tee, dist]) => (
                  <div key={tee} className="flex items-center justify-between border-b border-[#ccc9c2]/50 pb-2">
                    <span className="font-heading text-[#476556]">{tee} </span>
                    <span className="font-sans font-bold text-[#476556]">{dist} м</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full bg-[#476556] py-4 font-heading text-sm uppercase tracking-widest text-white transition-all hover:bg-[#354d41]">
                Забронировать это время
              </button>
            </div>

            {/* ГИД ПО ЛУНКАМ ДЛЯ DESKTOP */}
            <div className="mt-8 hidden lg:grid grid-cols-3 gap-2">
              {holes.map((h) => (
                <button
                  key={h.hole}
                  onClick={() => setActiveHole(h)}
                  className={`py-2 font-heading text-xs border rounded transition-all ${
                    activeHole.hole === h.hole ? "bg-[#476556] text-white border-[#476556]" : "bg-white border-[#ccc9c2] text-[#668073] hover:border-[#476556]"
                  }`}
                >
                  Л {h.hole}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}