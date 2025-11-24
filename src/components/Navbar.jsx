"use client"
import { useState } from "react"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="font-poppins sticky top-0 z-50 bg-white/10 backdrop-blur px-5 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between">

        {/* Logo */}
        <p className="cursor-default text-2xl font-bold">IKANOY</p>

        {/* Menu Desktop */}
        <div className="hidden gap-8 text-lg font-bold md:flex">
          {["Home", "About", "Product"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative flex cursor-pointer items-center 
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 
              after:bg-black after:transition-all after:duration-300 after:content-[''] 
              hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Icons Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://www.instagram.com/ikano.y?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="rounded-full p-2 transition hover:scale-110 hover:bg-gray-400/30"
          >
            <Image src="/images/instagram.svg" width={26} height={26} alt="instagram logo" />
          </a>

          <div className="rounded-full p-2 transition hover:scale-110 hover:bg-gray-400/30">
            <Image src="/images/tiktok.svg" width={26} height={26} alt="tiktok logo" />
          </div>
        </div>

        {/* Hamburger Mobile */}
        <button
          className="block md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className={`block h-[3px] w-6 bg-black transition ${open ? "translate-y-1.5 rotate-45" : ""}`}></span>
            <span className={`block h-[3px] w-6 bg-black transition ${open ? "opacity-0" : ""}`}></span>
            <span className={`block h-[3px] w-6 bg-black transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-4 flex flex-col items-center gap-4 pb-4 text-lg font-semibold md:hidden">
          {["Home", "About", "Product"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="w-full py-2 text-center transition hover:text-black/70"
            >
              {item}
            </a>
          ))}

          <div className="flex gap-5 pt-2">
            <a
              href="https://www.instagram.com/ikano.y"
              className="rounded-full p-2 transition hover:scale-110 hover:bg-gray-400/30"
            >
              <Image src="/images/instagram.svg" width={28} height={28} alt="instagram logo" />
            </a>

            <div className="rounded-full p-2 transition hover:scale-110 hover:bg-gray-400/30">
              <Image src="/images/tiktok.svg" width={28} height={28} alt="tiktok logo" />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
