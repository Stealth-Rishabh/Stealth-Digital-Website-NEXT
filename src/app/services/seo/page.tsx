import React from 'react'
import SEOHero from './sections/hero'
import SEOServices from './sections/services'
import ThreeWaysSection from './sections/three-ways'
import QualityFocusSection from './sections/quality-focus'
import TestimonialsSection from '../sections/testimonials'
import SEOVideoSection from './sections/video-section'

const seo = () => {
  return (
    <div>
      <SEOHero />
      <SEOServices />
      <SEOVideoSection />
      <ThreeWaysSection />
      <QualityFocusSection />
      <TestimonialsSection />
    </div>
  )
}

export default seo