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
      github: "#",
      projectLink: "#",
    },
    {
      title: "NBA SQL CLI",
      label: "Data & Backend",
      description:
        "Built a command-line NBA stats explorer using SQL queries and cleaned data. Focused on efficient querying, structure, and practical data handling.",
      tech: ["SQL", "Python", "CLI", "Data Cleaning"],
      github: "#",
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
    </main>
  );
}