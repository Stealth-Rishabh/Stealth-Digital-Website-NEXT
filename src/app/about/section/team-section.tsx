"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Plus, X } from 'lucide-react'

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
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="text-center group relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              {/* Social Links - On the right side of the image */}
              {/* <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
                <div 
                  className={`relative transition-all duration-500 ease-in-out transform ${
                    activeIndex === index
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-4 opacity-0'
                  }`}
                >
                  {member.social && (
                    <div className="bg-white rounded-full shadow-lg flex flex-col gap-2 p-2">
                      <a href={member.social.facebook} className="text-gray-600 hover:text-blue-600"><Facebook size={18} /></a>
                      <a href={member.social.twitter} className="text-gray-600 hover:text-sky-500"><Twitter size={18} /></a>
                      <a href={member.social.instagram} className="text-gray-600 hover:text-pink-500"><Instagram size={18} /></a>
                      <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-700"><Linkedin size={18} /></a>
                    </div>
                  )}
                </div>
              </div> */}

              {/* Plus/Cross Button - Below social icons, overlapping image */}
              {/* <div className="absolute bottom-4 -right-2 z-20">
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)} 
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
                >
                  {activeIndex === index ? (
                    <X size={16} className="text-gray-700" />
                  ) : (
                    <Plus size={16} className="text-gray-700" />
                  )}
                </button>
              </div> */}

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
      </div>
    </section>
  )
}

export default TeamSection;
