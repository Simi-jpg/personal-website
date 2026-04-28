type ProjectFeatureCardProps = {
  title: string;
  label: string;
  description: string;
  tech: string[];
  reverse?: boolean;
  github?: string;
  projectLink?: string;
};

export default function ProjectFeatureCard({
  title,
  label,
  description,
  tech,
  reverse = false,
  github = "#",
  projectLink = "#",
}: ProjectFeatureCardProps) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="h-[320px] rounded-2xl bg-gradient-to-br from-[var(--color-pink)]/20 to-transparent border border-white/10 flex items-center justify-center text-white/40 text-xl">
        Project Preview
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-4">
          {label}
        </p>

        <h3 className="text-4xl md:text-5xl font-semibold mb-6">{title}</h3>

        <p className="text-white/75 text-lg leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {tech.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          <a
            href={projectLink}
            className="px-6 py-3 rounded-full bg-[var(--color-green)] text-black font-medium hover:scale-105 transition"
          >
            View Project
          </a>

          <a
            href={github}
            className="px-6 py-3 rounded-full border border-white/15 hover:bg-white/5 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}