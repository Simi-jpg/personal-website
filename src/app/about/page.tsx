
export default function About() {
  return (
    <main className="flex min-h-screen flex items-center justify-center p-24">

      <div className = "grid grid-cols-1 lg:grid-cols-2 gap-30 max-w-6xl w-full">

        {/* Left Panel */}

        <div className = "rounded-3xl bg-[var(--color-white)] backdrop-blur-md p-8 shadow-[0_0_120px_rgba(246,193,204,1.0)] min-h-[300px] rotate-[-3deg]">
         
          <p>
            Hi, I&apos;m Simi. I&apos;m someone who learns by exploring. Instead of committing to one path early, I&apos;ve spent time trying different areas of tech to understand what actually fits me.

            I enjoy when things feel personal. Whether it&apos;s building this website or working on a project, I naturally lean toward creating things that reflect identity rather than just functionality.

            A lot of my ideas come from connecting things I enjoy outside of tech like music, visuals, storytelling, and then bringing that into what I build.
          </p>
          
        </div>

        {/* Right Panel */}

        <div className = "rounded-3xl bg-[var(--color-white)] backdrop-blur-md p-8 shadow-[0_0_120px_rgba(140,181,97,1.0)] min-h-[300px] rotate-[4deg]">
          
          <p>
            I&apos;m currently a third-year Computer Science student at the University of Manitoba, actively working toward my first co-op opportunity.

            Through my coursework and projects, I&apos;ve focused on building strong fundamentals in software development. My work on Campus Shenanigans helped me understand how to structure applications using layered architecture, and how to think through both system design and user experience.

            I tend to learn best by building, which has led me to explore different areas of development as I refine where I want to specialize. Right now, I&apos;m especially interested in roles that allow me to contribute to real systems while continuing to grow as a developer.
          </p>
          
        </div>


      </div>
      </main>
  );
}
