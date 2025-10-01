import React from 'react'
import SMOHero from './sections/hero'
import SMOServices from './sections/services'
import SMOThreeWays from './sections/three-ways'
import SMOQualityFocus from './sections/quality-focus'
import TestimonialsSection from '../sections/testimonials'
import SMOVideoSection from './sections/video-section'

const SocialMedia = () => {
  return (
    <div>
      <SMOHero />
      <SMOServices />
      <SMOVideoSection />
      <SMOThreeWays />
      <SMOQualityFocus />
      <TestimonialsSection />
    </div>
  )
}

export default SocialMedia