import { useState, useEffect } from 'react';
import { MessageSquare, Send } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky bottom CTA for mobile */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden sticky-cta-enter ${isVisible ? 'visible' : ''}`}
      >
        <div className="bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-teal-600 text-white w-full py-3 rounded-xl font-semibold text-sm"
          >
            <Send size={16} />
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Floating action button */}
      <div
        className={`fixed bottom-24 right-4 lg:bottom-8 z-40 fab-enter ${isVisible ? 'visible' : ''}`}
      >
        <a
          href="#contact"
          className="flex items-center justify-center w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all group"
          aria-label="Book a consultation"
        >
          <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </>
  );
}
