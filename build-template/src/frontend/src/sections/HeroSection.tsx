import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Magnetic from '../components/interactive/Magnetic';
import useTypingText from '../hooks/useTypingText';
import useParallax from '../hooks/useParallax';

export default function HeroSection() {
  const roles = ['Frontend Developer', 'UI/UX Enthusiast', 'Creative Coder', 'Problem Solver'];
  const typedRole = useTypingText(roles, 100, 50, 2000);
  const { ref, transform } = useParallax(-20);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${transform}px)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)' }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Mark */}
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-neon-cyan via-neon-purple to-electric-blue p-[2px] shadow-neon-glow">
              <div className="w-full h-full rounded-2xl bg-dark/90 backdrop-blur-sm flex items-center justify-center">
                <img
                  src="/assets/generated/logo-mark.dim_512x512.png"
                  alt="Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Animated Name */}
          <div className="mb-6 animate-fade-in-up animation-delay-200">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="inline-block bg-gradient-to-r from-neon-cyan via-electric-blue to-neon-purple bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
          </div>

          {/* Typing Role */}
          <div className="mb-8 h-12 sm:h-16 flex items-center justify-center animate-fade-in animation-delay-400">
            <p className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-light">
              {typedRole}
              <span className="inline-block w-1 h-8 sm:h-10 bg-neon-cyan ml-1 animate-blink" />
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-600">
            Crafting beautiful, performant web experiences with modern technologies.
            Passionate about clean code and pixel-perfect designs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
            <Magnetic>
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-neon-cyan to-electric-blue text-dark font-semibold px-8 py-6 text-lg rounded-xl hover:shadow-neon-glow transition-all duration-300 group"
              >
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Magnetic>

            <Magnetic>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="border-2 border-neon-purple/50 text-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:bg-neon-purple/10 hover:border-neon-purple hover:shadow-neon-glow-purple transition-all duration-300 group"
              >
                View Projects
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </Magnetic>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-1000">
            <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex items-start justify-center p-2 animate-bounce-slow">
              <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-scroll-indicator" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
