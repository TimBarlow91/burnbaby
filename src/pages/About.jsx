// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { flipFade, spinCoin, flipIn } from "../animations";

export default function About() {
    return (
        <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-start bg-gradient-to-b from-black via-black/90 to-[#1a0010] text-white px-6 py-16 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.15)_0%,transparent_70%)] pointer-events-none" />

            {/* Flip Fade Card */}
            <motion.div
                variants={flipFade}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ amount: 0.1 }}
                className="relative z-10 max-w-3xl w-full bg-black/60 backdrop-blur-sm border border-[#ff007f]/50 rounded-2xl p-8 sm:p-12 shadow-[0_0_25px_#ff007f40] text-center"
            >
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FF007F] mb-6 drop-shadow-[0_0_8px_#ff007f80]"
                    style={{ fontFamily: "'Bodoni Moda', serif" }}>
                    ABOUT BURNBABY™
                </h1>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                    BurnBaby™ was founded on the belief that every woman deserves to feel powerful, confident, and unstoppable.
                    What started as a small movement to inspire healthier lifestyles has grown into a community of women redefining strength and self-love.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Our mission is simple — help women reset, rebuild, and reignite their inner fire. Through dedication, mindset, and movement, we empower every participant to transform from the inside out.
                </p>
                <p className="text-[#FF007F] font-semibold tracking-wide drop-shadow-[0_0_8px_#ff007f90]">
                    “Your transformation starts with one decision — to choose you.”
                </p>
            </motion.div>

            {/* Founder Spotlight */}
            <motion.div
                variants={spinCoin}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ amount: 0.1 }}
                className="relative z-10 mt-16 flex flex-col items-center text-center space-y-4"
            >
                <img
                    src="/founder.jpg"
                    alt="Founder"
                    className="w-32 h-32 rounded-full object-cover border-2 border-[#FF007F]/60 shadow-[0_0_25px_#ff007f60]"
                />
                <h2 className="text-2xl font-bold text-[#FF007F]" style={{ fontFamily: "'Bodoni Moda', serif" }}>Lienkii</h2>
                <p className="text-gray-300 text-base max-w-md">
                    “My mission is to help every woman rediscover her confidence, embrace her body, and set her world on fire.”
                </p>
            </motion.div>

            {/* Core Values / Pillars */}
            <motion.div
                variants={flipIn}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ amount: 0.1 }}
                className="relative z-10 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-5xl w-full px-4"
            >
                {[
                    { title: "Discipline", desc: "The fire that fuels progress." },
                    { title: "Confidence", desc: "Owning your power in every form." },
                    { title: "Transformation", desc: "Becoming the woman you’re meant to be." },
                ].map((item) => (
                    <div key={item.title} className="bg-black/60 border border-[#ff007f]/40 rounded-xl p-6 shadow-[0_0_15px_#ff007f30] hover:shadow-[0_0_25px_#ff007f70] transition-all duration-500">
                        <h3 className="text-xl font-bold text-[#FF007F] mb-3" style={{ fontFamily: "'Bodoni Moda', serif" }}>{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}