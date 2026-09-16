
export default function About() {
  return (
    <main className="flex min-h-screen flex items-center justify-center p-24">

      <div className = "grid grid-cols-1 lg:grid-cols-2 gap-30 max-w-6xl w-full">

        {/* Left Panel */}

        <div className="rounded-3xl border border-[var(--color-pink)] bg-white/5 backdrop-blur-md p-8
              shadow-[inset_0_0_8px_rgba(140,181,97,0.25),0_0_15px_rgba(140,181,97,0.15)] rotate-[-3deg]
            ">
         
          <p>

            I&apos;m a fourth-year Computer Science Co-op student at the University of Manitoba, with a minor in Mathematics.

            My primary interest lies in software development, and I&apos;m currently seeking my first co-op work term. I&apos;m excited to take my knowledge beyond the classroom, 
            contribute to real-world software, and gain professional experience working alongside other developers.

            </p>
          
        </div>

        {/* Right Panel */}

        {/* <div className = "rounded-3xl bg-[var(--color-white)] backdrop-blur-md p-8 border-10 border-[var(--color-green)] min-h-[300px] rotate-[4deg]"> */}
          <div className="rounded-3xl border border-[var(--color-green)] bg-white/5 backdrop-blur-md p-8
              shadow-[inset_0_0_8px_rgba(140,181,97,0.25),0_0_15px_rgba(140,181,97,0.15)] rotate-[3deg]
            ">
          <p>
            
            I&apos;m open to exploring different areas of software development and look forward to discovering where my skills and interests can make the greatest impact.

            Outside of computer science, I enjoy playing the cello, badminton, drawing, reading, and hiking. I also love experimenting with pasta recipes 
            and am currently on a mission to perfect my Alfredo sauce.

            I&apos;m always looking for something new to try, whether that&apos;s rock climbing, volleyball, or pretty much any activity that catches my attention. 
            I enjoy playing games too (Candy Crush counts, and I will not be taking any questions). I also take my sleep very seriously and make sure to get my eight hours.

            If I could, I&apos;d probably disappear into the countryside and raise ten pigs. But for now, I&apos;ve got a degree to finish.

          </p>
          
        </div>


      </div>
      </main>
  );
}
