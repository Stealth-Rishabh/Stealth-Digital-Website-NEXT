import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2024",
      excerpt: "Explore the latest trends and technologies shaping the digital marketing landscape this year.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Digital Marketing",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications",
      excerpt: "Learn the best practices for creating web applications that can handle growth and traffic spikes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      author: "Mike Chen",
      date: "March 12, 2024",
      category: "Web Development",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "SEO Strategies That Actually Work",
      excerpt: "Discover proven SEO techniques that will help improve your website's search engine rankings.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "SEO",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Psychology of User Experience Design",
      excerpt: "Understanding user behavior and psychology to create more effective and engaging digital experiences.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop",
      author: "David Kim",
      date: "March 8, 2024",
      category: "UX Design",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Mobile-First Design Principles",
      excerpt: "Why mobile-first design is crucial for modern web development and how to implement it effectively.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      author: "Lisa Wang",
      date: "March 5, 2024",
      category: "Web Development",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Content Marketing Trends for 2024",
      excerpt: "Stay ahead of the curve with these emerging content marketing trends and strategies.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      author: "Alex Thompson",
      date: "March 3, 2024",
      category: "Content Marketing",
      readTime: "9 min read"
    }
  ]

  const categories = ["All", "Digital Marketing", "Web Development", "SEO", "UX Design", "Content Marketing"]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and tips from our digital marketing experts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full bg-white text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">{blogPosts[0].author}</p>
                      <p className="text-sm text-gray-500">{blogPosts[0].date}</p>
                    </div>
                  </div>
                  <Link
                    href={`/blog/future-of-digital-marketing-2024`}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  <Link href={`/blog/${post.id === 1 ? 'future-of-digital-marketing-2024' : post.id === 2 ? 'building-scalable-web-applications' : post.id === 3 ? 'seo-strategies-that-actually-work' : post.id === 4 ? 'psychology-of-user-experience-design' : post.id === 5 ? 'mobile-first-design-principles' : 'content-marketing-trends-2024'}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id === 1 ? 'future-of-digital-marketing-2024' : post.id === 2 ? 'building-scalable-web-applications' : post.id === 3 ? 'seo-strategies-that-actually-work' : post.id === 4 ? 'psychology-of-user-experience-design' : post.id === 5 ? 'mobile-first-design-principles' : 'content-marketing-trends-2024'}`}
                    className="text-blue-600 font-medium hover:text-blue-700 text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-6 opacity-90">
            Subscribe to our newsletter for the latest digital marketing insights and tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
