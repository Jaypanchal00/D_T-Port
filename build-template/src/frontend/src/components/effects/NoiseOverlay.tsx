export default function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage: 'url(/assets/generated/noise-texture.dim_1024x1024.png)',
        backgroundRepeat: 'repeat',
      }}
    />
  );
}
