import { Footer, Section1, Section2, Section3 } from '@/components/ui'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* === fish 4 === */}
      <Image
        src="/images/fish4.png"
        alt="Description"
        width={300}
        height={300}
        className="
          absolute -z-10 opacity-80

          /* MOBILE */
          w-[100px] right-3 top-10

          /* DESKTOP */
          sm:left-2 sm:top-2 sm:w-28 sm:opacity-100
          md:w-40 
          lg:w-52
        "
      />

      <Section1 />

      {/* === fish 7 (DISABLED ON MOBILE) === */}
      <Image
        src="/images/fish7.png"
        alt="Description"
        width={300}
        height={300}
        className="
          absolute -z-10 rotate-90
          
          hidden /* MOBILE: hidden */
          sm:block /* TABLET+ aktif */

          sm:right-0 sm:top-1/3 sm:w-28
          md:top-1/2 md:w-40
          lg:w-52
        "
      />

      {/* === fish 1 === */}
      <Image
        src="/images/fish1.png"
        alt="Description"
        width={300}
        height={300}
        className="
          absolute -z-10 opacity-80

          /* MOBILE: tetap tengah agar tidak terganggu fish7 */
          left-1/2 top-1/2 -translate-x-1/2 translate-y-10 w-[300px]

          /* DESKTOP */
          sm:left-0 sm:translate-x-0 sm:w-28 sm:opacity-100 sm:translate-y-20
          md:w-40 md:translate-y-full
          lg:w-52
        "
      />

      <Section2 />

      {/* === fish 6 === */}
      <Image
        src="/images/fish6.png"
        alt="Description"
        width={300}
        height={300}
        className="
          absolute -z-10

          /* MOBILE: sedikit diperkecil */
          w-[200px] left-1/2 bottom-50 -translate-x-1/2 opacity-80

          /* DESKTOP */
          sm:w-28 sm:right-0 sm:left-auto sm:bottom-0 sm:translate-x-0 sm:opacity-100
          md:w-40 md:-translate-y-1/2
          lg:w-52
        "
      />

      <Section3 />
      <Footer />
    </main>
  )
}
