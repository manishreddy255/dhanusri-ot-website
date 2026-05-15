import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky bottom CTA for mobile */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
          >
            <div className="bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-lavender-600 text-white w-full py-3 rounded-xl font-semibold text-sm"
              >
                <Send size={16} />
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating action button (desktop + mobile) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-24 right-4 lg:bottom-8 z-40"
          >
            <a
              href="#contact"
              className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-500 to-lavender-500 hover:from-teal-600 hover:to-lavender-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all group"
              aria-label="Book a consultation"
            >
              <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
