export function CTASection() {
  return (
    <div className="flex items-start justify-between gap-6">
      <div className="flex-1">
        <h2 className="text-pretty font-sans text-3xl font-extrabold leading-tight md:text-4xl text-black">
          <span className="relative mr-2 inline-block align-middle">
          <span className="bg-[#E9D175] rounded px-4 py-1 ">Ready</span>
          </span>
          <span className="align-middle">href Boost your</span>
          <br />
          <span className="align-middle">Digital product</span>
          <br />
          <span className="align-middle">marketing?</span>
        </h2>
        <p className="mt-4 text-sm text-gray-600">Approach focuses on capturing the essential</p>
      </div>

      <div className="flex flex-col items-end gap-3">
        <a
          href="#get-started"
          className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gray-800 transition-colors"
        >
          Get Started
          <svg className="ml-2 size-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M7 5l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <svg className="size-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M8.5 13.5l-3-3 1.4-1.4L8.5 10.7l4.6-4.6L14.5 7l-6 6.5z" />
          </svg>
          <span>No Credit card requirement</span>
        </div>
      </div>
    </div>
  )
}
