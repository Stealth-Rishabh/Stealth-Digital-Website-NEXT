"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    name: "Mathew R. Rosales",
    role: "CEO & Founder",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "bg-orange-100",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "William I. Miranda",
    role: "Digital Marketer",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Lawrence K. McAllis",
    role: "Web Designer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "bg-blue-400",
  },
  {
    name: "Richard T. Swofford",
    role: "SR Manager",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "bg-purple-300",
  },
  {
    name: "Sarah J. Thompson",
    role: "SEO Specialist",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "bg-green-300",
  },
  {
    name: "Michael A. Chen",
    role: "Content Creator",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "bg-pink-300",
  },
  {
    name: "Emily R. Davis",
    role: "Social Media Manager",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "bg-indigo-300",
  },
  {
    name: "David L. Wilson",
    role: "Project Manager",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "bg-red-300",
  },
];

const TeamsSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showAll, setShowAll] = useState(false);

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We Have 1562+ Experience Team <br />
            Meet Our Team Members
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Digital marketing & advertising approach focuses on capturing the essential
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto">
          {displayedMembers.map((member, index) => (
            <div 
              key={index} 
              className="text-center group relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              {/* Social Links - On the right side of the image */}
              <div className="absolute hidden top-1/2 -translate-y-1/2 -right-4 z-10">
                <div 
                  className={`relative transition-all duration-500 ease-in-out transform ${
                    activeIndex === index
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-4 opacity-0'
                  }`}
                >
                  {member.social && (
                    <div className="bg-white rounded-full shadow-lg flex flex-col gap-2 p-2">
                      <a href={member.social.facebook} className="text-gray-600 hover:text-blue-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href={member.social.twitter} className="text-gray-600 hover:text-sky-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href={member.social.instagram} className="text-gray-600 hover:text-pink-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875z"/>
                        </svg>
                      </a>
                      <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-700">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Plus/Cross Button - Below social icons, overlapping image */}
              <div className="absolute bottom-4 -right-2 z-20 hidden">
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)} 
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
                >
                  {/* {activeIndex === index ? (
                    <X size={16} className="text-gray-700" />
                  ) : (
                    <Plus size={16} className="text-gray-700" />
                  )} */}
                </button>
              </div>

              {/* Image Container */}
              <div 
                className="relative w-52 h-64 mx-auto rounded-[6rem] overflow-hidden transition-all duration-300 ease-in-out"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div 
                  className="absolute inset-0 transition-all duration-300 ease-in-out"
                  style={{ backgroundColor: member.bgColor, mixBlendMode: 'multiply' }}
                ></div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {showAll ? 'Show Less' : 'View More Team Members'}
            {/* <Plus className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-45' : ''}`} /> */}
          </button>
        </div>
      </div>
    </section>
  )
}

export default TeamsSection;
