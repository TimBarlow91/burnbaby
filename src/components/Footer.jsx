import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Footer() {
    const linkPairs = [
        ['Home', 'About'],
        ['Programs', 'Packages'],
        ['Testimonials', 'Contact'],
    ];

    const toHref = (t) => (t === 'Home' ? '/' : `/${t.toLowerCase()}`);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target;
                    if (entry.isIntersecting) {
                        el.classList.add('footer-in-view');
                    } else {
                        el.classList.remove('footer-in-view'); // allows re-trigger on scroll
                    }
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll('.footer-anim').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <footer className="relative text-white py-10 border-t border-[#ff007f]/50 shadow-[0_0_25px_#ff007f60] overflow-hidden">
            {/* Background gradient: glowing pink fading into black toward center top */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#ff007f]/40 via-[#1a0010]/80 to-black opacity-95"></div>

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                {/* ROW on all sizes so left/right align on mobile, too */}
                <div className="flex flex-row justify-between items-start gap-10">
                    {/* Link sections (left) */}
                    <div className="mt-4 space-y-5">
                        {linkPairs.map((pair, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-[max-content_16px_max-content] items-center"
                            >
                                <a
                                    href={toHref(pair[0])}
                                    className="text-base md:text-lg transition-all duration-300 hover:text-[#FF007F] hover:drop-shadow-[0_0_12px_#ff007f]"
                                >
                                    {pair[0]}
                                </a>
                                <div className="flex justify-center">
                                    <span className="block w-px h-5 bg-[#FF007F]/50 shadow-[0_0_10px_#ff007f80]" />
                                </div>
                                <a
                                    href={toHref(pair[1])}
                                    className="text-base md:text-lg transition-all duration-300 hover:text-[#FF007F] hover:drop-shadow-[0_0_12px_#ff007f]"
                                >
                                    {pair[1]}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Social (right) — vertical on mobile, horizontal on desktop */}
                    <div className="mt-4 w-auto flex justify-end">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
                            <div className="flex flex-col items-center footer-anim">
                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="text-[#1877F2] text-3xl md:text-4xl hover:scale-110 transition drop-shadow-[0_0_10px_#1877F2]"
                                >
                                    <FaFacebook />
                                </a>
                                <p className="hidden md:block text-sm mt-1 text-gray-400">Facebook</p>
                            </div>

                            <div className="flex flex-col items-center footer-anim" style={{ transitionDelay: '80ms' }}>
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="text-[#E4405F] text-3xl md:text-4xl hover:scale-110 transition drop-shadow-[0_0_10px_#E4405F]"
                                >
                                    <FaInstagram />
                                </a>
                                <p className="hidden md:block text-sm mt-1 text-gray-400">Instagram</p>
                            </div>

                            <div className="flex flex-col items-center footer-anim" style={{ transitionDelay: '160ms' }}>
                                <a
                                    href="#"
                                    aria-label="WhatsApp"
                                    className="text-[#25D366] text-3xl md:text-4xl hover:scale-110 transition drop-shadow-[0_0_10px_#25D366]"
                                >
                                    <FaWhatsapp />
                                </a>
                                <p className="hidden md:block text-sm mt-1 text-gray-400">WhatsApp</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#FF007F]/40 shadow-[0_0_15px_#ff007f80] my-8" />

                <div className="w-full flex justify-between items-center text-sm text-gray-400">
                    <p>© 2025 BurnBaby™ All Rights Reserved</p>
                    <p>Developed by Dark Fire Software Solutions</p>
                </div>
            </div>
        </footer>
    );
}