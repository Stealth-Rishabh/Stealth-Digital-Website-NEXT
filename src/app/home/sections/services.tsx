"use client";
import React from "react";
import { Megaphone, Code, Mail, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CircularText from "@/components/ui/circular-text";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Paid Social Media Marketing",
      description:
        "Sed persiciat undomnis natus voluptat accusantic doloremque laudantiue",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-500",
      iconColor: "text-white",
    },
    {
      icon: Code,
      title: "Website Optimization and marketing",
      description:
        "We denounce with right indignation & dislike men beguiled demoralized",
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-500",
      iconColor: "text-white",
    },
    {
      icon: Mail,
      title: "Email ans SMS Marketing Services",
      description:
        "But must explain to you how all the mistaken ideof denouncing pleasure",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
    },
    {
      icon: BarChart3,
      title: "Make Data-Driven Decisions",
      description:
        "Sed perspice undomnis natus voluptate accustiue doloremque laudantiue",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-500",
      iconColor: "text-white",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
            Popular Digital Marketing
            <br />
            Services to Build your
            
            Business
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Digital marketing & advertising approach focuses on capturing the
            essential
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={cn(
                  "rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-2xl",
                  service.bgColor
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mb-6",
                    service.iconBg
                  )}
                >
                  <IconComponent className={cn("w-8 h-8", service.iconColor)} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-30 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="relative col-span-2">
            <div className="border-2 absolute top-0 left-10 rounded-full h-[510px] w-[400px] overflow-hidden z-10">
              <Image
                src="/images/services/left.jpg"
                alt="service-1"
                width={400}
                height={510}
                className="z-10 "
              />
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/services/leftlines.png"
                alt="service-1"
                width={150}
                height={150}
              />
            </motion.div>
          </div>
          <div className="col-span-2">
            {/* Circular Text Component */}
            <div className="relative w-fit flex items-center justify-center">
              <CircularText
                text="Digital*Marketing*Agency*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class text-black ml-0 !text-light"
                classNameCircle="bg-[#E9D175]"
              />
              <ArrowRight className="h-10 w-10 rotate-[-45deg] absolute font-light stroke-1 text-gray-800" />
            </div>

            <div className="text-left mt-8  relative">
              {/* Main Title */}
              <h2 className="text-4xl md:text-4xl lg:text-[3rem] font-extrabold text-black leading-tight mb-6 text-left">
                Build an Efficient Digital Marketing <br /> with our Expertise
              </h2>

              {/* Subtitle */}
              <p className="text-base  text-left text-gray-500  max-w-2xl mx-auto leading-relaxed">
                Digital marketing & advertising approach focuses on capturing
                the essential elements of your target audience&apos;s journey,
                creating compelling campaigns that drive engagement.
              </p>
            </div>

            <Button className="!px-10 py-6 mt-10 bg-black text-white">
              Learn More
              <ArrowRight className="mt-1 w-4 h-4" />
            </Button>
          </div>
          <div className="relative ">
            <Image
              src="/images/services/rightTriangle.png"
              alt="service-1"
              width={50}
              height={50}
              className="absolute top-0 left-0 z-10"
            />
            <motion.div
              className="absolute right-0 translate-y-1/3"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/services/rightcircle.png"
                alt="service-1"
                width={200}
                height={200}
              />
            </motion.div>
            <div className="border-2 rounded-full h-[370px] w-[200px] overflow-hidden absolute bottom-0 left-0">
              <Image
                src="/images/services/right.jpg"
                alt="service-1"
                width={200}
                height={370}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
