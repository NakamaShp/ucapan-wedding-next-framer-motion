"use client"
import { motion } from "framer-motion";

export default function WishesSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 mt-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl text-white shadow-lg">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold mb-4 text-center"
      >
        Doa dan Harapan
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="text-lg text-center max-w-xl mx-auto leading-relaxed"
      >
        Semoga setiap langkah hidup kalian bersama dipenuhi cinta, tawa, dan keberkahan sepanjang masa.
      </motion.p>
    </section>
  );
}
