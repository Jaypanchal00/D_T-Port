import { useEffect, useRef, ReactNode, useState } from 'react';

interface RevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function Reveal({
  children,
  width = '100%',
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
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
  }, [delay]);

  const directionClass = {
    up: 'translate-y-20',
    down: '-translate-y-20',
    left: 'translate-x-20',
    right: '-translate-x-20',
  };

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-x-0 translate-y-0'
            : `opacity-0 ${directionClass[direction]}`
        }`}
      >
        {children}
      </div>
    </div>
  );
}
