"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FadeIn } from '@/components/FadeIn';

const GOOGLE_REVIEW_LINK = "https://search.google.com/local/writereview?placeid=ChIJS0xYAeY1OzkRfhMH6HCuC_U";

export function ReviewCTA() {
  const [hoveredRating, setHoveredRating] = useState(0);
  const router = useRouter();

  const handleRatingClick = (rating) => {
    if (rating >= 4) {
      window.open(GOOGLE_REVIEW_LINK, '_blank');
    } else {
      router.push(`/reviews?rating=${rating}`);
    }
  };

  return (
    <section className="bg-[#0a0a0a] border-t border-white/5 py-[8rem] lg:py-[10rem] relative overflow-hidden">
      {/* Background Architectural Grid/Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <FadeIn>
          <span className="text-accent font-bold tracking-[0.2em] uppercase mb-6 block">Client Experience</span>
          <h2 className="font-sans font-black text-5xl lg:text-7xl tracking-tighter text-primary leading-[1.1] mb-8">
            How did we do?
          </h2>
          <p className="text-secondary text-[1.15rem] leading-[1.8] max-w-[600px] mx-auto mb-16">
            Your feedback builds our foundation. Help us refine our architectural services by sharing your experience. It only takes a moment.
          </p>

          {/* Interactive Stars */}
          <div className="flex justify-center items-center gap-4 md:gap-8 group">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="relative focus:outline-none transition-all duration-300 hover:scale-125 hover:-translate-y-2"
              >
                <svg
                  className={`w-14 h-14 md:w-20 md:h-20 transition-all duration-300 ${
                    hoveredRating >= star 
                      ? 'text-accent drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                      : 'text-white/10 group-hover:text-white/5'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            ))}
          </div>
          
          <div className="mt-16">
            <span className="inline-block px-6 py-2 border border-white/10 rounded-full text-[0.7rem] uppercase tracking-[0.2em] text-white/40 font-bold bg-[#111]">
              {hoveredRating > 0 ? 'Click a star to rate your experience' : 'Select a rating to begin'}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
