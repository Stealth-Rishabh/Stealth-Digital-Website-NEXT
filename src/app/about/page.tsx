import React from 'react'
import AboutHero from './section/hero'
import WhatWeOffer from './section/what-we-offer'
import VideoSection from './section/video-section'
import TeamSection from './section/team-section'
import CTABanner from './section/cta-banner'
import MarketingProcess from '../home/sections/marketing-process'
import ClientMarquee from '../../components/client-marquee'

const About = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 opacity-50"
        style={{
          backgroundImage: `url('https://next.mediacity.co.in/zoso/_next/static/media/about-pagr-bg.a4d01c55.png')`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        <AboutHero />
        <WhatWeOffer />
        <VideoSection />
        <TeamSection />
        <MarketingProcess/>
        <ClientMarquee />
        <CTABanner />
      </div>
    </div>
  )
}

export default About