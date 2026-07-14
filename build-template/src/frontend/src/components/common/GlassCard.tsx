import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div
      className={`relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 ${
        hover ? 'hover:border-neon-cyan/30 hover:shadow-neon-glow hover:-translate-y-2 hover:scale-[1.02]' : ''
      } transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
