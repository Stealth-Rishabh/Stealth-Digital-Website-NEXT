import { ArticleCard } from "./article-card"
import { CTASection } from "./cta"
import { StarsDecoration } from "./stars"

export default function Blog() {
  const articles = [
    {
      id: 1,
      date: "September 20, 2025",
      title: "Achieving Fashion Elegan Runway href Real Life",
      author: {
        name: "T. Cosentino",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80&auto=format&fit=crop",
      },
      image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      date: "September 21, 2025",
      title: "Remote work made easy way better hrefols.",
      author: {
        name: "S. Overthfen",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=80&auto=format&fit=crop",
      },
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      date: "September 25, 2025",
      title: "Fashion Elegance Runs way href Real Life",
      author: {
        name: "N. Harwood",
        avatar: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=80&auto=format&fit=crop",
      },
      image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=800&auto=format&fit=crop",
    },
  ]

  return (
    <main className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen">
      {/* Decorative stars */}
      <StarsDecoration />
      <section className="mx-auto max-w-6xl px-4 pt-16 md:pt-20 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          {/* Left decorative element */}
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <h1 className="text-pretty font-sans text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-black">
            Browse our Articles on Digital marketing and growth
          </h1>
          {/* Right decorative element */}
          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
        </div>
        <p className="mt-3 text-sm md:text-base text-gray-600">
          Digital marketing & advertising approach focuses on capturing the essential
        </p>

        {/* Articles */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {articles.map((a) => (
            <ArticleCard key={a.id} {...a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <CTASection />
      </section>
    </main>
  )
}
