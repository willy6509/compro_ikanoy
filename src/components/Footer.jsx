export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center gap-3 border-t border-black/20 bg-white/10 py-10 backdrop-blur-md">
      <p className="text-sm text-black/70">
        © {new Date().getFullYear()} Ikanoy. All Rights Reserved.
      </p>
      <p className="text-black/70 text-center">
        Crafted with care in Semarang using Next.js & Tailwind CSS
      </p>

      <div className="absolute right-0 bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </footer>
  )
}
