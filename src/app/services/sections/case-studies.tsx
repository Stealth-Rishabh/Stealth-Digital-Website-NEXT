"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      category: "Product Sale",
      title: "How To Grow Sale and Product Marketing",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      overlayColor: "bg-purple-100",
      textColor: "text-purple-800"
    },
    {
      id: 2,
      category: "Marketing",
      title: "Increase 2x Faster SEO Strategy Development",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      overlayColor: "bg-white",
      textColor: "text-gray-800"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Case Studies For Our Global Customers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Digital marketing & advertising approach focuses on capturing the essential
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Background Image */}
              <div className="relative h-96">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 bg-opacity-20"></div>
                
                {/* Content Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 ${study.overlayColor} p-6`}>
                  <div className="space-y-3">
                    {/* Category */}
                    <span className={`text-sm font-semibold ${study.textColor} uppercase tracking-wide`}>
                      {study.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className={`text-xl font-bold ${study.textColor} leading-tight`}>
                      {study.title}
                    </h3>
                    
                    {/* Read More Button */}
                    <button className={`flex items-center space-x-2 ${study.textColor} hover:opacity-80 transition-opacity duration-200`}>
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
