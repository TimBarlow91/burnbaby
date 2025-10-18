import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks } from './navLinks'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full bg-black/90 text-white fixed top-0 left-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-[#FF007F]">BURNBABY™</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="hover:text-[#FF007F] transition">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-black/95 flex flex-col items-center space-y-4 py-6 text-lg">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} onClick={() => setIsOpen(false)}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}