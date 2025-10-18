import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import QuoteBanner from './components/QuoteBanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="mt-16"> {/* offset for fixed navbar */}
        <Hero />
        <Pillars />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App