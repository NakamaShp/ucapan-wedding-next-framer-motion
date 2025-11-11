"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // <-- Kita perlu Link untuk tombol
import { ArrowDown } from "lucide-react"; // <-- Ikon untuk tombol (opsional, tapi keren)

// =======================================================
// VARIAN ANIMASI UNTUK TEKS (Staggering / Berurutan)
// =======================================================
// Ini adalah "parent"
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // <-- Jeda antar anak (h1, p, p, button)
    },
  },
};

// Ini adalah "children" (item di dalamnya)
const textItemVariants = {
  hidden: { opacity: 0, y: 30 }, // <-- Mulai dari bawah
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center 
                 px-6 md:px-20 py-12 gap-16 md:gap-12 text-white overflow-hidden
                 // =======================================================
                 // BG BARU: Gradient radial gelap untuk nuansa 
                 // =======================================================
                 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900"
    >
      {/* Ini adalah elemen "parent" untuk animasi teks.
        Kita ganti 'animate' jadi 'whileInView' dan tambahkan 'viewport'.
      */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        // =======================================================
        // PERUBAHAN ANIMASI UTAMA (Teks)
        // =======================================================
        initial="hidden" // <-- Mulai dari state "hidden"
        whileInView="visible" // <-- Animasikan ke state "visible" saat di-scroll
        viewport={{ once: false, amount: 0.3 }} // <-- Ulangi ('once: false')
        variants={textContainerVariants} // <-- Gunakan varian "parent"
      >
        {/* Setiap 'motion' di dalam sini adalah 'child' dan akan di-stagger */}

        <motion.h1
          className="text-7xl lg:text-8xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          variants={textItemVariants} // <-- Gunakan varian "child"
        >
          Dinda & Raka
        </motion.h1>

        <motion.p
          className="text-pink-300 text-2xl mb-6 font-semibold"
          variants={textItemVariants} // <-- Gunakan varian "child"
        >
          20 Oktober 2025
        </motion.p>

        <motion.p
          className="text-white/80 text-lg mb-10"
          variants={textItemVariants}
        >
          Memulai perjalanan hidup baru bersama dengan cinta dan kebahagiaan.
          Terima kasih telah menjadi inspirasi.
        </motion.p>

        {/* ======================================================= */}
        {/* TAMBAHAN: Tombol CTA (Call to Action) */}
        {/* ======================================================= */}
        <motion.div variants={textItemVariants}>
          <Link
            href="#undangan" // <-- Ganti dengan ID section undangan Anda
            className="group relative inline-flex items-center justify-center gap-2 
                       rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                       px-8 py-3 text-lg font-semibold text-white shadow-lg
                       transition-all duration-300 ease-in-out
                       hover:shadow-xl hover:shadow-purple-500/30"
          >
            {/* Efek "kilau" saat di-hover */}
            <span
              className="absolute inset-0 w-full h-full rounded-full 
                         bg-white opacity-0 transition-opacity duration-300 
                         group-hover:opacity-10 group-hover:blur-lg"
            />
            Lihat Undangan
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Ini adalah elemen gambar.
        Kita juga gunakan 'whileInView' di sini.
      */}
      <motion.div
        className="max-w-sm rounded-full shadow-2xl overflow-hidden"
        // =======================================================
        // PERUBAHAN ANIMASI UTAMA (Gambar)
        // =======================================================
        initial={{ opacity: 0, scale: 0.8, rotate: -15, x: 50 }} // <-- Animasi awal
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          x: 0,
        }} // <-- Animasi saat terlihat
        viewport={{ once: false, amount: 0.3 }} // <-- Ulangi ('once: false')
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05, rotate: 2 }} // <-- Efek Gen Z saat di-hover
      >
        <Image
          src="/galeri/galeri2.jpg"
          alt="Foto Pengantin"
          width={500}
          height={500}
          className="overflow-hidden" // <-- 'object-cover' mungkin lebih baik
          priority
        />
      </motion.div>
    </section>
  );
}
