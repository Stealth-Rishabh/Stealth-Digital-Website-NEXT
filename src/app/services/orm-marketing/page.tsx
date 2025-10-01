import React from 'react'
import ORMHero from './sections/hero'
import ORMServices from './sections/services'
import ORMThreeWays from './sections/three-ways'
import ORMQualityFocus from './sections/quality-focus'
import TestimonialsSection from '../sections/testimonials'
import ORMVideoSection from './sections/video-section'

const ORMMarketing = () => {
  return (
    <div>
      <ORMHero />
      <ORMServices />
      <ORMVideoSection />
      <ORMThreeWays />
      <ORMQualityFocus />
      <TestimonialsSection />
    </div>
  )
}

export default ORMMarketing
