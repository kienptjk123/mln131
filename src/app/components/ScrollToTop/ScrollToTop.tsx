import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Scroll to top on route change
  useEffect(() => {
    const smoother = ScrollSmoother.get()
    if (smoother) {
      smoother.scrollTo(0, true)
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [pathname])

  // Show/hide button based on scroll position - optimized for ScrollSmoother
  useEffect(() => {
    let ticking = false

    const toggleVisibility = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const smoother = ScrollSmoother.get()
          let scrollTop = 0

          if (smoother) {
            // Get scroll position from ScrollSmoother
            scrollTop = smoother.scrollTop()
          } else {
            // Fallback to regular scroll position
            const smoothContent = document.getElementById('smooth-content')
            scrollTop = smoothContent?.scrollTop || window.scrollY || window.pageYOffset
          }

          if (scrollTop > 300) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    // Use ScrollTrigger's update event which works with ScrollSmoother
    const updateInterval = setInterval(toggleVisibility, 100)

    // Also listen to window scroll as fallback
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    toggleVisibility() // Check initial state

    return () => {
      clearInterval(updateInterval)
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Animate button appearance
  useGSAP(() => {
    if (!buttonRef.current) return

    if (isVisible) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'back.out(1.7)' }
      )
    } else {
      gsap.to(buttonRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.2,
        ease: 'power2.in'
      })
    }
  }, [isVisible])

  const scrollToTop = () => {
    const smoother = ScrollSmoother.get()
    if (smoother) {
      smoother.scrollTo(0, true)
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  if (!isVisible) return null

  return (
    <Button
      ref={buttonRef}
      onClick={scrollToTop}
      className='fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0'
      aria-label='Scroll to top'
    >
      <ChevronUp className='h-6 w-6' />
    </Button>
  )
}
