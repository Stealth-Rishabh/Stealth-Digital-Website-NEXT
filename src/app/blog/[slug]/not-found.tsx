import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <Image
            src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=400&h=300&fit=crop"
            alt="Blog post not found"
            width={400}
            height={300}
            className="rounded-lg mx-auto"
          />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Post Not Found
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the blog post you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          <div className="text-sm text-gray-500">
            or
          </div>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}