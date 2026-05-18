import { cn } from "@/lib/utils"

type SectionTitleProps = {
  left: string
  right?: string
  className?: string
}

/** Figma «title»: pill on bg-card, 15px medium, dot separator. */
export function SectionTitle({ left, right, className }: SectionTitleProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[5px] bg-card px-1.5 py-1",
        className,
      )}
    >
      <span className="font-sans font-medium text-[15px] leading-[1.1] tracking-[-0.45px] text-foreground">
        {left}
      </span>
      {right ? (
        <>
          <span className="size-[3px] shrink-0 rounded-full bg-foreground" aria-hidden />
          <span className="font-sans font-medium text-[15px] leading-[1.1] tracking-[-0.45px] text-foreground">
            {right}
          </span>
        </>
      ) : null}
    </div>
  )
}
