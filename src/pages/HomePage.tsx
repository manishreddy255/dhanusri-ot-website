import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Conditions from '../components/Conditions';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Experience from '../components/Experience';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import StickyCTA from '../components/StickyCTA';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Conditions />
      <Process />
      <Testimonials />
      <Experience />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCTA />
    </div>
  );
}
