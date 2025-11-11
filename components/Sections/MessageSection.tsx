"use client";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PersonalMessageSection() {
  return (
    <motion.section
      // =======================================================
      // PERUBAHAN RESPONSIVE DI SINI
      // =======================================================
      className="relative 
                 mx-4 md:mx-auto               
                 md:max-w-4xl
                 px-6 md:px-8                  
                 py-12              
                 mt-8 md:mt-12                  
                 text-white rounded-3xl shadow-2xl 
                 bg-[#1a1836]/70 backdrop-blur-sm 
                 border border-purple-700/30 overflow-hidden"
      // =======================================================
      // Sisa props Anda (sudah benar)
      // =======================================================
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ staggerChildren: 0.25, duration: 0.5 }}
      whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
    >
      <div
        className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] 
                       bg-gradient-radial from-pink-500/30 to-transparent 
                       blur-[80px] animate-pulse"
      />

      <motion.h2
        className="text-4xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6"
        variants={itemVariants}
      >
        Ucapan Personal dari Teman
      </motion.h2>

      <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
        Selamat menempuh hidup baru! Rasanya ikut terharu melihat dua orang baik
        dipertemukan untuk saling melengkapi. Semoga setiap langkah kalian
        selalu dipenuhi cinta, tawa, dan keberkahan. Terima kasih sudah jadi
        rekan kerja yang hebat — sekarang waktunya jadi pasangan hidup yang luar
        biasa juga. Bahagia selalu!
      </motion.p>

      <motion.p
        className="text-right italic text-pink-300/80 mt-6"
        variants={itemVariants}
      >
        — Dari sahabat & rekan kerjamu
      </motion.p>
    </motion.section>
  );
}
