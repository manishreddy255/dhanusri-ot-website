import { useState, useEffect } from 'react';
import { MessageSquare, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      {/* Sticky bottom bar for mobile — Book + Blog */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
          <div className="bg-white border-t border-gray-200 px-4 py-3 shadow-lg flex gap-3">
            <Link
              to="/blog"
              className="flex items-center justify-center gap-2 bg-white border-2 border-teal-600 text-teal-700 flex-1 py-3 rounded-xl font-semibold text-sm"
            >
              <BookOpen size={16} />
              Blog
            </Link>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-teal-600 text-white flex-1 py-3 rounded-xl font-semibold text-sm"
            >
              <MessageSquare size={16} />
              Book Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
