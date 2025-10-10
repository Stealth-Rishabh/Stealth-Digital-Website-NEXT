"use client"

import React, { useRef, useEffect, useState } from 'react'

const AISEOVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isFixed, setIsFixed] = useState(false)
  const [scale, setScale] = useState(1)

  // Intersection Observer for autoplay
  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play()
        } else {
          videoElement.pause()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(videoElement)

    return () => {
      observer.unobserve(videoElement)
    }
  }, [])

  // Scroll listener for animation
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect()
        const scrollY = window.scrollY
        const startAnim = top + scrollY - window.innerHeight
        const endAnim = top + scrollY + height - window.innerHeight

        if (scrollY > startAnim && scrollY < endAnim) {
          const progress = (scrollY - startAnim) / (endAnim - startAnim)
          const newScale = 1 - Math.min(0.2, progress * 0.2) // Scale down to 80%
          
          setScale(newScale)
          
          if (progress > 0.1) {
            setIsFixed(true)
          } else {
            setIsFixed(false)
          }
        } else if (scrollY <= startAnim) {
          setScale(1)
          setIsFixed(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-[200vh]"
    >
      <div className={`sticky top-0 h-screen flex items-center justify-center overflow-hidden ${
        isFixed ? 'fixed-video' : ''
      }`}>
        <div 
          className="relative transition-all duration-300 ease-out"
          style={{ 
            width: isFixed ? 'clamp(800px, 90vw, 1400px)' : '100vw',
            transform: `scale(${scale})`,
          }}
        >
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              loop
              muted
              playsInline
            >
              <source src="https://www.groviaus.com/about.webm" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AISEOVideoSection
