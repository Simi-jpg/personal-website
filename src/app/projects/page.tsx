import ProjectsHero from "@/components/ProjectsHero/ProjectsHero";
import ProjectFeatureCard from "@/components/ProjectFeatureCard/ProjectFeatureCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Campus Shenanigans",
      label: "Featured Project",
      description:
        "Built to solve a real student problem: missing campus events and opportunities. Designed and developed as an Android platform with clean layered architecture, role-based access, and offline-first usability.",
      tech: ["Java", "Android", "SQLite", "Architecture"],
      github: "https://github.com/Simi-jpg/Campus-Shenanigans",
      projectLink: "https://campus-shenanigans.vercel.app/",
    },
    {
      title: "Personal Website",
      label: "Creative Frontend",
      description:
        "A personal portfolio designed to feel expressive, polished, and interactive while still presenting my work clearly.",
      tech: ["Next.js", "React", "Tailwind", "TypeScript"],
      github: "https://github.com/Simi-jpg/personal-website",
      projectLink: "https://personal-website-three-kohl-26.vercel.app/",
    },
    {
      title: "NBA SQL CLI",
      label: "Data & Backend",
      description:
        "Built a command-line NBA stats explorer using SQL queries and cleaned data. Focused on efficient querying, structure, and practical data handling.",
      tech: ["SQL", "Python", "CLI", "Data Cleaning"],
      github: "https://github.com/Simi-jpg/database-nba",
      projectLink: "#",
    }
  ];

  return (
    <main className="bg-[var(--color-black)] text-white">
      {/* Section 1 Hero */}
      <ProjectsHero />

      {/* Section 2 Projects */}
      <section className="px-6 md:px-12 lg:px-20 py-28">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <p className="text-[var(--color-green)] uppercase tracking-[0.3em] text-sm mb-4">
            Selected Work
          </p>

          <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-20">
            Projects That{" "}
            <span className="italic text-[var(--color-green)]">
              Shaped Me
            </span>
          </h2>

          {/* Cards */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectFeatureCard
                key={project.title}
                {...project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 Tech Stack */}
      <section className="px-6 md:px-12 lg:px-20 py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-[var(--color-green)] uppercase tracking-[0.3em] text-sm mb-4">
            Capabilities
          </p>

          <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-20">
            Technical{" "}
            <span className="italic text-[var(--color-green)]">
              Toolkit
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl mb-6">Languages</h3>

              <div className="flex flex-wrap gap-3">
                {["Java", "Python", "SQL", "JavaScript", "C", "C++"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl mb-6">Frontend</h3>

              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "Tailwind", "HTML", "CSS", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl mb-6">Backend / Data</h3>

              <div className="flex flex-wrap gap-3">
                {["SQLite", "MSSQL", "APIs", "CLI Apps", "Architecture"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl mb-6">Tools</h3>

              <div className="flex flex-wrap gap-3">
                {["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Canva"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}