import { useEffect, useState } from 'react';

// Gentle floating nature elements using pure CSS animations
// Respects prefers-reduced-motion for accessibility

export default function FloatingElements() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Butterfly 1 - Top right, teal */}
      <div
        className="absolute top-[15%] right-[8%] opacity-20"
        style={{ animation: 'float-butterfly-1 15s ease-in-out infinite' }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 18C16 18 13 12 8 10C3 8 2 14 6 17C10 20 16 18 16 18Z"
            fill="#14b8a6"
            opacity="0.7"
          />
          <path
            d="M16 18C16 18 19 12 24 10C29 8 30 14 26 17C22 20 16 18 16 18Z"
            fill="#14b8a6"
            opacity="0.7"
          />
          <path
            d="M16 18C16 18 14 22 12 25C10 28 14 30 16 26C18 22 16 18 16 18Z"
            fill="#0d9488"
            opacity="0.5"
          />
          <path
            d="M16 18C16 18 18 22 20 25C22 28 18 30 16 26C14 22 16 18 16 18Z"
            fill="#0d9488"
            opacity="0.5"
          />
          <line x1="16" y1="14" x2="16" y2="26" stroke="#0f766e" strokeWidth="0.8" opacity="0.6" />
          <circle cx="16" cy="13" r="1" fill="#0f766e" opacity="0.8" />
        </svg>
      </div>

      {/* Butterfly 2 - Middle left, lavender */}
      <div
        className="absolute top-[45%] left-[5%] opacity-15"
        style={{ animation: 'float-butterfly-2 18s ease-in-out infinite', animationDelay: '3s' }}
      >
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 18C16 18 13 12 8 10C3 8 2 14 6 17C10 20 16 18 16 18Z"
            fill="#a855f7"
            opacity="0.6"
          />
          <path
            d="M16 18C16 18 19 12 24 10C29 8 30 14 26 17C22 20 16 18 16 18Z"
            fill="#a855f7"
            opacity="0.6"
          />
          <path
            d="M16 18C16 18 14 22 12 25C10 28 14 30 16 26C18 22 16 18 16 18Z"
            fill="#9333ea"
            opacity="0.4"
          />
          <path
            d="M16 18C16 18 18 22 20 25C22 28 18 30 16 26C14 22 16 18 16 18Z"
            fill="#9333ea"
            opacity="0.4"
          />
          <line x1="16" y1="14" x2="16" y2="26" stroke="#7e22ce" strokeWidth="0.8" opacity="0.5" />
          <circle cx="16" cy="13" r="1" fill="#7e22ce" opacity="0.7" />
        </svg>
      </div>

      {/* Butterfly 3 - Bottom right, mixed */}
      <div
        className="absolute bottom-[20%] right-[12%] opacity-20"
        style={{ animation: 'float-butterfly-3 20s ease-in-out infinite', animationDelay: '7s' }}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 18C16 18 13 12 8 10C3 8 2 14 6 17C10 20 16 18 16 18Z"
            fill="#14b8a6"
            opacity="0.5"
          />
          <path
            d="M16 18C16 18 19 12 24 10C29 8 30 14 26 17C22 20 16 18 16 18Z"
            fill="#a855f7"
            opacity="0.5"
          />
          <path
            d="M16 18C16 18 14 22 12 25C10 28 14 30 16 26C18 22 16 18 16 18Z"
            fill="#0d9488"
            opacity="0.3"
          />
          <path
            d="M16 18C16 18 18 22 20 25C22 28 18 30 16 26C14 22 16 18 16 18Z"
            fill="#9333ea"
            opacity="0.3"
          />
          <line x1="16" y1="14" x2="16" y2="26" stroke="#581c87" strokeWidth="0.8" opacity="0.4" />
        </svg>
      </div>

      {/* Leaf 1 - Top left, teal */}
      <div
        className="absolute top-[25%] left-[10%] opacity-15"
        style={{ animation: 'float-leaf-1 12s ease-in-out infinite' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C8 6 4 10 4 14C4 18 7 21 12 21C17 21 20 18 20 14C20 10 16 6 12 2Z"
            fill="#14b8a6"
            opacity="0.6"
          />
          <path d="M12 6V18" stroke="#0d9488" strokeWidth="0.8" opacity="0.5" />
          <path d="M12 10L9 8M12 13L15 11M12 16L10 15" stroke="#0d9488" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      {/* Leaf 2 - Middle right, lavender */}
      <div
        className="absolute top-[60%] right-[6%] opacity-15"
        style={{ animation: 'float-leaf-2 14s ease-in-out infinite', animationDelay: '5s' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C8 6 4 10 4 14C4 18 7 21 12 21C17 21 20 18 20 14C20 10 16 6 12 2Z"
            fill="#a855f7"
            opacity="0.5"
          />
          <path d="M12 6V18" stroke="#9333ea" strokeWidth="0.8" opacity="0.4" />
        </svg>
      </div>

      {/* Leaf 3 - Bottom left, mixed */}
      <div
        className="absolute bottom-[30%] left-[8%] opacity-15"
        style={{ animation: 'float-leaf-3 16s ease-in-out infinite', animationDelay: '2s' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C8 6 4 10 4 14C4 18 7 21 12 21C17 21 20 18 20 14C20 10 16 6 12 2Z"
            fill="#2dd4bf"
            opacity="0.5"
          />
          <path d="M12 6V18" stroke="#14b8a6" strokeWidth="0.8" opacity="0.4" />
          <path d="M12 10L9 8M12 13L15 11" stroke="#14b8a6" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      {/* Small decorative dots */}
      <div
        className="absolute top-[35%] right-[20%] w-2 h-2 rounded-full bg-teal-400 opacity-20"
        style={{ animation: 'float-dot 10s ease-in-out infinite' }}
      />
      <div
        className="absolute top-[70%] right-[25%] w-1.5 h-1.5 rounded-full bg-lavender-400 opacity-20"
        style={{ animation: 'float-dot 12s ease-in-out infinite', animationDelay: '4s' }}
      />
      <div
        className="absolute top-[50%] left-[15%] w-2 h-2 rounded-full bg-teal-300 opacity-15"
        style={{ animation: 'float-dot 14s ease-in-out infinite', animationDelay: '8s' }}
      />
    </div>
  );
}
