import MusicButton from "@/components/Sections/ButtonMusic";
import HeroSection from "@/components/Sections/HeroSection";
import PersonalMessageSection from "@/components/Sections/MessageSection";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-fuchsia-800 to-gray-900">
      <HeroSection />
      <PersonalMessageSection />
      
    </main>
  );
}
