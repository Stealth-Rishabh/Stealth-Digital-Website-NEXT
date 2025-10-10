import React from 'react'
import Image from 'next/image'
import { ArrowRight, X, Star } from 'lucide-react'

const CTABanner = () => {
  return (
    <section className='bg-white py-16'>
        <section className="relative py-20 bg-yellow-50 overflow-hidden max-w-7xl mx-auto rounded">
      {/* Decorative Background Elements - Radiating Lines */}
      <div className="absolute inset-0">
        {/* Radiating curved lines from various points */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400">
          {/* Lines radiating from top left */}
          <path
            d="M100,50 Q200,100 300,80 Q400,60 500,90 Q600,120 700,100"
            stroke="#374151"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M150,80 Q250,130 350,110 Q450,90 550,120 Q650,150 750,130"
            stroke="#374151"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          {/* Lines radiating from center */}
          <path
            d="M600,200 Q700,150 800,180 Q900,210 1000,190 Q1100,170 1150,200"
            stroke="#374151"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M600,200 Q500,150 400,180 Q300,210 200,190 Q100,170 50,200"
            stroke="#374151"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          {/* Lines radiating from bottom right */}
          <path
            d="M1000,300 Q900,250 800,280 Q700,310 600,290 Q500,270 400,300"
            stroke="#374151"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
        </svg>

        {/* Abstract oval shapes */}
        <div className="absolute top-20 left-20 w-32 h-20 border border-gray-400 rounded-full opacity-20"></div>
        <div className="absolute top-32 right-32 w-24 h-16 border border-gray-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-32 w-28 h-18 border border-gray-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-32 right-20 w-20 h-14 border border-gray-400 rounded-full opacity-20"></div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute bottom-4 left-4">
        <X className="w-8 h-8 text-gray-800" />
      </div>
      <div className="absolute top-4 right-4">
        <Star className="w-8 h-8 text-gray-800 fill-current" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Left Profile Image */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative w-48 h-60">
              {/* Oval frame */}
              <div className="absolute inset-0 border-2 border-gray-400 rounded-full opacity-30"></div>
              <div className="relative w-44 h-56 mx-auto mt-2 rounded-full overflow-hidden bg-blue-100">
                <Image
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Team Member"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
            </div>
          </div>

          {/* Central Content */}
          <div className="text-center flex-1 px-8">
            <h2 className="text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Ready to Boost your{' '}
              <span className="block">Digital product</span>
              <span className="block">marketing ?</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Approach focuses on capturing the essential
            </p>
            <button className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Profile Image */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative w-48 h-60">
              {/* Oval frame */}
              <div className="absolute inset-0 border-2 border-gray-400 rounded-full opacity-30"></div>
              <div className="relative w-44 h-56 mx-auto mt-2 rounded-full overflow-hidden bg-orange-100">
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Team Member"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  )
}

export default CTABanner
