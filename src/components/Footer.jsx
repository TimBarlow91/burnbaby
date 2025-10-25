import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    const linkPairs = [
        ['Home', 'About'],
        ['Programs', 'Packages'],
        ['Testimonials', 'Contact'],
    ];
    const toHref = (t) => `/${t.toLowerCase()}`;

    return (
        <footer className="bg-black text-white py-10 border-t border-[#ff007f]/50 shadow-[0_0_15px_#ff007f40]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top: Links (left) + Social (right) */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                    {/* LEFT: two-at-a-time links with perfectly aligned vertical separator */}
                    <div className="mt-8 space-y-5">
                        {linkPairs.map((pair, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-[max-content_16px_max-content] items-center"
                            >
                                {/* Link 1 */}
                                <a
                                    href={toHref(pair[0])}
                                    className="text-base md:text-lg transition hover:text-[#FF007F] hover:drop-shadow-[0_0_8px_#ff007f]"
                                >
                                    {pair[0]}
                                </a>

                                {/* Fixed-width separator column (keeps bar perfectly aligned) */}
                                <div className="flex justify-center">
                                    <span className="block w-px h-5 bg-[#FF007F]/40 shadow-[0_0_8px_#ff007f80]" />
                                </div>

                                {/* Link 2 */}
                                <a
                                    href={toHref(pair[1])}
                                    className="text-base md:text-lg transition hover:text-[#FF007F] hover:drop-shadow-[0_0_8px_#ff007f]"
                                >
                                    {pair[1]}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Social icons (kept lower) */}
                    <div className="mt-6 md:mt-10 flex items-start justify-start md:justify-end gap-8 md:gap-10 w-full md:w-auto">
                        <div className="flex flex-col items-center">
                            <a href="#" aria-label="Facebook"
                                className="text-[#1877F2] text-3xl md:text-4xl hover:scale-110 transition drop-shadow-[0_0_10px_#1877F2]">
                                <FaFacebook />
                            </a>
                            <p className="hidden md:block text-sm mt-1 text-gray-400">Facebook</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="#" aria-label="Instagram"
                                className="text-[#E4405F] text-3xl md:text-4xl hover:scale-110 transition drop-shadow-[0_0_10px_#E4405F]">
                                <FaInstagram />
                            </a>
                            <p className="hidden md:block text-sm mt-1 text-gray-400">Instagram</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="#" aria-label="WhatsApp"
                                className="text-[#25D366] text-3xl md:text-4xl hover:scale-110 transition drop-shadow-[0_0_10px_#25D366]">
                                <FaWhatsapp />
                            </a>
                            <p className="hidden md:block text-sm mt-1 text-gray-400">WhatsApp</p>
                        </div>
                    </div>
                </div>

                {/* Keep this divider + bottom row */}
                <div className="w-full h-px bg-[#FF007F]/40 shadow-[0_0_10px_#ff007f70] my-8" />

                <div className="w-full flex justify-between items-center text-sm text-gray-400">
                    <p>© 2025 BurnBaby™ All Rights Reserved</p>
                    <p>Developed by Dark Fire Software Solutions</p>
                </div>
            </div>
        </footer>
    );
}