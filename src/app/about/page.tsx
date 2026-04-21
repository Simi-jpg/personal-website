
export default function About() {
  return (
    <main className="flex min-h-screen flex items-center justify-center p-24">

      <div className = "grid grid-cols-1 lg:grid-cols-2 gap-30 max-w-6xl w-full">

        {/* Left Panel */}

        <div className = "rounded-3xl bg-[var(--color-white)] backdrop-blur-md p-8 shadow-[0_0_120px_rgba(246,193,204,1.0)] min-h-[500px] rotate-[-3deg]">
         
          <p>
            Hi, I&apos;m Simi
          </p>
          
        </div>

        {/* Right Panel */}

        <div className = "rounded-3xl bg-[var(--color-white)] backdrop-blur-md p-8 shadow-[0_0_120px_rgba(140,181,97,1.0)] min-h-[500px] rotate-[4deg]">
          
          <p>
            Ohh yeah!!!
          </p>
          
        </div>


      </div>
      </main>
  );
}
