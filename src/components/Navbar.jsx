"use client"
import { useState, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  // Animasi Navbar Turun saat Load
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.2
    })
  }, [])

  return (
    <nav ref={navRef} className="font-poppins fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm transition-all border-b border-white/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <p className="cursor-default text-2xl font-black tracking-tighter text-gray-900">
          IKAN<span className="text-blue-600">OY</span>
        </p>

        {/* Menu Desktop */}
        <div className="hidden gap-8 text-sm font-semibold uppercase tracking-wide text-gray-700 md:flex">
          {["Home", "About", "Product"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative transition hover:text-blue-600"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Icons Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://www.instagram.com/ikano.y"
            target="_blank"
            className="rounded-full bg-gray-100 p-2 transition hover:scale-110 hover:bg-blue-100"
          >
            <Image src="/images/instagram.svg" width={20} height={20} alt="ig" />
          </a>
          <a href="#" className="rounded-full bg-gray-100 p-2 transition hover:scale-110 hover:bg-blue-100">
             <Image src="/images/tiktok.svg" width={20} height={20} alt="tt" />
          </a>
        </div>

        {/* Hamburger Mobile */}
        <button className="block md:hidden p-2" onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            <span className={`block h-[2px] w-6 bg-black transition-transform origin-center ${open ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-[2px] w-6 bg-black transition-opacity ${open ? "opacity-0" : ""}`}></span>
            <span className={`block h-[2px] w-6 bg-black transition-transform origin-center ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b shadow-lg transition-all duration-300 ease-in-out overflow-hidden md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col items-center gap-6 py-8">
          {["Home", "About", "Product"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-blue-600"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}