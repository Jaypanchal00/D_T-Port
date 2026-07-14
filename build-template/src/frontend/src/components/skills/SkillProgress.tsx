import { useEffect, useRef, useState } from 'react';

interface SkillProgressProps {
  name: string;
  level: number;
  delay?: number;
}

export default function SkillProgress({ name, level, delay = 0 }: SkillProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      let current = 0;
      const increment = level / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= level) {
          setDisplayLevel(level);
          clearInterval(interval);
        } else {
          setDisplayLevel(Math.floor(current));
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isVisible, level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-neon-cyan font-semibold">{displayLevel}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}
