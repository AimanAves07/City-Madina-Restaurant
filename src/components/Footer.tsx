import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import restaurantLogo from '../assets/images/city_madina_dome_crest_1791175871975.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black border-t border-zinc-900 py-12 px-4 md:px-8 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* Brand Col */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-500/40 shadow-lg shrink-0 bg-zinc-900">
              <img src={restaurantLogo} alt="City Madina Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-white font-serif-display text-xl font-bold leading-tight">
                {RESTAURANT_INFO.name}
              </div>
              <div className="text-[11px] text-amber-400 font-sans tracking-wider uppercase font-semibold">
                Bengaluru–Mysore Road · Channapatna
              </div>
            </div>
          </div>
          <p className="text-zinc-400 text-xs max-w-sm leading-relaxed">
            {RESTAURANT_INFO.tagline} Also known as <span className="text-zinc-200">City Madina Hotel</span>, your highway casual dining destination on SH17 Bengaluru–Mysore Road in Channapatna, Karnataka.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-zinc-500">
            <span>4.1★ Google Rated</span>
            <span aria-hidden="true">·</span>
            <span>Halal Certified Kitchen</span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-400">UPI, Cash & Cards Accepted</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-2">
            Navigation
          </h4>
          <ul className="space-y-1.5">
            <li><a href="#menu" className="hover:text-amber-400 transition-colors">Full Food Menu</a></li>
            <li><a href="#feast-curator" className="hover:text-amber-400 transition-colors">Group Feast Planner</a></li>
            <li><a href="#about" className="hover:text-amber-400 transition-colors">Our Story & Specialties</a></li>
            <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Customer Reviews</a></li>
            <li><a href="#location" className="hover:text-amber-400 transition-colors">Location & Highway Guide</a></li>
          </ul>
        </div>

        {/* Direct Contact */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-2">
            Visit & Contact
          </h4>
          <p className="text-zinc-400 leading-relaxed text-xs">
            {RESTAURANT_INFO.address}
          </p>
          <div className="pt-1">
            <a 
              href={`tel:${RESTAURANT_INFO.rawPhone}`} 
              className="text-amber-400 hover:text-amber-300 font-semibold font-mono block"
            >
              {RESTAURANT_INFO.phone}
            </a>
            <span className="text-[11px] text-zinc-500">Daily 12:00 PM – 12:00 AM</span>
          </div>
        </div>

      </div>

      {/* Bottom Quiet Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 text-[11px]">
        <p>© {new Date().getFullYear()} City Madina Restaurant. All rights reserved.</p>
        <p className="flex items-center gap-1">
          <span>Crafted for great food and good times</span>
        </p>
      </div>
    </footer>
  );
};
