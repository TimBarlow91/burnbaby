export default function QuoteBanner() {
    return (
        <section className="bg-black py-16 px-4 text-center text-white relative">
            {/* Subtle section glow divider above */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#FF007F]/40 shadow-[0_0_12px_#ff007f70]" />

            <p className="text-2xl sm:text-3xl italic font-semibold max-w-2xl mx-auto drop-shadow-[0_0_8px_#ff007f40]">
                “She stopped chasing and started creating — now everything burns for her.”
            </p>

            <button
                className="relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-3 font-bold text-white text-lg glow-pulse transition-all duration-300 ease-in-out hover:scale-105"
                style={{ fontFamily: "'Poppins', sans-serif", textShadow: '0 0 6px #ff4fa3' }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                >
                    <source src="/BurnbabyFlamesSmall.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff007f40] to-[#ff4fa340] mix-blend-soft-light"></div>
                <span className="relative z-10">Start Your Burn Journey</span>
            </button>

            {/* Subtle section glow divider below */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FF007F]/40 shadow-[0_0_12px_#ff007f70]" />
        </section>
    );
}