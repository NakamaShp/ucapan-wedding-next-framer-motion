import HeroSection from "@/components/Sections/HeroSection";
import PersonalMessageSection from "@/components/Sections/MessageSection";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-fuchsia-800 to-gray-900 overflow-y-hidden overflow-hidden">
      <HeroSection />
      <div>
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-10 text-center">
          Ucapan dari Team
        </h2>

        <PersonalMessageSection />
      </div>
    </main>
  );
}
