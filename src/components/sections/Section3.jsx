"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SocialIcon } from "../ui";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: 'Ikan Kering Mentah Asin', img: '/images/ikan-asin.png', tag: 'Best Seller' },
  { name: 'Ikan Kering Mentah Manis', img: '/images/ikan-manis.png', tag: 'Favorit' },
  { name: 'Ikan Kering Balado', img: '/images/ikan-balado.png', tag: 'Pedas' },
  { name: 'Ikan Kering BBQ', img: '/images/ikan-bbq.png', tag: 'New' },
  { name: 'Ikan Kering Original', img: '/images/ikan-original.png', tag: 'Classic' },
];

export default function Section3() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // 1. ANIMASI HEADER (Judul)
    gsap.from(".product-header", {
      scrollTrigger: {
        trigger: ".product-header",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
      y: 30,
      opacity: 0,
      duration: 0.6
    });

    // 2. ANIMASI GRID PRODUK (Stagger)
    // Menggunakan batch agar animasi lebih responsif saat scroll cepat
    ScrollTrigger.batch(".product-card", {
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
      onLeave: batch => gsap.set(batch, {opacity: 0, y: -50, overwrite: true}),
      onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
      onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true}),
      start: "top 90%",
      end: "bottom 10%"
    });

    // 3. ANIMASI REVIEW
    gsap.from(".review-card", {
      scrollTrigger: {
        trigger: ".review-container",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="product" className="py-24 px-4 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)] relative z-20">
      <div className="mx-auto max-w-7xl">
        
        {/* ===== HEADER PRODUK ===== */}
        <div className="product-header mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Dari mentah hingga siap saji, nikmati kerenyahan asli Nusantara.
          </p>
        </div>

        {/* ===== GRID PRODUK ===== */}
        <div className="product-grid grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5 mb-32">
          {products.map((product, index) => (
            <div
              key={index}
              // Set opacity 0 di awal untuk animasi batch
              className="product-card opacity-0 translate-y-12 group relative flex flex-col overflow-hidden rounded-xl bg-white border border-gray-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-2 right-2 rounded-full bg-black/70 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                  {product.tag}
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <h3 className="mb-3 text-sm font-bold text-gray-800 line-clamp-2 h-10 leading-tight">
                  {product.name}
                </h3>
                
                <a
                  href={`https://wa.me/628995873658?text=Halo%20Ikanoy,%20saya%20mau%20pesan:%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-xs font-bold text-white transition-colors hover:bg-blue-700"
                >
                  <span>Beli via WA</span>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ===== REVIEW & SOCIAL ===== */}
        <div className="flex flex-col items-center border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-bold mb-8">Kata Mereka</h2>
          
          <div className="review-container grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
            {[
              { text: "Ikanoy bikin makan malam jadi cepat dan enak, tanpa ribet!", name: "Rina", role: "Mahasiswa" },
              { text: "Akhirnya ada ikan kering yang kekinian dan aman buat anak-anak.", name: "Ibu Dwi", role: "Ibu Rumah Tangga" },
              { text: "Rasanya gurih, renyah, cocok banget buat anak kos.", name: "Bayu", role: "Mahasiswa UNDIP" },
            ].map((review, i) => (
              <div key={i} className="review-card flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                <p className="italic text-gray-600 mb-4 text-sm">"{review.text}"</p>
                <div className="font-bold text-gray-900">{review.name}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wide">{review.role}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank">
               <SocialIcon src="/images/instagram.svg" alt="IG" tooltip="@ikanoy.id" />
            </a>
            <a href="https://tiktok.com" target="_blank">
               <SocialIcon src="/images/tiktok.svg" alt="TT" tooltip="@ikanoy.official" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}