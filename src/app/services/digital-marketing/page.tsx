import React from 'react'
import DigitalHero from './sections/hero'
import DigitalServices from './sections/services'
import DigitalThreeWays from './sections/three-ways'
import DigitalQualityFocus from './sections/quality-focus'
import TestimonialsSection from '../sections/testimonials'
import DigitalVideoSection from './sections/video-section'

const DigitalMarketing = () => {
  return (
    <div>
      <DigitalHero />
      <DigitalServices />
      <DigitalVideoSection />
      <DigitalThreeWays />
      <DigitalQualityFocus />
      <TestimonialsSection />
    </div>
  )
}

export default DigitalMarketing