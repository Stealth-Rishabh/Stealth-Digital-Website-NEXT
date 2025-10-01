import React from 'react'
import WebDevHero from './sections/hero'
import WebDevServices from './sections/services'
import WebDevThreeWays from './sections/three-ways'
import WebDevQualityFocus from './sections/quality-focus'
import TestimonialsSection from '../sections/testimonials'
import WebDevVideoSection from './sections/video-section'

const WebDevelopment = () => {
  return (
    <div>
      <WebDevHero />
      <WebDevServices />
      <WebDevVideoSection />
      <WebDevThreeWays />
      <WebDevQualityFocus />
      <TestimonialsSection />
    </div>
  )
}

export default WebDevelopment