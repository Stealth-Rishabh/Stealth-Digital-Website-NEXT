import React from 'react'
import TeamsHero from './sections/hero'
import TeamsSection from './sections/teams'
import CTABanner from './sections/cta-banner'
import TestimonialsSection from '../services/sections/testimonials'

const Teams = () => {
  return (
    <div>
      {/* <TeamsHero /> */}
      <TeamsSection />
      <CTABanner />
      <TestimonialsSection />
    </div>
  )
}

export default Teams
