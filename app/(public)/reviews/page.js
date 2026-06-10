"use client";

import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

function ReviewContent() {
  const searchParams = useSearchParams();
  const leadId = searchParams.get('id');
  const initialRating = parseInt(searchParams.get('rating') || '0', 10);

  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', feedback: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace this with the actual Google Review Link when the user provides it
  const GOOGLE_REVIEW_LINK = "https://search.google.com/local/writereview?placeid=ChIJS0xYAeY1OzkRfhMH6HCuC_U";

  const markLeadAsReviewed = async (ratingValue) => {
    if (!leadId) return;
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: parseInt(leadId, 10), rating: ratingValue })
      });
    } catch (error) {
      console.error("Failed to mark lead as reviewed:", error);
    }
  };

  const handleRating = async (value) => {
    setRating(value);
    if (value >= 4) {
      markLeadAsReviewed(value);
      window.location.href = GOOGLE_REVIEW_LINK;
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mark the lead as reviewed
    markLeadAsReviewed(rating);

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, rating }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        // If the API returns a wa.me URL, redirect them directly to WhatsApp to send the message
        if (data.redirectUrl) {
          window.open(data.redirectUrl, '_blank');
        }
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center py-32 px-6 relative overflow-hidden">

      {/* Background Architectural Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[1px] h-[50vh] bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-[50vw] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full relative z-10 text-center"
      >
        <span className="text-[#cfa462] font-mono text-sm tracking-[0.3em] uppercase mb-6 block">Client Feedback</span>
        <h1 className="font-sans font-black text-4xl md:text-6xl tracking-tighter leading-tight mb-12">
          Rate your experience with <span className="text-[#cfa462]">ANU Architects.</span>
        </h1>

        {/* Stars Container */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-16">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="relative focus:outline-none group transition-transform duration-300 hover:scale-110"
            >
              <svg
                className={`w-12 h-12 md:w-16 md:h-16 transition-colors duration-300 ${(hoveredRating || rating) >= star ? 'text-[#cfa462] drop-shadow-[0_0_15px_rgba(207,164,98,0.5)]' : 'text-white/10'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Conditional Rendering based on Rating */}
          {rating > 0 && rating <= 3 && !submitted && (
            <motion.form
              key="feedback-form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleFeedbackSubmit}
              className="text-left bg-[#0a0a0a] border border-white/10 p-8 md:p-10 shadow-2xl"
            >
              <h3 className="font-sans font-bold text-2xl mb-8">How can we improve?</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono tracking-widest text-white/50 uppercase mb-3">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[#cfa462] transition-colors font-sans text-lg"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="feedback" className="block text-sm font-mono tracking-widest text-white/50 uppercase mb-3">Your Feedback</label>
                  <textarea
                    id="feedback"
                    required
                    rows={4}
                    value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[#cfa462] transition-colors font-sans text-lg resize-none"
                    placeholder="Tell us about the difficulties you faced..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#cfa462] text-black font-bold uppercase tracking-[0.2em] py-5 mt-6 hover:bg-white transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Feedback'}
                </button>
              </div>
            </motion.form>
          )}



          {submitted && (
            <motion.div
              key="success-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center p-10 bg-[#0a0a0a] border border-white/10"
            >
              <div className="w-16 h-16 border-2 border-[#cfa462] rounded-full flex items-center justify-center mx-auto mb-6 text-[#cfa462]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-sans font-black text-2xl mb-2">Feedback Received</h3>
              <p className="text-white/50">Thank you for letting us know. We strive to improve our services every day.</p>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#cfa462] font-mono tracking-widest uppercase">Loading...</div>}>
      <ReviewContent />
    </Suspense>
  );
}
