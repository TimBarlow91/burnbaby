// eslint-disable-next-line no-unused-vars
import { FaFire } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUpInOut } from "../animations";

export default function Hero() {
    return (
        <section className="relative vw-fill min-h-[80vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-black/90 to-[#1a0010] overflow-hidden py-20 sm:py-24 md:py-28">
            <video
                autoPlay loop muted playsInline preload="metadata" poster="/Squat_image.png"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full object-cover opacity-20 pointer-events-none select-none"
            >
                <source src="/animated_squat.mp4" type="video/mp4" />
            </video>

            <motion.div
                variants={fadeUpInOut}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ amount: 0.1 }}
                className="relative z-10 mx-auto space-y-8 pb-10 sm:pb-14 md:pb-20 text-center flex flex-col items-center justify-center w-full max-w-[90%] sm:max-w-3xl px-4"
            >
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#FF007F] hero-glow flex items-center justify-center gap-2 select-none">
                    <span>BURN</span>
                    <FaFire className="text-[#FF007F] text-4xl sm:text-5xl md:text-6xl hero-flame-glow" />
                    <span>BABY</span>
                    <span className="ml-[3px] text-[0.55em] sm:text-[0.6em] md:text-[0.65em] align-super opacity-80 neon-balanced">™</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed drop-shadow-[0_0_6px_#ff007f40]">
                    A 28-Day Reset for Women Who Want It All. Heal your gut, tone your body, ignite your fire.
                </p>

                <button className="relative inline-flex items-center justify-center overflow-hidden rounded-lg px-10 py-4 font-bold text-white text-lg glow-pulse transition-all duration-300 ease-in-out hover:scale-105"
                    style={{ fontFamily: "'Poppins', sans-serif", textShadow: "0 0 6px #ff4fa3" }}>
                    <video autoPlay loop muted playsInline preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover opacity-35">
                        <source src="/BurnbabyFlamesSmall.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff007f40] to-[#ff4fa340] mix-blend-soft-light"></div>
                    <span className="relative z-10">Join The Challenge!</span>
                </button>

                <p className="text-base sm:text-lg text-gray-300 mt-6 drop-shadow-[0_0_5px_#ff007f50]">
                    Your transformation starts today — no shortcuts, no excuses.
                </p>
                <p className="text-sm sm:text-base text-[#FF007F] font-medium tracking-wide drop-shadow-[0_0_6px_#ff007f90]">
                    BurnBaby™ isn’t just a program — it’s a movement.
                </p>
            </motion.div>
        </section>
    );
}