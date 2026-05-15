import { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const BlogSection = lazy(() => import('../components/BlogSection'));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Suspense fallback={<div className="py-20 bg-teal-50/30" />}>
        <BlogSection />
      </Suspense>
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
