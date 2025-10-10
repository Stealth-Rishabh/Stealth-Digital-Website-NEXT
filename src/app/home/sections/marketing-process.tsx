"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CircularText from "@/components/ui/circular-text";

const MarketingProcess = () => {
 

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        

        <div className="mt- grid grid-cols-1 md:grid-cols-2 gap-10 pl-20 pr-20">
          <div className="flex flex-row gap-12 items-center">
           

             {/* Rectangular Image Below Circular Component */}
             <div className="min-w-[260px] h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://next.mediacity.co.in/zoso/_next/static/media/joinus-one-left-img-1.3fcaa8a3.jpg"
                alt="Marketing Process Team"
                width={260}
                height={260}
                className="object-cover w-full h-full"
                priority
              />
            </div>
           
           

            <div className="flex flex-col items-center">
            {/* Circular Text Component */}
            <div className="relative w-fit flex items-center justify-center mb-8">
              <CircularText
                text="Digital Solutions Agency Marketing*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class text-black ml-0 !text-light"
                classNameCircle="bg-[#A9A7F9]"
              />
              <ArrowRight className="h-10 w-10 rotate-[-45deg] absolute font-light stroke-1 text-gray-800" />
            </div>
            {/* Rectangular Image Below Circular Component */}
            <div className="w-[260px] h-[360px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://next.mediacity.co.in/zoso/_next/static/media/joinus-one-left-img-2.2c35cc4f.jpg"
                alt="Marketing Process Team"
                width={260}
                height={260}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          </div>
          
          <div className="relative pl-20">

            <div className="text-left mt-8  relative">
              {/* Main Title */}
              <h2 className="text-4xl md:text-4xl lg:text-[3rem] font-extrabold text-black leading-tight mb-6 text-left">
            <span className="bg-[#E9D175] rounded px-4 py-1 ">Boost your</span> <br /> marketing process with us
              </h2>

              {/* Subtitle */}
              <p className="text-base text-left text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Digital marketing & advertising approach focuses on capturing
                the essential elements of your target audience&apos;s journey,
                creating compelling campaigns that drive engagement.
              </p>

              {/* Checklist as in the image */}
              <div className="mt-6 space-y-5">
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A9A7F9] mr-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="none"/>
                      <path d="M6 10.5l2.5 2.5 5-5" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-lg font-semibold text-black">Marketing Strategy &amp; SEO Camping</span>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A9A7F9] mr-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="none"/>
                      <path d="M6 10.5l2.5 2.5 5-5" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-lg font-semibold text-black">Best Customers Experience</span>
                </div>
              </div>

            </div>

            <Button className="!px-10 py-6 mt-10 bg-black text-white">
              Learn More
              <ArrowRight className="mt-1 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingProcess;