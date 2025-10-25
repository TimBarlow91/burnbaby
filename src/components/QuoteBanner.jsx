export default function QuoteBanner() {
    return (
        <section className="bg-black py-16 px-4 text-center text-white relative">
            {/* Subtle section glow divider above */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#FF007F]/40 shadow-[0_0_12px_#ff007f70]" />

            <p className="text-2xl sm:text-3xl italic font-semibold max-w-2xl mx-auto drop-shadow-[0_0_8px_#ff007f40]">
                “She stopped chasing and started creating — now everything burns for her.”
            </p>

            <button className="mt-8 bg-gradient-to-r from-[#FF007F] to-[#ff4fa3] text-white font-bold px-8 py-3 rounded-lg shadow-[0_0_12px_#ff007f80] hover:shadow-[0_0_18px_#ff007f] hover:scale-105 transition-all duration-300">
                Start Your Burn Journey
            </button>

            {/* Subtle section glow divider below */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FF007F]/40 shadow-[0_0_12px_#ff007f70]" />
        </section>
    )
}