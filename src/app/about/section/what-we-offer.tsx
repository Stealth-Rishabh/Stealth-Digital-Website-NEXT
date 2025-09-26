import React from 'react'
import { Rocket, Target, TrendingUp, Users } from 'lucide-react'

const WhatWeOffer = () => {
  const features = [
    {
      icon: Rocket,
      title: "Empower brands to transform their marketing",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-100"
    },
    {
      icon: Target,
      title: "Set a workplace that helps people grow",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      color: "from-yellow-400 to-orange-500",
      iconBg: "bg-gradient-to-br from-yellow-400 to-orange-500",
      shadowColor: "shadow-yellow-100"
    },
    {
      icon: TrendingUp,
      title: "Grow your Website Leads and Traffic optimize",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      color: "from-cyan-500 to-blue-600",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
      shadowColor: "shadow-cyan-100"
    },
    {
      icon: Users,
      title: "Increase your social media marketing strategy",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      color: "from-pink-500 to-rose-600",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
      shadowColor: "shadow-pink-100"
    }
  ]

  return (
    <section className="py-24  relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            What We Offer
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Grow Leads and Sales with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Insanely Good
            </span>{' '}
            SEO Strategy
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with our comprehensive marketing solutions designed to drive growth and maximize your online potential.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 hover:border-gray-200 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="flex justify-center mb-8 relative z-10">
                  <div className={`w-20 h-20 rounded-2xl ${feature.iconBg} ${feature.shadowColor} shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-gray-800 transition-colors duration-300 relative z-10">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <span className="text-gray-500 font-medium">Ready to get started?</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
