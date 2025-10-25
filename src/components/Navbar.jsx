import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks } from './navLinks'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full bg-black/95 text-white fixed top-0 left-0 z-50 shadow-[0_0_20px_#ff007f40] border-b-[1.5px] border-[#ff007f]/60 shadow-pink-500/30">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-[#FF007F] drop-shadow-[0_0_8px_#ff007f]">
                    BURNBABY™
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center font-medium">
                    {navLinks.map((link, index) => (
                        <li key={link.name} className="flex items-center">
                            <a
                                href={link.href}
                                className="px-5 transition hover:text-[#FF007F] hover:drop-shadow-[0_0_8px_#ff007f]"
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
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? (
                            <HiX className="w-7 h-7 text-[#FF007F]" />
                        ) : (
                            <HiMenu className="w-7 h-7 text-[#FF007F]" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-black/95 flex flex-col items-center space-y-4 py-6 text-lg border-t border-[#FF007F]/40 shadow-[0_0_10px_#ff007f60]">
                    {navLinks.map((link, index) => (
                        <li key={link.name} className="w-full text-center">
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 hover:text-[#FF007F] hover:drop-shadow-[0_0_6px_#ff007f]"
                            >
                                {link.name}
                            </a>
                            {index < navLinks.length - 1 && (
                                <div className="w-1/2 h-px mx-auto bg-[#FF007F]/40 shadow-[0_0_8px_#ff007f80]" />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}