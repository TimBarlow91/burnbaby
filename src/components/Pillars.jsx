export default function Pillars() {
    return (
        <section className="flex flex-col sm:flex-row justify-around items-center py-16 bg-white">
            {['Heal', 'Burn', 'Glow'].map((pillar) => (
                <div key={pillar} className="flex flex-col items-center mb-8 sm:mb-0">
                    <div className="w-24 h-24 bg-[#FF007F] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                        {pillar[0]}
                    </div>
                    <p className="text-xl font-semibold">{pillar}</p>
                </div>
            ))}
        </section>
    )
}