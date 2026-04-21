import React from 'react'

export default function projects() {


  const projects = [

    {
      id: 1,
      name: "Project 1",
      tech_stack: ["React", "TypeScript"],
      summary: "A simple project to showcase my skills.",
      github: "https://github.com/username/project1",
    },
  ];


  return (
    <main className = "min-h-screen pt-28 px-8">

      <h1 className = "text-4xl text-center mb-12 text-[var(--color-green)]">
        My Projects
      </h1>

      <div className = "flex flex-wrap gap-8 justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-md border border-white/20
            shadow-[0_0_25px_rgba(246,193,204,0.25)]
            flex items-center justify-center text-center p-4"
          >
            <span className="text-sm text-[var(--color-black)] font-large">
              {project.name}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
