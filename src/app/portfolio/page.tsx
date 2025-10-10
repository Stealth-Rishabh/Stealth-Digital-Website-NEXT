import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      description: "A modern e-commerce platform with advanced features and seamless user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "Digital Marketing Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description: "Comprehensive digital marketing strategy that increased client's online presence by 300%.",
      technologies: ["SEO", "Social Media", "PPC", "Content Marketing"]
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      description: "Cross-platform mobile application with real-time features and offline capabilities.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"]
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop",
      description: "Complete brand identity package including logo, guidelines, and marketing materials.",
      technologies: ["Adobe Creative Suite", "Figma", "Illustrator", "Photoshop"]
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      description: "Analytics dashboard for SaaS platform with real-time data visualization.",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"]
    },
    {
      id: 6,
      title: "SEO Optimization",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
      description: "Complete SEO overhaul that improved organic traffic by 250% in 6 months.",
      technologies: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"]
    }
  ]

  const categories = ["All", "Web Development", "Digital Marketing", "Mobile Development", "Branding", "SEO"]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we&apos;ve helped businesses achieve their digital goals.
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
