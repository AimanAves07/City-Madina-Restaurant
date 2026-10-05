import React, { useState } from 'react';
import { ShoppingBag, Calendar, Phone, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import restaurantLogo from '../assets/images/city_madina_dome_crest_1791175871975.jpg';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenReservation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single element brand title wordmark with luxury logo */}
        <a 
          href="#" 
          className="text-lg md:text-xl font-bold font-serif-display tracking-tight text-white flex items-center gap-3 group"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-amber-500/40 shadow-md shadow-amber-950/40 group-hover:border-amber-400 transition-colors shrink-0 bg-zinc-900">
            <img 
              src={restaurantLogo} 
              alt="City Madina Restaurant Logo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="leading-tight">{RESTAURANT_INFO.name}</span>
            <span className="text-[10px] text-amber-400 font-sans tracking-widest uppercase font-semibold">Channapatna · Est. SH17</span>
          </div>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          <a href="#menu" className="hover:text-amber-400 transition-colors">
            Our Menu
          </a>
          <a href="#feast-curator" className="hover:text-amber-400 text-amber-500/90 transition-colors">
            Feast Planner
          </a>
          <a href="#about" className="hover:text-amber-400 transition-colors">
            Our Story
          </a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors">
            Reviews
          </a>
          <a href="#location" className="hover:text-amber-400 transition-colors">
            Visit Us
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Contact Option */}
          <div className="relative group">
            <a 
              href="#location" 
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-all"
              title="Contact & Location Information"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Contact</span>
            </a>

            {/* Quick Contact Popover on Hover */}
            <div className="absolute right-0 top-full mt-2 w-56 p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="text-[11px] font-bold text-white mb-2">City Madina Restaurant</div>
              <a 
                href={`tel:${RESTAURANT_INFO.rawPhone}`} 
                className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg transition-colors font-mono mb-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
              <a 
                href="#location" 
                className="flex items-center justify-between px-2.5 py-1.5 text-[11px] text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <span>Highway Landmark & Map</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Book Table Action */}
          <button
            onClick={onOpenReservation}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-colors whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-500" />
            <span>Book Table</span>
          </button>

          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-xl shadow-lg transition-colors whitespace-nowrap"
            aria-label="View order cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Order</span>
            {cartItemCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-white text-zinc-950 text-[11px] font-bold flex items-center justify-center tabular-nums">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-5 space-y-3">
          <nav className="flex flex-col gap-3 text-sm font-medium text-zinc-300">
            <a 
              href="#menu" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Our Menu
            </a>
            <a 
              href="#feast-curator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-amber-400 hover:text-amber-300"
            >
              Group Feast Planner
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Our Story & Heritage
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Customer Reviews (4.1★)
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Location & Hours
            </a>
          </nav>

          <div className="pt-3 border-t border-zinc-900 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>Reserve a Table</span>
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.rawPhone}`}
              className="w-full py-2 px-4 text-xs text-center text-zinc-400 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Call: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
