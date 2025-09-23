"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10">
        <Image
          src="/images/starBlack.png"
          alt="star decoration"
          width={50}
          height={50}
          className="opacity-90"
        />
      </div>
      <div className="absolute top-20 right-10">
        <Image
          src="/images/starViolet.png"
          alt="star decoration"
          width={50}
          height={50}
          className="opacity-90"
        />
      </div>

      {/* Curly Arrow decorative elements */}
      <div className="absolute top-90 -left-8">
        <Image
          src="/images/curlyArrowYellow.png"
          alt="curly arrow decoration"
          width={160}
          height={160}
          className=""
        />
      </div>
      

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black leading-tight mb-6">
            1253k+ Global Customer Say About Our Digital Marketing Services
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Digital marketing & advertising approach focuses on capturing the essential
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-emerald-50 rounded-3xl p-10 shadow-lg relative">
            {/* Profile Section */}
            <div className="flex items-start justify-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-6 flex-shrink-0">
                <Image
                  src="/images/sample.png"
                  alt="Manuel D. Kittrell"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2">Manuel D. Kittrell</h3>
                <p className="text-gray-500 text-base">/CEO & Founder</p>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Rating/Quote Section */}
            <div className="border-t border-gray-300 pt-8">
              <div className="flex items-center justify-between">
                {/* Quote Icon */}
                <div className="text-7xl font-bold text-black">
                  <Image
                    src="/images/testimonial_comma.png"
                    alt="quote"
                    width={100}
                    height={100}
                    className="w-12 h-12"
                  />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-bold text-black">Good Quality</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-22">
        <Image
          src="/images/curlyArrowBlack.png"
          alt="curly arrow decoration"
          width={160}
          height={160}
          className=""
        />
      </div>
        </div>

        {/* Bottom Right Decorative Element */}
        <div className="absolute bottom-10 right-10">
          <svg
            width="140"
            height="100"
            viewBox="0 0 140 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-70"
          >
            <path
              d="M20 30 Q40 15 60 25 Q80 35 100 20 Q120 40 110 60 Q100 80 80 70 Q60 60 40 70 Q20 80 30 60 Q40 40 20 30"
              stroke="black"
              strokeWidth="2.5"
              strokeDasharray="8,6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
