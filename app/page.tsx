import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import CaseStudies from "@/components/CaseStudies";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function HomePage() {
  return (
    <main className="relative min-h-screen" style={{ zIndex: 1 }}>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <TechStack />
      <Stats />
      <CaseStudies />
      <Experience />
      <FAQ />
      <Footer />
    </main>
  );
}
