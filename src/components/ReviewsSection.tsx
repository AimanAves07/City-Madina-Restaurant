import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 px-4 md:px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">
              <span>Verified Patron Experiences</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Google Maps Verified</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif-display text-white tracking-tight">
              Loved by Our Customers
            </h2>
            <p className="mt-3 text-sm text-zinc-400 max-w-xl">
              With a 4.1/5 Google rating from nearly 300 reviews, City Madina Restaurant continues to be the preferred haven for food lovers in Channapatna.
            </p>
          </div>

          {/* Aggregate Rating Scoreboard Block */}
          <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-5 shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white font-serif-display tabular-nums">
                  {RESTAURANT_INFO.googleRating}
                </span>
                <span className="text-sm text-zinc-500">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3.5 h-3.5 ${i < 4 ? 'fill-amber-400' : 'fill-amber-400/40 text-amber-400/40'}`} 
                  />
                ))}
              </div>
            </div>

            <div className="h-10 w-px bg-zinc-800" />

            <div className="text-xs">
              <span className="font-bold text-zinc-200 block tabular-nums">
                {RESTAURANT_INFO.totalReviews}+ Reviews
              </span>
              <span className="text-zinc-400">Google Verified</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs text-zinc-300 leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              {/* Author and Date metadata */}
              <div className="pt-3 border-t border-zinc-800/80">
                <h4 className="text-xs font-bold text-white">{review.author}</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 mt-0.5">
                  <span>{review.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-10 text-center">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_INFO.name + " " + RESTAURANT_INFO.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 hover:underline"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Read all 296+ Google Reviews or leave your own feedback</span>
          </a>
        </div>

      </div>
    </section>
  );
};
