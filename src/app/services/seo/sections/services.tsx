import React from 'react';

const SEOServices = () => {
  const services = [
    {
      title: "Keyword Research",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H11V11H9V9Z" fill="currentColor"/>
          <path d="M13 9H15V11H13V9Z" fill="currentColor"/>
          <path d="M9 13H11V15H9V13Z" fill="currentColor"/>
          <path d="M13 13H15V15H13V13Z" fill="currentColor"/>
        </svg>
      ),
      bgColor: "bg-purple-100"
    },
    {
      title: "Web Optimization",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M4 17L10 11L14 15L20 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 9H16V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-yellow-100"
    },
    {
      title: "Enterprise SEO",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-blue-100"
    },
    {
      title: "Competitive Analysis",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-pink-100"
    },
    {
      title: "Reporting Dashboard",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 17H15" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-red-100"
    },
    {
      title: "Technical Audit",
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
            Grow Leads and Sales with insanely
            <br />
            Good SEO Strategy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Digital marketing & advertising approach focuses on capturing the essential
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

export default SEOServices;
