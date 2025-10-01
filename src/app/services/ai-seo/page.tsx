import React from 'react'
import AISEOHero from './sections/hero'
import AISEOServices from './sections/services'
import AISEOThreeWays from './sections/three-ways'
import AISEOQualityFocus from './sections/quality-focus'
import TestimonialsSection from '../sections/testimonials'
import AISEOVideoSection from './sections/video-section'

const AISEO = () => {
  return (
    <div>
      <AISEOHero />
      <AISEOServices />
      <AISEOVideoSection />
      <AISEOThreeWays />
      <AISEOQualityFocus />
      <TestimonialsSection />
    </div>
  )
}

export default AISEO
