import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const SMOQualityFocus = () => {
  const features = [
    {
      title: "Engaging Content",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-900"
    },
    {
      title: "Community Growth", 
      bgColor: "bg-teal-100",
      textColor: "text-teal-900"
    },
    {
      title: "Brand Awareness",
      bgColor: "bg-purple-100", 
      textColor: "text-purple-900"
    },
    {
      title: "Lead Generation",
      bgColor: "bg-blue-100",
      textColor: "text-blue-900"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Building Strong Social Media Presence That Converts
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              We create compelling social media strategies that engage your audience and drive meaningful business results.
            </p>
            
            {/* Feature List - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.bgColor} ${feature.textColor} rounded-full px-4 py-3 flex items-center space-x-3`}
                >
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://next.mediacity.co.in/zoso/_next/static/media/process-six-img.05b083c4.jpg"
                  alt="Social media marketing team"
                  width={400}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMOQualityFocus;
