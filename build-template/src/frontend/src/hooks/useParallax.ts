import { useRef, useEffect, useState } from 'react';
import useReducedMotionPreference from './useReducedMotionPreference';

export default function useParallax(offset: number = 50) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionPreference();
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTransform(0);
      return;
    }

    if (!ref.current) return;

    const element = ref.current;
    const elementTop = element.offsetTop;
    const clientHeight = window.innerHeight;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elementHeight = element.offsetHeight;
      
      const initial = elementTop - clientHeight;
      const final = elementTop + elementHeight;
      
      // Calculate progress through the element's viewport range
      const progress = (scrollY - initial) / (final - initial);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      setTransform(clampedProgress * offset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset, prefersReducedMotion]);

  return { ref, transform };
}
