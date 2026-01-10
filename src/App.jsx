import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import AboutUs from './components/organisms/AboutUs';
import Services from './components/organisms/Services';
import Benefits from './components/organisms/Benefits';
import Values from './components/organisms/Values';
import FinalCTA from './components/organisms/FinalCTA';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-axion-blue/20">
      <Navbar />
      
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Benefits />
        <Values />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App;