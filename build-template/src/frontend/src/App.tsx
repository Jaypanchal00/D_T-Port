import { useEffect, useState } from 'react';
import Navbar from './components/nav/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import PageLoader from './components/motion/PageLoader';
import CursorFollower from './components/effects/CursorFollower';
import AnimatedGradientBackground from './components/effects/AnimatedGradientBackground';
import NoiseOverlay from './components/effects/NoiseOverlay';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <PageLoader />}

      {!isLoading && (
        <div className="relative min-h-screen">
          {/* Background Effects */}
          <AnimatedGradientBackground />
          <NoiseOverlay />
          
          {/* Cursor Follower */}
          <CursorFollower />

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
            <FooterSection />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
