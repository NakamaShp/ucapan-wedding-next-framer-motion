"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Varian untuk "parent" (grid)
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // <-- Kunci animasi satu per satu
    },
  },
};

// Varian untuk "children" (gambar)
const imageVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Varian untuk hover (gambar di dalam)
const hoverVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

// Varian untuk judul
const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function GallerySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={titleVariants}
      >
        Galeri Foto
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={gridVariants} // <-- Parent yang mengatur stagger
      >
        {/* ======================================================= */}
        {/* GAMBAR 1 (HARDCODED) */}
        {/* ======================================================= */}
        <motion.div
          className="overflow-hidden rounded-xl shadow-lg cursor-pointer
                     border border-purple-900/30"
          variants={imageVariants} // <-- Child 1
          whileHover="hover"
        >
          <motion.div className="w-full h-full" variants={hoverVariants}>
            <Image
              src="/galeri/galeri1.jpg"
              alt="Foto 1"
              width={300}
              height={300}
              className="object-cover w-full aspect-square"
            />
          </motion.div>
        </motion.div>

        {/* ======================================================= */}
        {/* GAMBAR 2 (HARDCODED) */}
        {/* ======================================================= */}
        <motion.div
          className="overflow-hidden rounded-xl shadow-lg cursor-pointer
                     border border-purple-900/30"
          variants={imageVariants} // <-- Child 2
          whileHover="hover"
        >
          <motion.div className="w-full h-full" variants={hoverVariants}>
            <Image
              src="/galeri/galeri2.jpg"
              alt="Foto 2"
              width={300}
              height={300}
              className="object-cover w-full aspect-square"
            />
          </motion.div>
        </motion.div>

        {/* ======================================================= */}
        {/* GAMBAR 3 (HARDCODED) */}
        {/* ======================================================= */}
        <motion.div
          className="overflow-hidden rounded-xl shadow-lg cursor-pointer
                     border border-purple-900/30"
          variants={imageVariants} // <-- Child 3
          whileHover="hover"
        >
          <motion.div className="w-full h-full" variants={hoverVariants}>
            <Image
              src="/galeri/galeri3.jpg"
              alt="Foto 3"
              width={300}
              height={300}
              className="object-cover w-full aspect-square"
            />
          </motion.div>
        </motion.div>

        {/* ======================================================= */}
        {/* GAMBAR 4 (HARDCODED) */}
        {/* ======================================================= */}
        <motion.div
          className="overflow-hidden rounded-xl shadow-lg cursor-pointer
                     border border-purple-900/30"
          variants={imageVariants} // <-- Child 4
          whileHover="hover"
        >
          <motion.div className="w-full h-full" variants={hoverVariants}>
            <Image
              src="/galeri/galeri4.jpg"
              alt="Foto 4"
              width={300}
              height={300}
              className="object-cover w-full aspect-square"
            />
          </motion.div>
        </motion.div>
        
      </motion.div>
    </section>
  );
}