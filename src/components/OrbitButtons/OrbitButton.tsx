
import Image from "next/image";

type OrbitButtonProps = {
  label: string;
  imageSrc?: string;
  variant?: "pink" | "green";
  className?: string;
};

export default function OrbitButton({
  label,
  imageSrc,
  variant = "pink",
  className = "",
}: OrbitButtonProps) {

  const bgColor =
    variant === "pink"
      ? "bg-[var(--color-bubble-pink)]"
      : "bg-[var(--color-bubble-green)]";

  const shadowColor =
    variant === "pink"
      ? "shadow-[0_0_60px_rgba(246,193,204,0.5)]"
      : "shadow-[0_0_60px_rgba(140,181,97,0.5)]";

  return (
    <div
      className={`
        relative
        w-full
        aspect-square
        rounded-full
        overflow-hidden
        flex items-center
        justify-center
        backdrop-blur-md
        transition-transform
        duration-300
        hover:scale-105
        ${bgColor}
        ${shadowColor}
        ${className}
      `}
    >

      {/* Bubble highlight */}
      <div
        className="
          absolute inset-0
          rounded-full
          bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),transparent_40%)]
          pointer-events-none
          z-20
        "
      />

      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={label}
          fill
          sizes="(max-width: 768px) 65px, 140px"
          className="object-cover"
        />
      ) : (
        <span className="relative z-10 px-2 text-center text-sm text-[var(--color-black)]">
          {label}
        </span>
      )}

    </div>
  );
}