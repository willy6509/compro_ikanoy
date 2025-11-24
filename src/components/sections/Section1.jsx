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

    // Background Wave Loop
    gsap.to(".wave-layer", {
      xPercent: -2, 
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Intro Animation
    tl.from(".hero-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    })
    .from(".hero-btn", {
      scale: 0.9,
      opacity: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.4");

    // ✅ SCROLL FADE ONLY ON DESKTOP
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
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
    <section ref={heroRef} id="home" className="relative flex min-h-[80vh] md:min-h-screen w-full items-center justify-center pt-20 overflow-hidden">
      
      {/* Wave Background */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none -z-10 w-full h-full">
        <img
          src="/images/wave.png"
          alt="wave background"
          className="wave-layer absolute bottom-0 w-[140%] md:w-[110%] opacity-80"
        />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 flex flex-col items-center px-4 text-center max-w-4xl mx-auto">

        <h1 className="hero-text text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-lg">
          IKAN<span className="text-cyan-300 inline-block drop-shadow-md">OY</span>
        </h1>

        <p className="hero-text mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-blue-50 font-medium">
          Menyediakan <span className="font-bold text-white border-b border-cyan-300/50">ikan kering premium</span> — 
          segar, gurih, dan higienis.
        </p>

        <div className="hero-btn mt-8">
          <a
            href="#product"
            onClick={handleScrollToProduct}
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-blue-900 transition hover:bg-cyan-50 hover:scale-105"
          >
            Lihat Katalog
          </a>
        </div>
      </div>
    </section>
  );
}
