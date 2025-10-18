import { navLinks } from './navLinks'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                {/* Links */}
                <ul className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="hover:text-[#FF007F] transition">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Social Icons */}
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" className="hover:text-[#FF007F] transition">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" target="_blank" className="hover:text-[#FF007F] transition">
                        <FaInstagram />
                    </a>
                    <a href="https://wa.me/1234567890" target="_blank" className="hover:text-[#FF007F] transition">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>

            <p className="text-center text-gray-400 mt-4 text-sm">
                &copy; {new Date().getFullYear()} BURNBABY™. All rights reserved.
            </p>
        </footer>
    )
}