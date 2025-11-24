"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Animasi Wave (Background Loop terus menerus)
    // GSAP akan menggerakkan SEMUA elemen dengan class .wave-layer
    gsap.to(".wave-layer", {
      xPercent: -2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 2. Animasi Masuk (Intro saat pertama kali load)
    tl.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.2
    })
    .from(".hero-btn", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.5");

    // 3. Animasi Scroll (Parallax Effect)
    gsap.to(".hero-content", {
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
      y: -150,
      opacity: 0,
      ease: "none"
    });

  }, { scope: heroRef });

  const handleScrollToProduct = (e) => {
    e.preventDefault();
    const productSection = document.getElementById("product");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} id="home" className="relative flex min-h-screen w-full items-center justify-center pt-20 overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl -z-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl -z-20" />

      {/* === Wave Background (DIPERBARUI UNTUK RESPONSIVE) === */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none -z-10 w-full h-full">

        {/* 1. Gambar untuk MOBILE (wave-mobile.png) */}
        {/* Ditambahkan class 'md:hidden' agar hilang di layar besar */}
        <img
          src="/images/wave_mobile.png" // Pastikan nama file sesuai
          alt="wave background mobile"
          className="wave-layer md:hidden absolute bottom-0 left-[-5%] w-[110%] max-w-none h-auto object-cover opacity-80"
        />

        {/* 2. Gambar untuk DESKTOP/TABLET (wave.png - yang lama) */}
        {/* Ditambahkan class 'hidden md:block' agar hanya muncul di layar besar */}
        <img
          src="/images/wave.png"
          alt="wave background desktop"
          className="wave-layer hidden md:block absolute bottom-0 left-[-5%] w-[110%] max-w-none h-auto object-cover opacity-80"
        />

      </div>

      {/* === KONTEN UTAMA === */}
      <div className="hero-content relative z-10 flex flex-col items-center px-4 text-center max-w-4xl mx-auto">
        {/* Judul Besar */}
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-lg">
          IKAN<span className="text-cyan-300 inline-block filter drop-shadow-md">OY</span>
        </h1>

        {/* Deskripsi */}
        <p className="hero-text mt-6 max-w-2xl text-base md:text-lg text-blue-50 leading-relaxed font-medium drop-shadow-md">
          Menyediakan <span className="font-bold text-white border-b border-cyan-300/50">ikan kering premium</span> —
          segar, gurih, dan higienis. Solusi praktis protein harian keluarga Anda.
        </p>

        {/* Tombol */}
        <div className="hero-btn mt-10">
          <a
            href="#product"
            onClick={handleScrollToProduct}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-blue-900 transition duration-300 hover:bg-cyan-50 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            <span>Lihat Katalog</span>
            <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}