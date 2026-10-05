import React from 'react';
import { Flame, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import tandooriImg from '../assets/images/tandoori_sizzler_feast_1791173555845.jpg';
import biryaniImg from '../assets/images/biryani_handi_special_1791173543793.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest">
              <span>Authentic Heritage & Highway Hospitality</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Channapatna</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-serif-display text-white tracking-tight leading-tight">
              A Place for Every Occasion & Road Journey
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Welcome to <span className="text-white font-semibold">City Madina Restaurant</span>, also proudly known as <span className="text-white font-semibold">City Madina Hotel</span>, a beloved casual dining landmark situated on the bustling Bengaluru–Mysore Road (SH17) in Kuvempu Nagar, Channapatna.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Whether you are stopping by during a weekend drive between Bengaluru and Mysore, enjoying a celebratory dinner with family and friends, or ordering your favourite dishes to take home, City Madina brings together <strong className="text-zinc-200">rich flavours, generous portions, and satisfying meals</strong> at genuinely affordable prices.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
                <Flame className="w-5 h-5 text-amber-500 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Authentic Clay Tandoor</h4>
                <p className="text-xs text-zinc-400">
                  Charcoal grilled to juicy perfection with roasted spices and glowing embers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
                <Clock className="w-5 h-5 text-amber-500 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Slow Dum Pukht</h4>
                <p className="text-xs text-zinc-400">
                  Aged basmati rice and farm poultry slow-braised under sealed copper handis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
                <HeartHandshake className="w-5 h-5 text-amber-500 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Affordable Dining</h4>
                <p className="text-xs text-zinc-400">
                  Wholesome meals with an average cost of approximately ₹200–₹400 per person.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
                <ShieldCheck className="w-5 h-5 text-amber-500 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Famous Shawarma Station</h4>
                <p className="text-xs text-zinc-400">
                  Renowned loaded rotisserie chicken shawarmas with garlic toum & fiery red masala.
                </p>
              </div>
            </div>

            {/* Closing Motto */}
            <div className="pt-2 text-sm font-royal text-amber-400 font-semibold tracking-wide">
              "Come hungry. Leave satisfied. — City Madina Restaurant"
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl h-56 bg-zinc-950">
                <img 
                  src={biryaniImg} 
                  alt="City Madina Copper Handi Biryani" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                <span className="text-2xl font-bold text-amber-400 font-serif-display tabular-nums">
                  12 PM – 12 AM
                </span>
                <p className="text-xs text-zinc-400 mt-1">
                  Open daily with non-stop kitchen service for day & night highway travelers.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                <span className="text-2xl font-bold text-amber-400 font-serif-display tabular-nums">
                  ₹200–₹400
                </span>
                <p className="text-xs text-zinc-400 mt-1">
                  Average dining cost per guest. Generous portions meant for sharing.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl h-56 bg-zinc-950">
                <img 
                  src={tandooriImg} 
                  alt="Sizzling Tandoori Chicken" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
