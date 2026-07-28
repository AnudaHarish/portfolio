import { DarkModeBtn } from "../components/DarkmodeBtn";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";

export default function HomePage(){
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x">
      {/* toggle buttons */}
      <DarkModeBtn />
      {/* moving animations */}
      <StarBackground />
      {/* nav bar */}
      <Navbar />
      {/* main content */}

      {/* footer */}
    </div>
  )
}