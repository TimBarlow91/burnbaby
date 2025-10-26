import { FaHeart, FaFire, FaLeaf } from 'react-icons/fa';
import '../index.css';

export default function Pillars() {
    const pillars = [
        {
            icon: <FaHeart className="text-black text-3xl drop-shadow-[0_0_4px_white] animate-heartbeat" />,
            text: 'Heal',
            subtext: 'Heal your body, mind, soul, and heart!'
        },
        {
            icon: <FaFire className="text-black text-3xl drop-shadow-[0_0_4px_white] animate-flame-flicker" />,
            text: 'Burn',
            subtext: 'Burn the calories. Burn the fat. Burn the negative thoughts and feelings away!'
        },
        {
            icon: <FaLeaf className="text-black text-3xl drop-shadow-[0_0_4px_white] animate-leaf-sway" />,
            text: 'Grow',
            subtext: 'Grow your confidence! Grow your self-love! Grow the new and improved YOU!'
        },
    ];

    return (
        <section className="flex flex-col sm:flex-row justify-around items-center py-20 bg-black text-white text-center">
            {pillars.map((pillar, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center mb-12 sm:mb-0 group transition-all duration-300 max-w-xs"
                >
                    {/* Glowing Pink Circle */}
                    <div
                        className="w-24 h-24 bg-[#FF007F] rounded-full flex items-center justify-center
                        shadow-[0_0_25px_#ff007f80] group-hover:shadow-[0_0_45px_#ff007f]
                        transform group-hover:scale-110 transition-all duration-300"
                    >
                        {pillar.icon}
                    </div>

                    {/* Title */}
                    <p className="mt-4 text-xl font-semibold tracking-wide drop-shadow-[0_0_6px_#ff007f80]">
                        {pillar.text}
                    </p>

                    {/* Subtext */}
                    <p className="mt-2 text-sm text-[#FF007F] italic leading-relaxed max-w-[220px] drop-shadow-[0_0_8px_#ff007f70]">
                        {pillar.subtext}
                    </p>
                </div>
            ))}
        </section>
    );
}