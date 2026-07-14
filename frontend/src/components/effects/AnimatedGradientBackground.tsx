export default function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />

      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] bg-electric-blue/10 rounded-full blur-3xl animate-float-slow" />
    </div>
  );
}
