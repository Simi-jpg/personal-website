type ProjectOrbProps = {
    name: string;
    number: number;
}


export default function ProjectOrb({ name, number }: ProjectOrbProps) {
    return (
        <div className = "relative w-40 h-40 flex items-center justify-center">

            {/* floating number */}
            <div className="absolute -top-8 text-[var(--color-pink)] text-lg font-semibold">
                {number}
            </div>

            {/* orb */}
            <div
                className="w-30 h-30 rounded-full flex items-center justify-center text-center
                bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(246,193,204,0.25)]"
                >

                <span className="text-sm text-[var(--color-black)] font-large px-3">
                    {name}
                </span>
            </div>
        </div>
    );
}