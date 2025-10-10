"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Russell J.",
      role: "CEO & Founder",
      text: "On the other hand denounce with righteous indignation and dislike men beguiled and demoralized",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      bgColor: "bg-purple-100"
    },
    {
      id: 2,
      name: "Somalia",
      role: "Developer",
      text: "On the other hand denounce with righteous indignation and dislike men beguiled and demoralized",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      bgColor: "bg-yellow-100"
    },
    {
      id: 3,
      name: "Michel H.",
      role: "Businessman",
      text: "On the other hand denounce with righteous indignation and dislike men beguiled and demoralized",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10">
        <Image
          src="/images/starviolet.png"
          alt="star decoration"
          width={60}
          height={60}
          className="opacity-80"
        />
      </div>
      <div className="absolute top-20 right-10">
        <Image
          src="/images/starYellow.png"
          alt="star decoration"
          width={60}
          height={60}
          className="opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Customer Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Digital marketing & advertising approach focuses on capturing the essential
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* Profile Section */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Star Rating */}
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
