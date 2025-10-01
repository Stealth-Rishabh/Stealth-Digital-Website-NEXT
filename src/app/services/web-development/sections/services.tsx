import React from 'react';

const WebDevServices = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21L12 17L16 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-purple-100"
    },
    {
      title: "Backend Development",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-yellow-100"
    },
    {
      title: "E-commerce Solutions",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V19C17 19.6 16.6 20 16 20H8C7.4 20 7 19.6 7 19V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-blue-100"
    },
    {
      title: "Mobile App Development",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-pink-100"
    },
    {
      title: "UI/UX Design",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-red-100"
    },
    {
      title: "Website Maintenance",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
            Build Modern Websites and Digital Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We create responsive, fast, and user-friendly websites that convert visitors into customers
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

export default WebDevServices;
