"use client"
import { motion } from "framer-motion";

const guestMessages = [
  { name: "Ayu", message: "Selamat ya! Semoga bahagia selalu." },
  { name: "Budi", message: "Semoga lancar dan langgeng!" },
  { name: "Citra", message: "Terima kasih atas inspirasinya!" },
];

export default function GuestbookSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 mt-12 bg-[#1f2345] rounded-3xl shadow-lg text-white">
      <motion.h2
        className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Ucapan dari Teman
      </motion.h2>
      <div className="space-y-6">
        {guestMessages.map(({ name, message }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.3, duration: 0.6 }}
            className="border border-purple-600 rounded-lg p-4 bg-[#232946]"
          >
            <p className="italic">"{message}"</p>
            <p className="font-semibold mt-2 text-right">- {name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
