import Image from "next/image"
import Link from "next/link"

type Props = {
  date: string
  title: string
  author: { name: string; avatar: string }
  image: string
}

export function ArticleCard({ date, title, author, image }: Props) {
  return (
    <article className="group relative">
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={640}
          height={620}
          className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          priority={false}
        />
        {/* White overlay box at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-b-xl">
          <div className="mb-2">
            <span className="text-xs text-gray-500 font-medium text-left">{date}</span>
          </div>
          <h3 className="text-sm font-semibold leading-tight text-black mb-3">{title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 overflow-hidden rounded-full">
                <Image
                  src={author.avatar || "/placeholder.svg"}
                  alt={`${author.name} avatar`}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-cover"
                />
              </span>
              <span className="text-xs text-gray-600 font-medium">{author.name}</span>
            </div>
            <Link
              href={`/blog/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
              className="group/read inline-flex items-center gap-1 text-xs font-semibold text-black hover:text-gray-600 transition-colors"
              aria-label="Read more"
            >
              Read More
              <svg
                className="size-3 transition-transform group-hover/read:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
