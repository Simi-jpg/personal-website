
import Image from "next/image";
import OrbitButton from "@/components/OrbitButtons/OrbitButton";
import Butterfly from "@/components/Butterfly/Butterfly";

const avatar = "/assets/img/avatar.png";
const books = "/assets/img/books.png";
const games = "/assets/img/games.png";
const music = "/assets/img/music.png";
const pasta = "/assets/img/pasta.png";
const cello = "/assets/img/cello.png";

export default function Home() {
  return (
    <>
      <Butterfly />

      <main
        className="
          relative
          h-dvh
          w-full
          flex
          items-center
          justify-center
          overflow-hidden
          px-4
          pt-20
          box-border
        "
      >

        {/* Circular layout */}
        <div
          className="
            relative
            w-[min(90vw,calc(100dvh-8rem),800px)]
            aspect-square
            shrink-0
          "
        >

          {/* TOP: About */}
          <div
            className="
              absolute
              top-[4%]
              left-1/2
              -translate-x-1/2
              z-10
              w-[16%]
              max-w-[140px]
            "
          >
            <div className="float-slow">
              <OrbitButton
                label="about.exe"
                imageSrc={games}
                variant="green"
              />
            </div>
          </div>

          {/* LEFT: Cello */}
          <div
            className="
              absolute
              top-[35%]
              left-[12%]
              -translate-x-1/2
              -translate-y-1/2
              z-10
              w-[16%]
              max-w-[140px]
            "
          >
            <div className="float-fast">
              <OrbitButton
                label="cello"
                imageSrc={cello}
                variant="pink"
              />
            </div>
          </div>

          {/* RIGHT: Connect */}
          <div
            className="
              absolute
              top-[35%]
              right-[12%]
              translate-x-1/2
              -translate-y-1/2
              z-10
              w-[16%]
              max-w-[140px]
            "
          >
            <div className="float-medium">
              <OrbitButton
                label="connect"
                imageSrc={books}
                variant="green"
              />
            </div>
          </div>

          {/* BOTTOM RIGHT: Projects */}
          <div
            className="
              absolute
              bottom-[10%]
              right-[25%]
              translate-x-1/2
              translate-y-1/2
              z-10
              w-[16%]
              max-w-[140px]
            "
          >
            <div className="float-slow">
              <OrbitButton
                label="projects/"
                imageSrc={pasta}
                variant="pink"
              />
            </div>
          </div>

          {/* BOTTOM LEFT: Thoughts */}
          <div
            className="
              absolute
              bottom-[10%]
              left-[25%]
              -translate-x-1/2
              translate-y-1/2
              z-10
              w-[16%]
              max-w-[140px]
            "
          >
            <div className="float-fast">
              <OrbitButton
                label="thoughts.log"
                imageSrc={music}
                variant="green"
              />
            </div>
          </div>

          {/* CENTER: Avatar */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[38%]
              max-w-[320px]
              aspect-square
              rounded-full
              overflow-hidden
              shadow-[0_0_100px_rgba(246,193,204,0.4)]
              z-0
            "
          >
            <Image
              src={avatar}
              alt="avatar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 320px"
              priority
            />
          </div>

        </div>

      </main>
    </>
  );
}