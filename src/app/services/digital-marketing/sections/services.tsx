import React from 'react';

const DigitalServices = () => {
  const services = [
    {
      title: "Search Engine Marketing",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-purple-100"
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-yellow-100"
    },
    {
      title: "Content Marketing",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M14 2H6C5.4 2 5 2.4 5 3V21C5 21.6 5.4 22 6 22H18C18.6 22 19 21.6 19 21V7L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V7H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-blue-100"
    },
    {
      title: "Email Marketing",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-pink-100"
    },
    {
      title: "Display Advertising",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21L12 17L16 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-red-100"
    },
    {
      title: "Marketing Analytics",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-green-100"
    }
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-yellow-50">
      {/* Decorative black star - top left */}
      <div className="absolute top-8 left-8 z-10">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-black"
        >
          <path 
            d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Decorative golden star - top right */}
      <div className="absolute top-8 right-8 z-10">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-yellow-500"
        >
          <path 
            d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Comprehensive Digital Marketing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We create comprehensive digital marketing strategies that drive traffic, generate leads, and boost sales
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;
