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
    // PARALLAX EFFECT: Ikan bergerak perlahan saat scroll
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
      
      {/* === DEKORASI IKAN === 
          Hanya menyisakan ikan di bagian tengah (About & Product)
          agar Hero dan Footer lebih bersih.
      */}

      {/* 1. SECTION ABOUT (Kiri Tengah) */}
      {/* top-[110vh] = Muncul setelah scroll melewati layar pertama */}
      <div 
        data-speed="0.08" 
        className="fish-item absolute pointer-events-none z-30 opacity-60
        top-[110vh] -left-10 w-[140px]
        sm:left-0 sm:w-56"
      >
        <Image src="/images/fish1.png" alt="decor" width={300} height={300} className="object-contain" />
      </div>

      {/* 2. SECTION PRODUCT (Kanan Bawah) */}
      {/* top-[210vh] = Muncul di area produk */}
      <div 
        data-speed="0.1" 
        className="fish-item absolute pointer-events-none z-30 rotate-180 opacity-50
        top-[210vh] -right-8 w-[100px]
        sm:right-0 sm:w-40"
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