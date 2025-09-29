"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { ArrowRight } from "lucide-react";

const OurServices = () => {
  const cards = [
    {
      id: 1,
      bgColor: "bg-purple-200",
      title: "Search Engine Optimization (SEO)",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">SEO Dashboard</h4>
            <span className="text-xs text-green-500">+25% Traffic</span>
          </div>
          <div className="mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Keyword Rankings</span>
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Organic Traffic</span>
              <span className="text-xs font-semibold text-green-600">+45%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Page Speed</span>
              <span className="text-xs font-semibold text-blue-600">92/100</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Backlinks</span>
              <span className="text-xs font-semibold text-purple-600">+120</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">View Report</button>
            <button className="flex-1 bg-purple-500 text-white px-2 py-1 rounded text-xs">Optimize</button>
          </div>
        </div>
      )
    },
    {
      id: 2,
      bgColor: "bg-yellow-200",
      title: "Social Media Marketing",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Social Analytics</h4>
            <span className="text-xs text-blue-500">+180% Reach</span>
          </div>
          <div className="mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Platform Performance</span>
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Instagram</span>
              <span className="text-xs font-semibold text-pink-600">+65%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Facebook</span>
              <span className="text-xs font-semibold text-blue-600">+42%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">LinkedIn</span>
              <span className="text-xs font-semibold text-blue-500">+38%</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">View Posts</button>
            <button className="flex-1 bg-yellow-500 text-white px-2 py-1 rounded text-xs">Schedule</button>
          </div>
        </div>
      )
    },
    {
      id: 3,
      bgColor: "bg-blue-200",
      title: "Pay-Per-Click (PPC) Advertising",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">PPC Campaign</h4>
            <span className="text-xs text-green-500">ROI: 340%</span>
          </div>
          <div className="mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Active Campaigns</span>
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Google Ads</span>
              <span className="text-xs font-semibold text-green-600">$2.50 CPC</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Facebook Ads</span>
              <span className="text-xs font-semibold text-blue-600">$1.80 CPC</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">CTR</span>
              <span className="text-xs font-semibold text-purple-600">4.2%</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">View Stats</button>
            <button className="flex-1 bg-blue-500 text-white px-2 py-1 rounded text-xs">Optimize</button>
          </div>
        </div>
      )
    },
    {
      id: 4,
      bgColor: "bg-pink-200",
      title: "Content Marketing",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Content Hub</h4>
            <span className="text-xs text-purple-500">+95% Engagement</span>
          </div>
          <div className="mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Content Performance</span>
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Blog Posts</span>
              <span className="text-xs font-semibold text-green-600">24</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Video Content</span>
              <span className="text-xs font-semibold text-red-600">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Infographics</span>
              <span className="text-xs font-semibold text-blue-600">8</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">View Content</button>
            <button className="flex-1 bg-pink-500 text-white px-2 py-1 rounded text-xs">Create</button>
          </div>
        </div>
      )
    },
    {
      id: 5,
      bgColor: "bg-green-200",
      title: "Email Marketing",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Email Campaign</h4>
            <span className="text-xs text-green-500">28% Open Rate</span>
          </div>
          <div className="mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Campaign Stats</span>
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Subscribers</span>
              <span className="text-xs font-semibold text-green-600">12.5K</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Click Rate</span>
              <span className="text-xs font-semibold text-blue-600">4.8%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Unsubscribe</span>
              <span className="text-xs font-semibold text-red-600">0.3%</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">View Reports</button>
            <button className="flex-1 bg-green-500 text-white px-2 py-1 rounded text-xs">Send</button>
          </div>
        </div>
      )
    },
    {
      id: 6,
      bgColor: "bg-red-200",
      title: "Web Development & Design",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Web Analytics</h4>
            <span className="text-xs text-orange-500">+150% Conversions</span>
          </div>
          <div className="mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Website Performance</span>
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Page Load</span>
              <span className="text-xs font-semibold text-green-600">1.2s</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Bounce Rate</span>
              <span className="text-xs font-semibold text-blue-600">32%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Mobile Score</span>
              <span className="text-xs font-semibold text-purple-600">98/100</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">View Site</button>
            <button className="flex-1 bg-red-500 text-white px-2 py-1 rounded text-xs">Optimize</button>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10">
        <Image
          src="/images/starYellow.png"
          alt="star decoration"
          width={40}
          height={40}
          className="opacity-80"
        />
      </div>
      <div className="absolute top-20 right-10">
        <Image
          src="/images/starYellow.png"
          alt="star decoration"
          width={40}
          height={40}
          className="opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Effective Marketing and Generate more leads than ever
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Digital marketing & advertising approach focuses on capturing the essential
          </p>
        </div>

        {/* Six Colorful Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* UI Mockup */}
              <div className="mb-6">
                {card.uiMockup}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4 text-center">{card.title}</h3>
              
              {/* Read More */}
              <div className="flex items-center justify-center text-black text-sm">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Check className="w-6 h-6 text-green-500 mr-2" />
              <span className="text-3xl md:text-4xl font-bold text-white">5k+</span>
            </div>
            <p className="text-white text-sm">Project Complete</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Check className="w-6 h-6 text-green-500 mr-2" />
              <span className="text-3xl md:text-4xl font-bold text-white">85k+</span>
            </div>
            <p className="text-white text-sm">Satisfied Customers</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Check className="w-6 h-6 text-green-500 mr-2" />
              <span className="text-3xl md:text-4xl font-bold text-white">95%</span>
            </div>
            <p className="text-white text-sm">Positive Clients Reviews</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Check className="w-6 h-6 text-green-500 mr-2" />
              <span className="text-3xl md:text-4xl font-bold text-white">52+</span>
            </div>
            <p className="text-white text-sm">Awards Winning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
