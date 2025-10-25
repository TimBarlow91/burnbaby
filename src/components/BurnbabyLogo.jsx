import { FaFire } from "react-icons/fa";

export default function BurnbabyLogo() {
    return (
        <div className="flex items-center justify-center py-6 select-none">
            <h1
                className="flex items-center justify-center 
  text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold 
  uppercase tracking-[2px] 
  bg-gradient-to-r from-[#ff4fa3] via-[#FF007F] to-[#ff4fa3] bg-clip-text text-transparent drop-shadow-[0_0_20px_#ff007f90]
  hover:drop-shadow-[0_0_25px_#ff007f]
  transition-all duration-300"
            >
                BURN
                <span
                    className="mx-3 text-5xl sm:text-6xl md:text-7xl text-[#FF007F]
          drop-shadow-[0_0_20px_#ff007f80] hover:scale-110 transition-transform"
                >
                    <FaFire />
                </span>
                BABY<span className="text-3xl sm:text-4xl md:text-5xl ml-1">™</span>
            </h1>
        </div>
    );
}
