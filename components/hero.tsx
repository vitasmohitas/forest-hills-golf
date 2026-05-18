export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent pb-24 pt-[120px] md:pt-[150px]">
      {/* Content matches reference: centered stack, script overlaps headline */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center md:px-[30px]">
        <p className="font-display text-[clamp(2.75rem,7vw,5rem)] leading-[0.85] text-foreground md:text-[clamp(3.25rem,7.5vw,5.25rem)]">
          Golf Club
        </p>

        <h1 className="-mt-1 font-heading text-[clamp(3.25rem,15vw,10.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.045em] text-foreground md:-mt-3 md:leading-[0.9] md:tracking-[-0.05em]">
          <span className="block">Forest Hills</span>
        </h1>

        <div className="mx-auto mt-8 max-w-[28rem] md:mt-10">
          <p className="font-sans text-[15px] font-medium leading-[1.45] tracking-[-0.45px] text-brand-secondary">
            Легенды ходили по нашим полям, и история
            <br />
            была написана на наших играх
            <br />
            В Forest Hills каждый найдет для себя место отдыха и развлечений
            <br />
          </p>
        </div>

        <div className="mt-10 flex w-full justify-center md:mt-12">
          <button
            type="button"
            className="w-full max-w-[405px] rounded-[5px] bg-primary px-[15px] py-[15px] font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.6px] text-[#f2eee6] transition-colors hover:bg-primary/90"
          >
            Забронировать игру
          </button>
        </div>
      </div>
    </section>
  )
}
