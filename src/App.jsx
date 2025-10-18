import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Packages from './pages/Packages';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}