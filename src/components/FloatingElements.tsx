import { useEffect, useState } from 'react';

// Cute, visible animals and plants that add warmth without being distracting
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
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
      
      {/* 🐘 Cute Baby Elephant - Bottom left corner */}
      <div
        className="absolute bottom-[12%] left-[3%] opacity-60"
        style={{ animation: 'float-elephant 18s ease-in-out infinite' }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          {/* Body */}
          <ellipse cx="50" cy="60" rx="28" ry="24" fill="#ccfbf1" />
          {/* Head */}
          <circle cx="50" cy="38" r="20" fill="#ccfbf1" />
          {/* Big ears */}
          <ellipse cx="28" cy="36" rx="12" ry="16" fill="#99f6e4" />
          <ellipse cx="72" cy="36" rx="12" ry="16" fill="#99f6e4" />
          {/* Trunk */}
          <path d="M46 48 Q50 62 54 48" stroke="#0d9488" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="43" cy="34" r="2.5" fill="#0f766e" />
          <circle cx="57" cy="34" r="2.5" fill="#0f766e" />
          {/* Eye highlights */}
          <circle cx="44" cy="33" r="1" fill="white" />
          <circle cx="58" cy="33" r="1" fill="white" />
          {/* Cute blush */}
          <circle cx="38" cy="40" r="3" fill="#99f6e4" opacity="0.6" />
          <circle cx="62" cy="40" r="3" fill="#99f6e4" opacity="0.6" />
          {/* Legs */}
          <rect x="32" y="78" width="8" height="12" rx="4" fill="#99f6e4" />
          <rect x="44" y="80" width="8" height="12" rx="4" fill="#99f6e4" />
          <rect x="56" y="80" width="8" height="12" rx="4" fill="#99f6e4" />
          <rect x="32" y="78" width="8" height="12" rx="4" fill="none" stroke="#0d9488" strokeWidth="1" opacity="0.3" />
          <rect x="44" y="80" width="8" height="12" rx="4" fill="none" stroke="#0d9488" strokeWidth="1" opacity="0.3" />
          <rect x="56" y="80" width="8" height="12" rx="4" fill="none" stroke="#0d9488" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* 🐢 Cute Turtle - Top right corner */}
      <div
        className="absolute top-[18%] right-[4%] opacity-50"
        style={{ animation: 'float-turtle 20s ease-in-out infinite', animationDelay: '3s' }}
      >
        <svg width="52" height="52" viewBox="0 0 100 100" fill="none">
          {/* Shell */}
          <ellipse cx="50" cy="52" rx="30" ry="26" fill="#0d9488" />
          <ellipse cx="50" cy="52" rx="24" ry="20" fill="#14b8a6" />
          {/* Shell pattern - hexagons */}
          <path d="M38 42 L50 36 L62 42 L62 54 L50 60 L38 54 Z" fill="#0f766e" opacity="0.4" />
          <path d="M38 42 L50 36 L62 42 L62 54 L50 60 L38 54 Z" fill="none" stroke="#0d9488" strokeWidth="1.5" />
          {/* Head */}
          <circle cx="50" cy="24" r="14" fill="#99f6e4" />
          {/* Eyes */}
          <circle cx="44" cy="22" r="2.5" fill="#0f766e" />
          <circle cx="56" cy="22" r="2.5" fill="#0f766e" />
          <circle cx="45" cy="21" r="1" fill="white" />
          <circle cx="57" cy="21" r="1" fill="white" />
          {/* Smile */}
          <path d="M46 28 Q50 32 54 28" stroke="#0f766e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Legs */}
          <ellipse cx="22" cy="50" rx="8" ry="6" fill="#99f6e4" />
          <ellipse cx="78" cy="50" rx="8" ry="6" fill="#99f6e4" />
          <ellipse cx="28" cy="72" rx="7" ry="5" fill="#99f6e4" />
          <ellipse cx="72" cy="72" rx="7" ry="5" fill="#99f6e4" />
        </svg>
      </div>

      {/* 🐦 Little Bird - Near middle right */}
      <div
        className="absolute top-[40%] right-[8%] opacity-45"
        style={{ animation: 'float-bird 16s ease-in-out infinite', animationDelay: '7s' }}
      >
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
          {/* Body */}
          <ellipse cx="50" cy="55" rx="22" ry="20" fill="#ccfbf1" />
          {/* Head */}
          <circle cx="50" cy="34" r="16" fill="#ccfbf1" />
          {/* Wing */}
          <ellipse cx="38" cy="54" rx="12" ry="14" fill="#99f6e4" />
          {/* Beak */}
          <path d="M62 32 L74 36 L62 40 Z" fill="#fbbf24" />
          {/* Eye */}
          <circle cx="56" cy="30" r="3" fill="#0f766e" />
          <circle cx="57" cy="29" r="1.2" fill="white" />
          {/* Tail feathers */}
          <path d="M26 52 L14 48 L18 56 L10 56 L22 62" fill="#99f6e4" />
          {/* Legs */}
          <line x1="44" y1="74" x2="44" y2="86" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
          <line x1="56" y1="74" x2="56" y2="86" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
          {/* Feet */}
          <path d="M40 86 L48 86 M44 86 L42 90 M44 86 L46 90" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
          <path d="M52 86 L60 86 M56 86 L54 90 M56 86 L58 90" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* 🌿 Monstera Leaf - Top left */}
      <div
        className="absolute top-[10%] left-[8%] opacity-40"
        style={{ animation: 'plant-sway 6s ease-in-out infinite', animationDelay: '1s' }}
      >
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 95 C50 95 20 70 20 45 C20 25 35 10 50 10 C65 10 80 25 80 45 C80 70 50 95 50 95Z"
            fill="#99f6e4"
            opacity="0.7"
          />
          {/* Leaf splits */}
          <path d="M50 15 L50 90" stroke="#0d9488" strokeWidth="1.5" opacity="0.4" />
          <path d="M50 30 L28 22 M50 40 L22 38 M50 55 L25 58" stroke="#0d9488" strokeWidth="1" opacity="0.3" />
          <path d="M50 30 L72 22 M50 40 L78 38 M50 55 L75 58" stroke="#0d9488" strokeWidth="1" opacity="0.3" />
          <path d="M50 15 L35 8 M50 15 L65 8" stroke="#0d9488" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* 🌱 Small Potted Plant - Bottom right */}
      <div
        className="absolute bottom-[8%] right-[6%] opacity-50"
        style={{ animation: 'plant-sway 5s ease-in-out infinite', animationDelay: '2s' }}
      >
        <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
          {/* Pot */}
          <path d="M32 60 L68 60 L64 88 L36 88 Z" fill="#d6d3d1" />
          <rect x="28" y="55" width="44" height="8" rx="2" fill="#a8a29e" />
          {/* Plant stems */}
          <path d="M42 56 Q38 40 30 28" stroke="#0d9488" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M50 56 Q50 38 50 22" stroke="#0d9488" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M58 56 Q62 40 70 28" stroke="#0d9488" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Leaves */}
          <ellipse cx="28" cy="26" rx="10" ry="6" fill="#14b8a6" transform="rotate(-30 28 26)" />
          <ellipse cx="50" cy="20" rx="10" ry="6" fill="#2dd4bf" />
          <ellipse cx="72" cy="26" rx="10" ry="6" fill="#14b8a6" transform="rotate(30 72 26)" />
          <ellipse cx="34" cy="38" rx="8" ry="5" fill="#5eead4" transform="rotate(-20 34 38)" />
          <ellipse cx="66" cy="38" rx="8" ry="5" fill="#5eead4" transform="rotate(20 66 38)" />
        </svg>
      </div>

      {/* 🍃 Hanging Vine - Left side */}
      <div
        className="absolute top-[55%] left-[2%] opacity-35"
        style={{ animation: 'plant-sway 8s ease-in-out infinite', animationDelay: '4s' }}
      >
        <svg width="36" height="80" viewBox="0 0 50 120" fill="none">
          {/* Vine stem */}
          <path d="M25 0 Q30 30 22 60 Q18 80 25 100 Q28 110 25 120" stroke="#0d9488" strokeWidth="2" fill="none" opacity="0.5" />
          {/* Leaves along vine */}
          <ellipse cx="18" cy="25" rx="8" ry="5" fill="#99f6e4" transform="rotate(-20 18 25)" />
          <ellipse cx="32" cy="45" rx="7" ry="4" fill="#ccfbf1" transform="rotate(25 32 45)" />
          <ellipse cx="16" cy="65" rx="8" ry="5" fill="#99f6e4" transform="rotate(-15 16 65)" />
          <ellipse cx="30" cy="85" rx="6" ry="4" fill="#ccfbf1" transform="rotate(20 30 85)" />
          <ellipse cx="20" cy="105" rx="7" ry="4" fill="#99f6e4" transform="rotate(-25 20 105)" />
        </svg>
      </div>

      {/* 🌸 Small Flower accent - Near top */}
      <div
        className="absolute top-[28%] right-[15%] opacity-40"
        style={{ animation: 'leaf-drift 10s ease-in-out infinite', animationDelay: '5s' }}
      >
        <svg width="28" height="28" viewBox="0 0 50 50" fill="none">
          {/* Petals */}
          <circle cx="25" cy="12" r="8" fill="#99f6e4" />
          <circle cx="38" cy="25" r="8" fill="#ccfbf1" />
          <circle cx="25" cy="38" r="8" fill="#99f6e4" />
          <circle cx="12" cy="25" r="8" fill="#ccfbf1" />
          {/* Center */}
          <circle cx="25" cy="25" r="6" fill="#fbbf24" opacity="0.7" />
        </svg>
      </div>

    </div>
  );
}
