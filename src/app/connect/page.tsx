export default function ConnectPage() {
  const contactItems = [
    {
      label: "Email",
      value: "simiadeniyi97@gmail.com",
      link: "mailto:simiadeniyi97@gmail.com",
    },
    {
      label: "GitHub",
      value: "Simi-jpg",
      link: "https://github.com/Simi-jpg",
    },
    {
      label: "LinkedIn",
      value: "Similoluwa Adeniyi",
      link: "https://www.linkedin.com/in/similoluwa-adeniyi-a816ab307/",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[var(--color-black)] text-white overflow-hidden px-6 pt-32 pb-20">

      {/*Glitter stars */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8)_1px,transparent_2px),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.6)_1px,transparent_2px),radial-gradient(circle_at_40%_70%,rgba(255,255,255,0.5)_1px,transparent_2px)] bg-[length:200px_200px,260px_260px,320px_320px] opacity-60" />

      {/*Soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,193,204,0.12),transparent_50%)]" />

      {/* sparkles */}
      <div className="absolute top-20 left-10 text-white/40 animate-pulse">✦</div>
      <div className="absolute bottom-32 right-16 text-white/30 animate-pulse">✧</div>
      <div className="absolute top-1/2 left-1/4 text-white/20 animate-pulse">✦</div>

      {/* Content */}
      <section className="relative z-10 max-w-4xl mx-auto text-center">

        <p className="text-[var(--color-green)] uppercase tracking-[0.3em] text-sm mb-6">
          Contact
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
          Let&apos;s{" "}
          <span className="italic text-[var(--color-pink)]">
            connect
          </span>
        </h1>

        <p className="text-white/70 text-lg max-w-xl mx-auto mb-16">
          Whether it&apos;s an opportunity, collaboration, or just a shared curiosity,
          I&apos;d love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 
              hover:scale-[1.03] transition-all duration-300
              shadow-[0_0_20px_rgba(246,193,204,0.15)]
              hover:shadow-[0_0_40px_rgba(246,193,204,0.35)]"
            >
              <p className="text-white/40 text-sm uppercase tracking-[0.25em] mb-4">
                {item.label}
              </p>

              <h2 className="text-xl group-hover:text-[var(--color-green)] transition">
                {item.value}
              </h2>
            </a>
          ))}
        </div>

      </section>
    </main>
  );
}