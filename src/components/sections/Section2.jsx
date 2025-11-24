export default function Section2() {
  return (
    <section id="about" className="min-h-[70vh]">
      {/* text about */}
      <div className="mb-12 flex flex-col gap-2">
        <p className="text-center text-xl font-semibold">About us</p>
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-15 border-b-2 border-black" />
          <div className="h-3 w-3 rotate-45 bg-black" />
          <div className="h-1 w-15 border-b-2 border-black" />
        </div>
      </div>

      {/* biografi singkat */}
      <div className="flex justify-center">
        <div className="flex w-1/2 flex-col items-center justify-center text-center">
          <p className="text-xl font-semibold text-[#00b4d8]">IKANOY</p>
          <p className="mb-3 text-2xl font-bold capitalize">Gurihnya Laut Indonesia, Sekarang Hadir di Setiap Gigitan.</p>
          <p className="italic">
            Ikanoy menghadirkan ikan kering bergizi dan praktis untuk gaya hidup modern.
Kami mengolah ikan segar lokal dengan teknik higienis dan kemasan inovatif, menjadikannya sumber protein tahan lama yang lezat dan terjangkau bagi semua kalangan.
          </p>
        </div>
      </div>
    </section>
  );
}
