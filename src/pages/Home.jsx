import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import { DarkModeBtn } from "../components/DarkmodeBtn";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import ProjectSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSections";
import { StarBackground } from "../components/StarBackground";

export default function HomePage(){
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* toggle buttons */}
      <DarkModeBtn />
      {/* moving animations */}
      <StarBackground />
      {/* nav bar */}
      <Navbar />
      {/* main content */}
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* footer */}
      <Footer />
    </div>
  )
}