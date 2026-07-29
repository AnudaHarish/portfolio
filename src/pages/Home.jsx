import { DarkModeBtn } from "../components/DarkmodeBtn";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
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
      </main>

      {/* footer */}
    </div>
  )
}