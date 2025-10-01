import React from 'react';

const InfluencerServices = () => {
  const services = [
    {
      title: "Influencer Discovery",
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
      title: "Campaign Strategy",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M9 11H15M9 15H15M17 21H7C5.9 21 5 20.1 5 19V5C5 3.9 5.9 3 7 3H12.6C12.8 3 13 3.1 13.2 3.3L18.7 8.8C18.9 9 19 9.2 19 9.4V19C19 20.1 18.1 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: "bg-yellow-100"
    },
    {
      title: "Content Collaboration",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-blue-100"
    },
    {
      title: "Performance Tracking",
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
      title: "Relationship Management",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M20 21V19C20 17.9 19.1 17 18 17H6C4.9 17 4 17.9 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      bgColor: "bg-red-100"
    },
    {
      title: "ROI Optimization",
      description: "Nemo enim voluptatem voluptas aspernatur aut fugit consequuntur dolores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
          <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            Strategic Influencer Marketing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with the right influencers to build trust, increase brand awareness, and drive conversions
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

export default InfluencerServices;
