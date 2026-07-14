import { Heart } from 'lucide-react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'portfolio-app'
  );

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm animate-fade-in-up">
              © {currentYear} John Doe. All rights reserved.
            </p>

            {/* Attribution */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground animate-fade-in-up animation-delay-100">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-neon-cyan fill-neon-cyan animate-pulse-slow" />
              <span>using</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-electric-blue transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-muted-foreground hover:text-neon-cyan transition-all hover:scale-105 animate-fade-in-up animation-delay-200"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
