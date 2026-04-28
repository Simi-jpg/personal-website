import Butterfly from "@/components/Butterfly/Butterfly";

export default function ProjectsHero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 pt-24 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/assets/img/flowers.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Soft center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,181,97,0.12),transparent_45%)]" />

      {/* Text */}
      <div className="relative z-10 text-center max-w-4xl -mt-28">
        <p className="text-[var(--color-green)] tracking-[0.35em] uppercase text-sm mb-6">
          My Work, My Growth
        </p>

        <h1 className="text-6xl md:text-8xl leading-none font-serif">
          Projects in <br />
          <span className="italic text-[var(--color-green)]">
            Flight
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Every project is a step forward. Here’s what I’ve built,
          learned, and loved so far.
        </p>
      </div>

    </section>
  );
}