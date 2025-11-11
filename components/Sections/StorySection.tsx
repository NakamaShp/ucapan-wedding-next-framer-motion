"use client"
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 bg-[#232946] rounded-3xl shadow-lg mt-12 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 text-pink-400"
      >
        Cerita Singkat
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="text-lg leading-relaxed"
      >
        Dinda dan Raka bertemu secara tidak sengaja di sebuah acara perusahaan. Dari sana, benih cinta tumbuh dan bersemi hingga akhirnya mereka memutuskan untuk melewati hidup bersama.
      </motion.p>
    </section>
  );
}
