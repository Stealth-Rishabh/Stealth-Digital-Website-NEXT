import React from 'react';
import Image from 'next/image';

const SEOHero = () => {
  return (
    <section className="relative  max-w-6xl mx-auto w-full min-h-[600px] overflow-hidden">
     
     

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-5xl font-extrabold text-black leading-tight">
                <span className="block">Increase Your</span>
                <span className="block">Web Traffic &</span>
                <span className="block">grow your</span>
                <span className="block">Product sale with</span>
                <span className="block text-5xl lg:text-5xl">SEO Solutions</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-700 font-normal max-w-lg">
              Digital marketing & advertising approach focuses on capturing the essential
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Rounded rectangle frame for the image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://next.mediacity.co.in/zoso/_next/static/media/services-details-content-img.ddc9edbb.jpg"
                  alt="Business professionals working with tablet"
                  width={400}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOHero;
