import { lazy, Suspense } from 'react';
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

const BlogSection = lazy(() => import('../components/BlogSection'));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Conditions />
      <Process />
      <Testimonials />
      <Experience />
      <FAQ />
      <Suspense fallback={<div className="py-20 bg-teal-50/30" />}>
        <BlogSection />
      </Suspense>
      <Contact />
      <Footer />
    </div>
  );
}
