import { FaFire } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="relative w-full h-[75vh] flex items-center justify-center text-center bg-gradient-to-b from-black via-black/90 to-[#1a0010] overflow-hidden">
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
            <div className="relative z-10 p-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#FF007F] hero-glow flex items-center justify-center gap-2 select-none">
                    <span>BURN</span>
                    <FaFire className="text-[#FF007F] text-4xl sm:text-5xl md:text-6xl hero-flame-glow" />
                    <span>BABY</span>
                    <span className="ml-1 text-sm sm:text-base md:text-lg align-top hero-glow">™</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-xl mx-auto drop-shadow-[0_0_6px_#ff007f40]">
                    A 28-Day Reset for Women Who Want It All. Heal your gut, tone your body, ignite your fire.
                </p>
                <button className="bg-gradient-to-r from-[#FF007F] to-[#ff4fa3] text-white font-bold px-8 py-3 rounded-lg shadow-[0_0_12px_#ff007f80] hover:shadow-[0_0_18px_#ff007f] hover:scale-105 transition-all duration-300">
                    Join The Challenge!
                </button>
            </div>
        </section>
    )
}