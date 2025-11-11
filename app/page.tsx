import HeroSection from "@/components/Sections/HeroSection";
import PersonalMessageSection from "@/components/Sections/MessageSection";
import GallerySection from "@/components/Sections/GaleriSection";
import StorySection from "@/components/Sections/StorySection";
import WishesSection from "@/components/Sections/Wishes";
import GuestbookSection from "@/components/Sections/GuestBook";
import ShareSection from "@/components/Sections/ShareSection";


export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#232946] via-[#3a2c60] to-[#141629]">
      <HeroSection />
      <PersonalMessageSection />
      <GallerySection />
      <StorySection />
      <WishesSection />
      <GuestbookSection />
      <ShareSection />
    </main>
  );
}
