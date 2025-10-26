import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaFire } from 'react-icons/fa';
import { navLinks } from './navLinks';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-black/95 text-white fixed top-0 left-0 z-50 border-b-[1.5px] border-[#ff007f]/60 shadow-[0_0_20px_#ff007f40]">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

                {/* Logo */}
                <div className="flex items-center font-extrabold select-none text-[#FF007F] neon-text">
                    <span className="text-xl sm:text-2xl md:text-3xl">BURN</span>
                    <FaFire className="mx-1 text-[#FF007F] text-xl sm:text-2xl md:text-3xl flame-static-glow animate-flame-pulse" />
                    <span className="text-xl sm:text-2xl md:text-3xl">BABY</span>
                    {/* ™ stays original size */}
                    <span className="ml-[3px] text-[1em] sm:text-[1.6em] md:text-[1.4em] align-super tracking-tight opacity-85">™</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center font-medium">
                    {navLinks.map((link, index) => (
                        <li key={link.name} className="flex items-center">
                            <a
                                href={link.href}
                                className="relative px-5 py-2 text-white transition-all duration-[750ms] ease-in-out transform
                                hover:text-[#FF007F] hover:-translate-y-[3px]
                                hover:drop-shadow-[0_0_25px_#ff007f]
                                before:absolute before:inset-0 before:rounded-md before:opacity-0
                                before:transition-all before:duration-[750ms] before:ease-in-out
                                hover:before:opacity-100
                                before:shadow-[0_0_30px_#ff007fb0,0_0_60px_#ff007f80,0_0_90px_#ff007f60]"
                            >
                                {link.name}
                            </a>
                            {index < navLinks.length - 1 && (
                                <div className="w-px h-6 bg-[#FF007F]/50 mx-1 shadow-[0_0_10px_#ff007f80]" />
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        className="focus:outline-none relative w-7 h-7 transition-transform duration-500 ease-in-out active:scale-95"
                    >
                        {/* Hamburger */}
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out
                            ${isOpen ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
                        >
                            <HiMenu className="w-7 h-7 text-[#FF007F]" />
                        </div>
                        {/* X */}
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out
                            ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'}`}
                        >
                            <HiX className="w-7 h-7 text-[#FF007F]" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden transition-all duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)]`}
                style={{
                    transformOrigin: 'top right',
                    transform: isOpen
                        ? 'rotateY(0deg) rotateX(0deg) scale(1)'
                        : 'rotateY(-85deg) rotateX(10deg) scale(0.9)',
                    opacity: isOpen ? 1 : 0,
                    perspective: '1200px',
                    backgroundColor: 'rgba(0,0,0,0.95)',
                    borderTop: '1px solid rgba(255,0,127,0.4)',
                    boxShadow: isOpen
                        ? '0 0 35px 10px rgba(255,0,127,0.45), 0 0 80px 25px rgba(255,0,127,0.2)'
                        : '0 0 0 rgba(255,0,127,0)',
                    transformStyle: 'preserve-3d',
                    maxHeight: isOpen ? '480px' : '0px',
                    overflow: 'hidden',
                }}
            >
                <ul className="flex flex-col items-center space-y-5 py-6 pb-14 text-lg z-50 relative">
                    {navLinks.map((link, index) => (
                        <li key={link.name} className="w-full text-center">
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-white transition-all duration-300
                                hover:text-[#FF007F] hover:drop-shadow-[0_0_15px_#ff007f] active:scale-95"
                            >
                                {link.name}
                            </a>
                            {index < navLinks.length - 1 && (
                                <div className="w-1/2 h-px mx-auto bg-[#FF007F]/40 shadow-[0_0_8px_#ff007f80]" />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}