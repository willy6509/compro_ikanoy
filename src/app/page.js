"use client"
import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Footer, Section1, Section2, Section3 } from '@/components/ui'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // FIX REFRESH
    window.scrollTo(0, 0);
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    // ✅ PARALLAX ONLY ON DESKTOP
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const fishes = gsap.utils.toArray('.fish-item')
      fishes.forEach((fish) => {
        const speed = fish.getAttribute('data-speed') || 0.1
        gsap.to(fish, {
          y: () => -ScrollTrigger.maxScroll(window) * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0,
          },
        })
      })
    })

  }, { scope: containerRef })

  return (
    <main ref={containerRef} className="relative w-full overflow-hidden bg-[#f8f9fa]">

      {/* === DEKORASI IKAN (Hidden on mobile) === */}

      {/* 1. SECTION ABOUT (Kiri) */}
      <div 
        data-speed="0.08"
        className="fish-item hidden md:block absolute pointer-events-none z-30 opacity-60
        md:top-[110vh] md:left-0 md:w-56"
      >
        <Image src="/images/fish1.png" alt="decor" width={300} height={300} className="object-contain" />
      </div>

      {/* 2. SECTION PRODUCT (Kanan) */}
      <div 
        data-speed="0.1"
        className="fish-item hidden md:block absolute pointer-events-none z-30 rotate-180 opacity-50
        md:top-[210vh] md:-right-8 md:w-40"
      >
        <Image src="/images/fish7.png" alt="decor" width={300} height={300} className="object-contain" />
      </div>

      {/* === CONTENT SECTIONS === */}
      <div className="relative z-10">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>

      <Footer />
    </main>
  )
}
