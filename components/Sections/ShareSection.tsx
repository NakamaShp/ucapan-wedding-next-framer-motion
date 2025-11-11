"use client";
import { motion } from "framer-motion";

export default function ShareSection() {
  const shareUrl = "https://ucapannikah.example.com";

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link berhasil disalin!");
  };

  return (
    <section className="max-w-md mx-auto mt-16 mb-12 px-6 py-8 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-3xl text-white shadow-lg text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl font-semibold mb-4"
      >
        Bagikan Kebahagiaan Ini
      </motion.h2>
      <button
        onClick={copyLink}
        className="px-8 py-3 rounded-full bg-white text-pink-500 font-semibold shadow-lg hover:bg-pink-100 transition"
      >
        Salin Link Undangan
      </button>
    </section>
  );
}
