"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TrailParticle = {
    id: number;
    x: number;
    y: number;
};

const butterflyFrames = [
    "/assets/img/Butterfly-frames/Butterfly 1.png",
    "/assets/img/Butterfly-frames/Butterfly 2.png",
    "/assets/img/Butterfly-frames/Butterfly 3.png",
    "/assets/img/Butterfly-frames/Butterfly 4.png",
    "/assets/img/Butterfly-frames/Butterfly 5.png",
    "/assets/img/Butterfly-frames/Butterfly 6.png",
    "/assets/img/Butterfly-frames/Butterfly 7.png",
    "/assets/img/Butterfly-frames/Butterfly 8.png",
    "/assets/img/Butterfly-frames/Butterfly 9.png",
    "/assets/img/Butterfly-frames/Butterfly 10.png",
    "/assets/img/Butterfly-frames/Butterfly 11.png",
    "/assets/img/Butterfly-frames/Butterfly 12.png",
    "/assets/img/Butterfly-frames/Butterfly 13.png",
    "/assets/img/Butterfly-frames/Butterfly 14.png",

];

export default function Butterfly() {

    const [position, setPosition] = useState({ x: 200, y: 200 });
    const [trail, setTrail] = useState<TrailParticle[]>([]);
    const [frameIndex, setFrameIndex] = useState(0);

    const particleId = useRef(0);
    const angleRef = useRef(0);


    useEffect(() => {
        const flapInterval = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % butterflyFrames.length);
        }, 90);

        return () => clearInterval(flapInterval);
    }, []);


    useEffect(() => {
        const moveInterval = setInterval(() => {
            angleRef.current += 0.02;

            const centreX = window.innerWidth / 2;
            const centreY = window.innerHeight / 2;

            const radiusX = window.innerWidth * 0.35;
            const radiusY = window.innerHeight * 0.28;

            const x = centreX + radiusX * Math.cos(angleRef.current);
            const y = centreY + radiusY * Math.sin(angleRef.current * 1.4);

            setPosition({ x, y });

            const newParticle = {
                id: particleId.current++,
                x,
                y,
            };

            setTrail((prev) => [...prev, newParticle]);

            setTimeout(() => {
                setTrail((prev) => prev.filter((p) => p.id !== newParticle.id));
            }, 3000);
        }, 60);

        return () => clearInterval(moveInterval);
    }, []);


    return (
    <>
      {trail.map((particle) => (
        <span
          key={particle.id}
          className="pointer-events-none fixed z-30 block h-4 w-4 rounded-full bg-pink-200/70 blur-sm animate-[fadeTrail_3s_linear_forwards]"
          style={{
            left: particle.x,
            top: particle.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      <div
        className="pointer-events-none fixed z-40"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image
          src={butterflyFrames[frameIndex]}
          alt="animated butterfly"
          width={150}
          height={150}
          priority
        />
      </div>
    </>
  );
}