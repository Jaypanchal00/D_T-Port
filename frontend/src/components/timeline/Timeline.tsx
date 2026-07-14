import { useRef, useState, useEffect } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { TimelineItem } from '../../data/timeline';

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-cyan via-neon-purple to-electric-blue hidden md:block" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItemComponent key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItemComponent({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 200);
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : `opacity-0 ${isLeft ? '-translate-x-12' : 'translate-x-12'}`
      }`}
    >
      {/* Content */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neon-cyan/30 hover:shadow-neon-glow transition-all duration-300">
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
              item.type === 'experience' 
                ? 'from-neon-cyan to-electric-blue' 
                : 'from-neon-purple to-pink-500'
            } p-[2px]`}>
              <div className="w-full h-full rounded-lg bg-dark flex items-center justify-center">
                {item.type === 'experience' ? (
                  <Briefcase className="w-5 h-5 text-neon-cyan" />
                ) : (
                  <GraduationCap className="w-5 h-5 text-neon-purple" />
                )}
              </div>
            </div>
            <span className="text-sm text-neon-cyan font-semibold">{item.period}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
          <p className="text-neon-purple font-medium mb-3">{item.organization}</p>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple shadow-neon-glow hidden md:block" />
    </div>
  );
}
