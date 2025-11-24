import { Footer, Section1, Section2, Section3, SocialIcon } from '@/components/ui'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative">
      {/* Dekorasi atas kiri */}
      <Image src="/images/fish4.png" alt="Description" margin={5} width={300} height={300} className="absolute mx-5" />

      {/* Bagian konten pertama */}
      <Section1 />

      {/* Dekorasi kanan tengah (ungu/pink) */}
      <Image
        src="/images/fish7.png"
        alt="Description"
        width={300}
        height={300}
        className="absolute mx-5 right-0 bottom-1/2 rotate-90"
      />

      {/* Dekorasi kiri tengah (kuning) */}
      <Image
        src="/images/fish1.png"
        alt="Description"
        width={300}
        height={300}
        className="absolute mx-5 bottom-1/2 left-0 translate-y-full -z-10"
      />

      {/* Bagian konten kedua */}
      <Section2 />

      {/* Dekorasi kanan bawah (biru/purple) */}
      <Image
        src="/images/fish6.png"
        alt="Description"
        width={300}
        height={300}
        className="absolute mx-5 right-0 bottom-0 -translate-y-1/2"
      />

      {/* Bagian konten ketiga */}
      <Section3 />

      {/* Footer halaman */}
      <Footer />
    </main>
  )
}
