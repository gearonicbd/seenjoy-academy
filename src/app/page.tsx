import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhatYouLearn from "@/components/landing/WhatYouLearn";
import MasterclassStructure from "@/components/landing/MasterclassStructure";
import MentorSection from "@/components/landing/MentorSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import MobileFloatingBar from "@/components/landing/MobileFloatingBar";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <HeroSection />
        <WhatYouLearn />
        <MasterclassStructure />
        <MentorSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileFloatingBar />
    </>
  );
}
