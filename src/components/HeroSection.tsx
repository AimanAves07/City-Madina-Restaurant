import React, { useState } from 'react';
import { Star, Clock, MapPin, Sparkles, ArrowRight, UtensilsCrossed, Check } from 'lucide-react';
import { RESTAURANT_INFO, MENU_ITEMS } from '../data/restaurantData';
import heroImg from '../assets/images/city_madina_hero_1791173531944.jpg';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onExploreFeast: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onExploreFeast,
}) => {
  const [activeSpecialtyIndex, setActiveSpecialtyIndex] = useState(0);

  const featuredSpecialties = [
    {
      dish: MENU_ITEMS.find(d => d.id === 'chicken-biryani') || MENU_ITEMS[3], // Special Chicken Dum Biryani
      highlight: "Slow-cooked on dum in traditional copper handis with aged basmati, pure saffron & whole spices"
    },
    {
      dish: MENU_ITEMS.find(d => d.id === 'chicken-shawarma-roll') || MENU_ITEMS[0], // Famous Round Chicken Shawarma
      highlight: "Our famous highway specialty! Loaded rotisserie chicken with garlic toum in round kuboos pocket"
    },
    {
      dish: MENU_ITEMS.find(d => d.id === 'tandoori-chicken') || MENU_ITEMS[5], // Tandoori Chicken Sizzler
      highlight: "Overnight Kashmiri chili marinade roasted in clay oven, served sizzling hot"
    },
    {
      dish: MENU_ITEMS.find(d => d.id === 'special-spicy-shawarma') || MENU_ITEMS[1], // Special Spicy Red Masala Shawarma
      highlight: "Signature fiery red chili garlic sauce with roasted chicken in a toasted round pocket"
    }
  ];

  const currentSpecialty = featuredSpecialties[activeSpecialtyIndex];

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-zinc-900 bg-zinc-950">
      
      {/* Background Atmosphere Image with Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={heroImg} 
          alt="City Madina Restaurant Dining Hall" 
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Subtle Metadata Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Bengaluru–Mysore Road</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Channapatna, Karnataka</span>
            </div>

            {/* Primary Restaurant Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold font-serif-display text-white tracking-tight leading-[1.1]">
              City Madina Restaurant
            </h1>
            
            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-royal text-amber-300 font-medium tracking-wide">
              Authentic Flavours. Delicious Moments.
            </p>

            {/* Lead Narrative */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              Welcome to <span className="text-white font-semibold">City Madina Hotel</span>, your iconic casual dining destination on SH17. Renowned for our <strong className="text-amber-400">famous loaded Chicken Shawarma</strong>, authentic Hyderabadi Dum Biryanis, and sizzling Tandoori specialties.
            </p>

            {/* Core Proof Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-300 py-2.5 px-4 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800 w-fit">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-bold text-white tabular-nums">4.1 / 5</span>
                <span className="text-zinc-400">({RESTAURANT_INFO.totalReviews}+ Google Reviews)</span>
              </div>
              <span className="text-zinc-600" aria-hidden="true">|</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-amber-300">₹200–₹400</span>
                <span className="text-zinc-400">per person</span>
              </div>
              <span className="hidden sm:inline text-zinc-600" aria-hidden="true">|</span>
              <div className="hidden sm:flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-zinc-300">12 PM – 12 AM Daily</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreFeast}
                className="px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xl shadow-amber-950/40 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Curate Group Feast</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 text-xs sm:text-sm font-semibold rounded-xl border border-zinc-700/80 flex items-center justify-center gap-2 transition-all"
              >
                <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                <span>Explore Full Menu & Order</span>
              </button>
            </div>

            {/* Highway Landmark */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Opp. Janata Saw Mill, SH17 Highway · Free Parking Available</span>
            </div>

          </div>

          {/* Right Column: Featured Specialty Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900/90 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden p-6 space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Signature Specialty
                </span>
                <span className="text-xs text-zinc-500">
                  Tab {activeSpecialtyIndex + 1} of 4
                </span>
              </div>

              {/* Specialty Image Container */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-zinc-950">
                <img
                  src={currentSpecialty.dish.image}
                  alt={currentSpecialty.dish.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
                  <span className="font-semibold">{currentSpecialty.dish.portion}</span>
                  <span className="text-amber-400 font-bold text-base tabular-nums">
                    ₹{currentSpecialty.dish.price}
                  </span>
                </div>
              </div>

              {/* Dish info */}
              <div>
                <h3 className="text-xl font-bold text-white font-serif-display">
                  {currentSpecialty.dish.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {currentSpecialty.highlight}
                </p>
              </div>

              {/* Specialty Selector Tabs */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-zinc-800">
                {featuredSpecialties.map((item, idx) => (
                  <button
                    key={item.dish.id}
                    onClick={() => setActiveSpecialtyIndex(idx)}
                    className={`py-2 px-1 text-[11px] font-semibold rounded-xl text-center transition-colors truncate ${
                      activeSpecialtyIndex === idx
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
                    }`}
                  >
                    {item.dish.name.split(' ')[0]}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
};
