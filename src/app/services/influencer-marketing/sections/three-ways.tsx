import React from 'react';
import Image from 'next/image';

const InfluencerThreeWays = () => {
  const steps = [
    {
      number: "01",
      title: "Influencer Research & Selection",
      bgColor: "bg-purple-100",
      numberBg: "bg-purple-600",
      textColor: "text-purple-900"
    },
    {
      number: "02", 
      title: "Campaign Development & Execution",
      bgColor: "bg-yellow-100",
      numberBg: "bg-yellow-600",
      textColor: "text-yellow-900"
    },
    {
      number: "03",
      title: "Performance Analysis & Optimization", 
      bgColor: "bg-teal-100",
      numberBg: "bg-teal-600",
      textColor: "text-teal-900"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Execute Influencer Marketing In 3 Steps
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              From discovery to execution, we create impactful influencer campaigns that drive real business results
            </p>
            
            {/* Images Container */}
            <div className="relative mt-14">
              {/* Top-left image with border-radius: 0 50% 50% 50% */}
              <div className="relative z-10 ">
                <div 
                  className="overflow-hidden"
                  style={{
                    borderRadius: '0 50% 50% 50%',
                    width: '270px',
                    height: '250px'
                  }}
                >
                  <Image
                    src="https://next.mediacity.co.in/zoso/_next/static/media/process-one-bottom-img-1.2ce95c6c.jpg"
                    alt="Influencer marketing strategy team"
                    width={270}
                    height={250}
                    className="w-full h-full object-cover drop-shadow-md"
                  />
                </div>
              </div>
              
              {/* Bottom-right image with border-radius: 50% 50% 0 50% */}
              <div 
                className="absolute top-15 -right-8 z-20 "
                style={{
                  borderRadius: '50% 50% 0 50%',
                  width: '270px',
                  height: '250px'
                }}
              >
                <div className="w-full h-full overflow-hidden rounded-[50%_50%_0_50%]">
                  <Image
                    src="https://next.mediacity.co.in/zoso/_next/static/media/process-one-bottom-img-2.1883e585.jpg"
                    alt="Influencer campaign execution"
                    width={270}
                    height={250}
                    className="w-full h-full object-cover drop-shadow-md"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 -left-4 w-4 h-4 bg-purple-500 transform rotate-45"></div>
              <div className="absolute top-8 -left-8 w-3 h-3 bg-purple-400 transform rotate-45"></div>
              <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-green-500 transform rotate-45"></div>
            </div>
          </div>

          {/* Right Content - Steppers */}
          <div className="relative">
            {/* Steps */}
            <div className="relative z-10 space-y-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`${step.bgColor} rounded-2xl p-6 relative w-full shadow-lg ${
                    index === 0 ? 'ml-0' : 
                    index === 1 ? 'ml-8' : 'ml-16'
                  }`}
                >
                  {/* Step Number */}
                  <div className={`${step.numberBg} w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm absolute -top-4 left-10`}>
                    {step.number}
                  </div>
                  
                  {/* Step Title */}
                  <h3 className={`${step.textColor} font-semibold text-lg leading-relaxed mt-2`}>
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerThreeWays;
