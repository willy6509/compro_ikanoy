import { SocialIcon } from '../ui'
import Image from 'next/image'

export default function Section3() {
  return (
    <section id="product" className="mb-32 flex w-full justify-center px-4">
      <div className="flex w-full max-w-5xl flex-col gap-12 p-10">
        
        {/* ===== BAGIAN PRODUK ===== */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-center text-2xl font-bold text-black">
            Produk Unggulan Ikanoy
          </p>

          <p className="max-w-md text-center text-sm text-black/80">
            Dari ikan kering mentah hingga varian matang siap saji — kami hadirkan cita rasa laut Nusantara dengan rasa gurih, renyah, dan inovatif.
          </p>

          {/* Grid produk */}<div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
  {[
    { name: 'Ikan Kering Mentah Asin', img: '/images/ikan-asin.png' },
    { name: 'Ikan Kering Mentah Manis', img: '/images/ikan-manis.png' },
    { name: 'Ikan Kering Balado', img: '/images/ikan-balado.png' },
    { name: 'Ikan Kering BBQ', img: '/images/ikan-bbq.png' },
    { name: 'Ikan Kering Original', img: '/images/ikan-original.png' },
    // { name: 'Ikan Kering Pedas Manis', img: '/images/ikan-pedas-manis.png' },
  ].map((product, index) => (
    // --- MULAI KARTU PRODUK (DIGANTI) ---
    <div
      key={index}
      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
    >
      {/* Gambar Produk:
        - Kita gunakan prop width/height untuk menentukan rasio aspek (1:1).
        - Kita gunakan className "w-full h-auto" agar gambar mengisi lebar kartu.
      */}
      <Image
        src={product.img}
        alt={product.name}
        width={400}  // Prop untuk rasio (misal: 400x400)
        height={400} // Prop untuk rasio (misal: 400x400)
        className="w-full h-auto object-cover" // Styling agar responsif
      />

      {/* Bagian Detail Produk */}
      <div className="p-3">
        {/* Nama Produk:
          - line-clamp-2 membatasi teks jadi 2 baris.
          - h-12 (tinggi 3rem) memastikan semua kartu punya tinggi teks yang sama,
            bahkan jika nama produknya pendek (hanya 1 baris).
        */}
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2 h-12">
          {product.name}
        </h3>
      </div>
    </div>
    // --- AKHIR KARTU PRODUK ---
  ))}
</div>
        </div>

        {/* ===== BAGIAN REVIEW ===== */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-center text-2xl font-bold text-black">
            Kata Mereka
          </p>

          <p className="max-w-md text-center text-sm text-black/80">
            Beberapa pelanggan kami telah mencoba Ikanoy dan membagikan pengalaman mereka.
            Inilah suara dari mereka yang merasakan cita rasa tradisi dengan sentuhan modern.
          </p>

          <div className="flex flex-col gap-4 text-center w-full max-w-lg">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-black/90 italic">
                “Ikanoy bikin makan malam jadi cepat dan enak, tanpa ribet!”
              </p>
              <p className="mt-2 text-sm font-semibold text-black">– Rina, Mahasiswa Semarang</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-black/90 italic">
                “Akhirnya ada ikan kering yang kekinian dan aman buat anak-anak.”
              </p>
              <p className="mt-2 text-sm font-semibold text-black">– Ibu Dwi, Ibu Rumah Tangga</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-black/90 italic">
                “Rasanya gurih, renyah, dan cocok banget buat anak kos yang pengen makan praktis.”
              </p>
              <p className="mt-2 text-sm font-semibold text-black">– Bayu, Mahasiswa UNDIP</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 pt-4">
            <SocialIcon src="/images/instagram.svg" alt="Instagram" tooltip="@ikanoy.id" />
            <SocialIcon src="/images/tiktok.svg" alt="TikTok" tooltip="@ikanoy.official" />
          </div>
        </div>
      </div>
    </section>
  )
}
