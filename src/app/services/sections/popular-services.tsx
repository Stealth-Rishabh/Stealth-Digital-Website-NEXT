import { Check } from 'lucide-react';
import Image from 'next/image';

export default function PopularServicesSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <nav className="text-lg">
            <span className="text-gray-600">Home</span>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-purple-600 font-semibold">Our Services</span>
          </nav>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual Section */}
    
           

            {/* Image Container */}
            <div className="relative grid grid-cols-2 gap-10">
              {/* Top Image */}
              <div className="relative z-20 mb-8">
                <div className="w-60 h-80 mx-auto">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="https://next.mediacity.co.in/zoso/_next/static/media/features-three-left-img-1.dde02543.jpg"
                      alt="Professional woman"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="relative z-10 mt-16">
                <div className="w-60 h-80 mx-auto">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="https://next.mediacity.co.in/zoso/_next/static/media/features-three-left-img-2.c9ca35a9.jpg"
                      alt="Woman working on laptop"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

            
            </div>
         

          {/* Right Content Section */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Customer Success and Work For Future
            </h2>

            {/* Intro Paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Sed ut perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium, totam rem aperiam inventore.
            </p>

            {/* Services */}
            <div className="space-y-8">
              {/* Service 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Concepts & Scripting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    It takes ages to generate ideas, research them create compelling scripts. Not anymore is an idea generation machine.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Strategy & Producing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    So many niches to choose from, so little time. How do you stand Only 2.5% of YouTubers ever hit 1,000 subscribers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
