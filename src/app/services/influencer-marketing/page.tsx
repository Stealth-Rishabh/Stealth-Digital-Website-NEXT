import React from 'react'
import InfluencerHero from './sections/hero'
import InfluencerServices from './sections/services'
import InfluencerThreeWays from './sections/three-ways'
import InfluencerQualityFocus from './sections/quality-focus'
import TestimonialsSection from '../sections/testimonials'
import InfluencerVideoSection from './sections/video-section'

const InfluencerMarketing = () => {
  return (
    <div>
      <InfluencerHero />
      <InfluencerServices />
      <InfluencerVideoSection />
      <InfluencerThreeWays />
      <InfluencerQualityFocus />
      <TestimonialsSection />
    </div>
  )
}

export default InfluencerMarketing
