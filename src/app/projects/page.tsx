import ProjectOrb from "@/components/ProjectOrbs/ProjectOrb";

export default function projects() {


  const projects = [

    {
      id: 1, name: "Project 1",
    },
    {
      id: 2, name: "Project 2",
    },
    {      id: 3, name: "Project 3",
    },
  ];


  return (
    <main className = "min-h-screen pt-28 px-8">

      <h1 className = "text-4xl text-center mb-12 text-[var(--color-green)]">
        My Projects
      </h1>

      <div className = "flex flex-wrap gap-8 justify-center">
        {projects.map((project) => (
          <ProjectOrb key={project.id} name={project.name} number={project.id} />
        ))}
      </div>
    </main>
  );
}
