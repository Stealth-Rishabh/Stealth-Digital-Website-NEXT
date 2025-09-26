import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-6 py-20">
        {/* Main Title - Centered */}
        {/* <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            About Company
          </h1>

         
          <nav>
            <div className="flex items-center justify-center space-x-2 text-base text-gray-600">
              <span>Home</span>
              <span className="text-gray-400">&gt;</span>
              <span className="text-purple-600 font-medium">About Company</span>
            </div>
          </nav>
        </div> */}

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-center max-w-7xl mx-auto">
          {/* Left Column - Wider */}
          <div className="space-y-8">
            {/* Welcome Text */}
            <p className="text-lg text-gray-700 font-medium">Welcome to Zoso</p>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Build an Efficient Digital Marketing with our Expertise For
              Marketing Solutions
            </h2>
          </div>

          {/* Right Column - Narrower */}
          <div className="space-y-6">
            {/* Description Paragraphs */}
            <div className="space-y-5 text-gray-700 !mt-10">
              <p className="text-base leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium, totam rem aperiame eaque quae
                abillo inventore veritatis quasie
              </p>
              <p className="text-base leading-relaxed">
                Nemo enim voluptatem quia voluptas sit aspernatur aut odit aut
                fugit consequuntur magni dolores
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                size="lg"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-16 h-[400px] max-w-7xl mx-auto mt-16">
          <div className="col-span-2 h-full relative">
            <Image
              src="https://next.mediacity.co.in/zoso/_next/static/media/about-four-img-1.133036da.jpg"
              alt="About Hero Left"
              fill
              className="object-cover rounded"
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
          </div>
          <div className="col-span-1 h-full relative">
            <Image
              src="https://next.mediacity.co.in/zoso/_next/static/media/about-four-img-2.c4aca18e.jpg"
              alt="About Hero Right"
              fill
              className="object-cover rounded"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
