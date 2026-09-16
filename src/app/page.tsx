const avatar = "/assets/img/avatar.png";
const books = "/assets/img/books.png";
const games = "/assets/img/games.png";
const music = "/assets/img/music.png";
const pasta = "/assets/img/pasta.png";
const cello = "/assets/img/cello.png";

import Image from "next/image";
import OrbitButton  from "@/components/OrbitButtons/OrbitButton";
import Butterfly from "@/components/Butterfly/Butterfly";


export default function Home() {
  return (
    <>
      <Butterfly />
      
      <div className = "min-h-screen flex items-center justify-center px-[8%] lg:px-[12%] pt-24">

        <div className="relative w-[1100px] h-[900px] flex items-center justify-center">

          {/* Top - left */}   
          <div className = "absolute top-[12%] left-[-22%] z-10">
            <OrbitButton label = "about.exe" imageSrc = {games} variant="green" className="float-slow"/>
          </div>

          <div className = "absolute top-[10%] right-[-20%] z-10">
            <OrbitButton label = "cello" imageSrc = {cello} variant="pink" className="float-fast"/>
          </div>

          {/* Top - Right */}
          <div className = "absolute top-[18%] right-[-40%] z-10">
            <OrbitButton label = "connect" imageSrc = {books} variant="green" className="float-medium"/>
          </div>  

          {/* Bottom - right */}
          <div className = "absolute bottom-[10%] right-[-20%] z-10">
            <OrbitButton label = "projects/" imageSrc = {pasta} variant="pink" className="float-slow"/>
          </div>

          {/* Bottom - left*/}
          <div className = "absolute bottom-[14%] left-[-20%] z-10">
            <OrbitButton label = "thoughts.log" imageSrc = {music} variant="green" className="float-fast"/>
          </div>


          {/* Center avatar */}
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-[0_0_100px_rgba(246,193,204,0.4)] z-0">

            <Image
              src = {avatar}
              alt = "avatar"
              fill
              className="object-cover"
              sizes="400px"
            />
            
          </div>
          
        </div>  
              
      
      </div>
    </>
  );
}
