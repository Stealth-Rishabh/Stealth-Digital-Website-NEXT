import React from 'react';
import Marquee from './ui/marquee';

const ClientMarquee = () => {
  const clients = [
    {
      name: 'Dropbox',
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 2C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6zm0 2h12v16H6V4zm2 2v12h8V6H8zm2 2h4v8h-4V8z"/>
            </svg>
          </div>
          <span className="text-gray-700 font-medium">Dropbox</span>
        </div>
      )
    },
    {
      name: 'Trello',
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <rect x="7" y="7" width="10" height="2" rx="1" ry="1"/>
              <rect x="7" y="11" width="6" height="2" rx="1" ry="1"/>
            </svg>
          </div>
          <span className="text-gray-700 font-medium">Trello</span>
        </div>
      )
    },
    {
      name: 'Framer',
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-gray-700 font-medium">Framer</span>
        </div>
      )
    },
    {
      name: 'Grammarly',
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-gray-700 font-medium">grammarly</span>
        </div>
      )
    },
    {
      name: 'Amazon',
      logo: (
        <div className="flex items-center gap-2">
          <div className="text-black font-bold text-lg">
            amazon
            <div className="w-full h-0.5 bg-orange-500 rounded-full transform -translate-y-1"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            I've 1253+ Global Clients & lot's of Project Complete
          </h2>
        </div>
        
        <div className="relative">
          <Marquee 
            className="py-8"
            pauseOnHover={true}
            repeat={3}
          >
            {clients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center px-8 py-4 mx-4 bg-gray-50 rounded-full border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors duration-300"
              >
                {client.logo}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
