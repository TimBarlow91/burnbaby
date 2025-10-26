import { FaFire } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-black/90 to-[#1a0010] overflow-hidden py-20 sm:py-24 md:py-28">
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover opacity-30"
            >
                <source src="/fire-loop.mp4" type="video/mp4" />
            </video>

            {/* Content */}
            <div className="relative z-10 px-6 max-w-3xl mx-auto space-y-8 pb-10 sm:pb-14 md:pb-20">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#FF007F] hero-glow flex items-center justify-center gap-2 select-none">
                    <span>BURN</span>
                    <FaFire className="text-[#FF007F] text-4xl sm:text-5xl md:text-6xl hero-flame-glow" />
                    <span>BABY</span>
                    <span className="ml-[3px] text-[0.55em] sm:text-[0.6em] md:text-[0.65em] align-super opacity-80 neon-balanced">™</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed drop-shadow-[0_0_6px_#ff007f40]">
                    A 28-Day Reset for Women Who Want It All. Heal your gut, tone your body, ignite your fire.
                </p>

                <button className="bg-gradient-to-r from-[#FF007F] to-[#ff4fa3] text-white font-bold px-10 py-4 rounded-lg shadow-[0_0_12px_#ff007f80] hover:shadow-[0_0_18px_#ff007f] hover:scale-105 transition-all duration-300">
                    Join The Challenge!
                </button>

                {/* New paragraphs below button */}
                <p className="text-base sm:text-lg text-gray-300 mt-6 drop-shadow-[0_0_5px_#ff007f50]">
                    Your transformation starts today — no shortcuts, no excuses.
                </p>
                <p className="text-sm sm:text-base text-[#FF007F] font-medium tracking-wide drop-shadow-[0_0_6px_#ff007f90]">
                    BurnBaby™ isn’t just a program — it’s a movement.
                </p>
            </div>
        </section>
    )
}