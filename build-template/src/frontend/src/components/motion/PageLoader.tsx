export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] bg-dark flex items-center justify-center animate-fade-out animation-delay-1500">
      <div className="text-center">
        <div className="mb-8 animate-scale-in">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-neon-cyan via-neon-purple to-electric-blue p-[3px] shadow-neon-glow mx-auto">
            <div className="w-full h-full rounded-2xl bg-dark flex items-center justify-center">
              <img
                src="/assets/generated/logo-mark.dim_512x512.png"
                alt="Loading"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 animate-fade-in animation-delay-300">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
