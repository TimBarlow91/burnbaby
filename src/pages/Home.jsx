import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import QuoteBanner from '../components/QuoteBanner';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Hero />
            <div className="vw-fill h-[1.5px] bg-[#FF007F]/40 shadow-[0_0_10px_#ff007f70]" />
            <Pillars />
            <div className="vw-fill h-[1.5px] bg-[#FF007F]/40 shadow-[0_0_10px_#ff007f70]" />
            <QuoteBanner />
            <div className="vw-fill h-[1.5px] bg-[#FF007F]/40 shadow-[0_0_10px_#ff007f70]" />
        </>
    );
}