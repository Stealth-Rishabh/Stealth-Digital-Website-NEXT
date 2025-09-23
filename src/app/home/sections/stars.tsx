export function StarsDecoration() {
  return (
    <>
      {/* Left decorative element - black asterisk */}
      <div className="pointer-events-none absolute left-8 top-24 hidden md:block">
        <Asterisk className="size-6 text-black" />
      </div>
      {/* Right decorative element - purple asterisk */}
      <div className="pointer-events-none absolute right-8 top-16 hidden md:block">
        <Asterisk className="size-6 text-purple-600" />
      </div>
    </>
  )
}

function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="decorative asterisk">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

