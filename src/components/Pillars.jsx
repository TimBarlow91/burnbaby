export default function Pillars() {
    const pillars = [
        { letter: 'H', text: 'Heal' },
        { letter: 'B', text: 'Burn' },
        { letter: 'G', text: 'Grow' },
    ];

    return (
        <section className="flex flex-col sm:flex-row justify-around items-center py-20 bg-black text-white">
            {pillars.map((pillar) => (
                <div
                    key={pillar.letter}
                    className="flex flex-col items-center mb-12 sm:mb-0 group transition-all duration-300"
                >
                    {/* Pink Circle */}
                    <div
                        className="w-24 h-24 bg-[#FF007F] rounded-full flex items-center justify-center
                       shadow-[0_0_25px_#ff007f80] group-hover:shadow-[0_0_45px_#ff007f]
                       transform group-hover:scale-110 transition-all duration-300"
                    >
                        <span className="text-3xl font-extrabold text-black drop-shadow-[0_0_4px_white]">
                            {pillar.letter}
                        </span>
                    </div>

                    {/* Label Text Below */}
                    <p className="mt-4 text-xl font-semibold tracking-wide drop-shadow-[0_0_6px_#ff007f80]">
                        {pillar.text}
                    </p>
                </div>
            ))}
        </section>
    );
}