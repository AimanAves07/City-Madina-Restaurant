import React from 'react';
import { MapPin, Phone, Clock, Navigation, Car, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${RESTAURANT_INFO.name}, ${RESTAURANT_INFO.address}`
  )}`;

  return (
    <section id="location" className="py-20 px-4 md:px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">
            <span>Location & Accessibility</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>SH17 Highway Landmark</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display text-white tracking-tight">
            Visit City Madina
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Conveniently situated on the Bengaluru–Mysore Road, opposite Janata Saw Mill in Channapatna. Ideal highway stop with parking for cars and tour buses.
          </p>
        </div>

        {/* 3-Column Info & Directions Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Details & Contact */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-600/10 text-amber-500 border border-amber-600/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Restaurant Address
                  </h4>
                  <p className="text-sm text-white font-medium leading-relaxed">
                    #1553, Opposite Janata Saw Mill,<br />
                    SH17 (Bengaluru–Mysore Road), Kuvempu Nagar,<br />
                    Channapatna, Karnataka – 562160
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 pt-4 border-t border-zinc-800">
                <div className="p-2.5 rounded-xl bg-amber-600/10 text-amber-500 border border-amber-600/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Telephone / WhatsApp
                  </h4>
                  <a 
                    href={`tel:${RESTAURANT_INFO.rawPhone}`}
                    className="text-base text-amber-400 hover:text-amber-300 font-bold tabular-nums font-mono block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <span className="text-xs text-zinc-500">Call for takeaway pickup or table reservations</span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3 pt-4 border-t border-zinc-800">
                <div className="p-2.5 rounded-xl bg-emerald-600/10 text-emerald-500 border border-emerald-600/20 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-sm text-white font-semibold">
                    Every Day | 12:00 PM – 12:00 AM
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-emerald-400">Open Daily until Midnight</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Highway Route Distance Callouts */}
            <div className="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800/80 flex items-center justify-around text-center text-xs">
              <div>
                <Car className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="text-zinc-500 block text-[10px] uppercase">From Bengaluru</span>
                <span className="font-bold text-white text-sm">~55 km</span>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div>
                <Utensils className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="text-zinc-500 block text-[10px] uppercase">Dining Budget</span>
                <span className="font-bold text-white text-sm">₹200–₹400 / head</span>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div>
                <Navigation className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="text-zinc-500 block text-[10px] uppercase">To Mysore</span>
                <span className="font-bold text-white text-sm">~85 km</span>
              </div>
            </div>

          </div>

          {/* Column 2: Visual Map & Driving Guide */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white">Interactive Highway Navigation</h3>
                <span className="text-xs text-amber-400 font-medium">SH17 Kuvempu Nagar</span>
              </div>

              {/* Styled Mock Map Frame with Direct Pin & Link */}
              <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 flex items-center justify-center p-6 text-center">
                {/* Background road grid graphic */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 max-w-sm space-y-3">
                  <div className="w-12 h-12 rounded-full bg-amber-600/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-amber-950/50">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <h4 className="text-base font-bold text-white font-serif-display">
                    City Madina Hotel / Restaurant
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Directly on SH17 Bengaluru-Mysore Road, opposite Janata Saw Mill. Look for our glowing signage on your left when driving towards Mysore.
                  </p>
                  
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-xl shadow-lg transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps Navigation</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Amenities Bar */}
            <div className="mt-5 pt-4 border-t border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs text-zinc-400">
              <span className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/60">✓ Free Car Parking</span>
              <span className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/60">✓ AC Family Section</span>
              <span className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/60">✓ Highway Takeaway</span>
              <span className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/60">✓ Restroom Facility</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
