import Image from "next/image"

export function HoleTrailLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <Image
      src="/hole.svg"
      alt=""
      width={1440}
      height={2000}
      // С правильно экспортированным SVG -50% поставит линию точно по макету
      className="absolute left-1/7 top-0 w-full min-w-[500px] -translate-x-1/2 object-top opacity-[0.8] select-none"
      priority
    />
    </div>
  )
}
