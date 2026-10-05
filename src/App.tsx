/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeastCurator } from './components/FeastCurator';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { OrderCartDrawer } from './components/OrderCartDrawer';
import { Dish, CartItem } from './types/restaurant';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('city_madina_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('city_madina_cart', JSON.stringify(cart));
    } catch {
      // LocalStorage unavailable fallback
    }
  }, [cart]);

  const handleAddToCart = (dish: Dish) => {
    setCart(prev => {
      const existing = prev.find(item => item.dish.id === dish.id);
      if (existing) {
        return prev.map(item =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCart(prev => prev.filter(item => item.dish.id !== dishId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* Navigation Top Bar */}
      <Navbar
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <HeroSection
          onExploreMenu={() => {
            const el = document.getElementById('menu');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreFeast={() => {
            const el = document.getElementById('feast-curator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Interactive Group Feast Curator */}
        <FeastCurator
          onAddToCart={handleAddToCart}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Complete Menu Section */}
        <MenuSection
          onAddToCart={handleAddToCart}
        />

        {/* About & Specialties Story */}
        <AboutSection />

        {/* Google Reviews & Social Proof */}
        <ReviewsSection />

        {/* Location & Highway Visit Guide */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Table Reservation Dialog */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Order & Takeaway Drawer */}
      <OrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
