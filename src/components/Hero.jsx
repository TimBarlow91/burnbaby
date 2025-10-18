export default function Hero() {
    return (
        <section className="relative w-full h-75vh flex items-center justify-center text-center bg-gradient-to-b from-black/90 via-black/70 to-black/50">
            {/* Placeholder for background vid or fire animation */}
            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover"
            >
                <source src="/fire-loop.mp4" type="video/mp4" />
            </video>

            <div className="relative z-10 p-6">
                <h1 className="text-5xl sm:text6xl md:text-7xl font-bold text-[#FF007F] mb-4">
                    BURNBABY™
                </h1>
                <p className="text-xl sm:text-2xl text-white mb-8 max-w-xl mx-auto">
                    A 28-Day Reset for Women Who Want It All. Heal your gut, tone your body, ignite your fire.
                </p>
                <button className="bg-gradient-to-r from-]#FF007F] to-orange-500 text-white font-bold px-6 py-3 rounded-lg hover:from-pink-600 hover:to-orange-600 transition">
                    Join The Challenge!
                </button>
            </div>
        </section>
    )
}