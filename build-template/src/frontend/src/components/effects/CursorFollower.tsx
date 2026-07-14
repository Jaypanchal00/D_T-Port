import { useEffect, useState, useRef } from 'react';
import useReducedMotionPreference from '../../hooks/useReducedMotionPreference';

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const prefersReducedMotion = useReducedMotionPreference();
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if device has a mouse
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouch || prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Smooth trail animation
    const animateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      rafRef.current = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', moveCursor);
    rafRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [prefersReducedMotion, position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-neon-cyan pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      />
      
      {/* Trailing glow */}
      <div
        className="fixed top-0 left-0 w-12 h-12 rounded-full bg-neon-cyan/20 blur-xl pointer-events-none z-[9998] transition-transform duration-300"
        style={{
          transform: `translate(${trailPosition.x - 24}px, ${trailPosition.y - 24}px)`,
        }}
      />
    </>
  );
}
