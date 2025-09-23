"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { ArrowRight } from "lucide-react";

const MarketingStats = () => {
  const cards = [
    {
      id: 1,
      bgColor: "bg-purple-200",
      title: "Increase Marketing and Add Chat List",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Chat</h4>
            <span className="text-xs text-gray-500">Budget here</span>
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Add new user" 
              className="w-full px-3 py-2 border border-gray-200 rounded text-xs"
            />
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Gillian P.</div>
                <div className="text-xs text-green-500">Online</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Anthony</div>
                <div className="text-xs text-yellow-500">Away</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Ryan</div>
                <div className="text-xs text-gray-500">Offline</div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Cancel</button>
            <button className="flex-1 bg-blue-500 text-white px-2 py-1 rounded text-xs">Add User</button>
          </div>
        </div>
      )
    },
    {
      id: 2,
      bgColor: "bg-yellow-200",
      title: "Increase Marketing and Add Chat List",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Chat</h4>
            <span className="text-xs text-gray-500">Budget here</span>
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Add new user" 
              className="w-full px-3 py-2 border border-gray-200 rounded text-xs"
            />
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Gillian P.</div>
                <div className="text-xs text-green-500">Online</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Anthony</div>
                <div className="text-xs text-yellow-500">Away</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Ryan</div>
                <div className="text-xs text-gray-500">Offline</div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Cancel</button>
            <button className="flex-1 bg-blue-500 text-white px-2 py-1 rounded text-xs">Add User</button>
          </div>
        </div>
      )
    },
    {
      id: 3,
      bgColor: "bg-blue-200",
      title: "Increase Marketing and Add Chat List",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Chat</h4>
            <span className="text-xs text-gray-500">Budget here</span>
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Add new user" 
              className="w-full px-3 py-2 border border-gray-200 rounded text-xs"
            />
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Gillian P.</div>
                <div className="text-xs text-green-500">Online</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Anthony</div>
                <div className="text-xs text-yellow-500">Away</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Ryan</div>
                <div className="text-xs text-gray-500">Offline</div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Cancel</button>
            <button className="flex-1 bg-blue-500 text-white px-2 py-1 rounded text-xs">Add User</button>
          </div>
        </div>
      )
    },
    {
      id: 4,
      bgColor: "bg-pink-200",
      title: "Increase Marketing and Add Chat List",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Chat</h4>
            <span className="text-xs text-gray-500">Budget here</span>
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Add new user" 
              className="w-full px-3 py-2 border border-gray-200 rounded text-xs"
            />
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Gillian P.</div>
                <div className="text-xs text-green-500">Online</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Anthony</div>
                <div className="text-xs text-yellow-500">Away</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Ryan</div>
                <div className="text-xs text-gray-500">Offline</div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Cancel</button>
            <button className="flex-1 bg-blue-500 text-white px-2 py-1 rounded text-xs">Add User</button>
          </div>
        </div>
      )
    },
    {
      id: 5,
      bgColor: "bg-green-200",
      title: "Increase Marketing and Add Chat List",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Chat</h4>
            <span className="text-xs text-gray-500">Budget here</span>
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Add new user" 
              className="w-full px-3 py-2 border border-gray-200 rounded text-xs"
            />
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Gillian P.</div>
                <div className="text-xs text-green-500">Online</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Anthony</div>
                <div className="text-xs text-yellow-500">Away</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Ryan</div>
                <div className="text-xs text-gray-500">Offline</div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Cancel</button>
            <button className="flex-1 bg-blue-500 text-white px-2 py-1 rounded text-xs">Add User</button>
          </div>
        </div>
      )
    },
    {
      id: 6,
      bgColor: "bg-red-200",
      title: "Increase Marketing and Add Chat List",
      uiMockup: (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Chat</h4>
            <span className="text-xs text-gray-500">Budget here</span>
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Add new user" 
              className="w-full px-3 py-2 border border-gray-200 rounded text-xs"
            />
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Gillian P.</div>
                <div className="text-xs text-green-500">Online</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Anthony</div>
                <div className="text-xs text-yellow-500">Away</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src="/images/sample.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-800">Ryan</div>
                <div className="text-xs text-gray-500">Offline</div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Cancel</button>
            <button className="flex-1 bg-blue-500 text-white px-2 py-1 rounded text-xs">Add User</button>
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

export default MarketingStats;
