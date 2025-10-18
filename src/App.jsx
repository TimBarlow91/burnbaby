function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-8">
      {/* Hero Section */}
      <h1 className="text-6xl font-bold text-[#FF007F] mb-4">BURNBABY™</h1>
      <p className="text-2xl text-black mb-8">“Feminine. Fierce. Fit.”</p>

      {/* CTA Button */}
      <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold px-6 py-3 rounded-lg hover:from-pink-600 hover:to-orange-600 transition">
        Join the Challenge 🔥
      </button>
    </div>
  );
}

export default App;