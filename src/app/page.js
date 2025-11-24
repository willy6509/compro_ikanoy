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
    // 1. FIX REFRESH
    window.scrollTo(0, 0);
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 2. PARALLAX EFFECT IKAN
    const fishes = gsap.utils.toArray('.fish-item')
    fishes.forEach((fish) => {
      const speed = fish.getAttribute('data-speed') || 0.1
      gsap.to(fish, {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0,
        },
      })
    })
  }, { scope: containerRef })

  return (
    <main ref={containerRef} className="relative w-full overflow-hidden bg-[#f8f9fa]">
      
      {/* === DEKORASI IKAN RESPONSIF === 
          Mobile: Ukuran kecil (w-24), posisi top disesuaikan karena section lebih panjang.
          Desktop (md/lg): Ukuran normal, posisi standar.
      */}

      {/* 1. SECTION ABOUT (Kiri) */}
      <div 
        data-speed="0.08" 
        className="fish-item absolute pointer-events-none z-30 opacity-60
        /* MOBILE */
        top-[120vh] -left-6 w-24
        /* DESKTOP */
        md:top-[110vh] md:left-0 md:w-56"
      >
        <Image src="/images/fish1.png" alt="decor" width={300} height={300} className="object-contain" />
      </div>

      {/* 2. SECTION PRODUCT (Kanan) */}
      <div 
        data-speed="0.1" 
        className="fish-item absolute pointer-events-none z-30 rotate-180 opacity-50
        /* MOBILE: Posisi lebih jauh ke bawah (230vh) karena konten numpuk */
        top-[230vh] -right-4 w-20
        /* DESKTOP */
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