"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then(setReviews)
      .catch(console.error);
  }, []);

  if (!reviews.length) return <p>Loading reviews...</p>;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        What Our Clients Say
      </h2>

      <div className="space-y-4">
        {reviews.slice(0, 5).map((r, i) => (
          <div key={i} className="border-b pb-3">
            <div className="flex items-center gap-2 mb-1">
              <p className="font-semibold text-gray-700">{r.author_name}</p>
              <div className="flex">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm">{r.text}</p>
          </div>
        ))}
      </div>

      <a
        href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-5 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
      >
        ⭐ Leave a Review on Google
      </a>
    </div>
  );
}
