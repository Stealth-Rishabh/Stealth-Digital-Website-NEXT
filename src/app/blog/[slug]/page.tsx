import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getBlogPostBySlug, getAllBlogPosts, getRelatedPosts } from '@/lib/blog-data'

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Stealth Digital Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          <div className="space-y-6">
            {/* Category and Meta */}
            <div className="flex items-center gap-4 text-sm">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                {post.category}
              </span>
              <span className="text-gray-500">{post.readTime}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{post.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <article className="prose prose-lg prose-gray max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-8 prose-p:mb-6 prose-ul:text-gray-700 prose-ul:leading-8 prose-li:text-gray-700 prose-li:mb-2 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900"
          />
        </article>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getRelatedPosts(post, 3).map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {relatedPost.category}
                    </span>
                    <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
