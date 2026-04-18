//component has a string in it
import Image, { StaticImageData } from "next/image";

type OrbitButtonProps = {
    label: string;
    imageSrc?: StaticImageData;
    variant?: "pink" | "green"; //we choose colors based on the variant prop, default is pink
    className?: string;
};


export default function OrbitButton({ label, imageSrc, variant = "pink", className = ""}: OrbitButtonProps) {

    const bgColor = variant === "pink" ? "bg-[var(--color-bubble-pink)]" 
                                        : "bg-[var(--color-bubble-green)]";

    const shadowColor = variant === "pink" ? "shadow-[0_0_100px_rgba(140,181,97,1.0)] hover:shadow-[0_0_120px_rgba(140,181,97,2.0)]" //pink glow
                                            : "shadow-[0_0_100px_rgba(246,193,204,0.7)] hover:shadow-[0_0_120px_rgba(246,193,204,1.5)]"; //green glow

  return (
    
    <div 
        className = {`relative w-[140px] h-[140px] rounded-full overflow-hidden flex items-center justify-center 
                        backdrop-blur-md transition-transform duration-300 hover:scale-105
                        ${bgColor} ${shadowColor} ${className}`}>

        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),transparent_40%)]" />

        {imageSrc ? (
            <div className = "relative w-[200px] h-[200px] z-10">
                <Image
                    src={imageSrc}
                    alt= {label ?? "orbit item"}
                    fill
                    sizes = "100px"
                    className= "object-cover"
                />
            </div>
        ) : (
        <span className= "relative z-10 px-2 text-center text-sm text-[var(--color-black)]">
            {label}
        </span>
        )}
    </div>
  )
}
