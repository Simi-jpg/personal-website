import avatar from "@/../public/assets/img/avatar.png";
import books from "@/../public/assets/img/books.png"; 
import games from "@/../public/assets/img/games.png";
import music from "@/../public/assets/img/music.png";
import pasta from "@/../public/assets/img/pasta.png";

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
          <div className = "absolute top-[12%] left-[12%] z-10">
            <OrbitButton label = "about.exe" imageSrc = {games} variant="green" className="float-slow"/>
          </div>

          {/* Top - Right */}
          <div className = "absolute top-[18%] right-[10%] z-10">
            <OrbitButton label = "connect" imageSrc = {books} variant="pink" className="float-medium"/>
          </div>  

          {/* Bottom - right */}
          <div className = "absolute bottom-[10%] right-[14%] z-10">
            <OrbitButton label = "projects/" imageSrc = {pasta} variant="green" className="float-slow"/>
          </div>

          {/* Bottom - left*/}
          <div className = "absolute bottom-[14%] left-[8%] z-10">
            <OrbitButton label = "thoughts.log" imageSrc = {music} variant="pink" className="float-fast"/>
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
