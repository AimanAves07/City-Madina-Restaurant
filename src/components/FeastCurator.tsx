import React, { useState } from 'react';
import { Dish } from '../types/restaurant';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { Sparkles, Plus, Trash2, ShoppingBag, Check, Users, Utensils, MessageSquare } from 'lucide-react';

interface FeastCuratorProps {
  onAddToCart: (dish: Dish) => void;
  onOpenCart: () => void;
}

export const FeastCurator: React.FC<FeastCuratorProps> = ({ onAddToCart, onOpenCart }) => {
  const [selectedDishes, setSelectedDishes] = useState<Dish[]>([
    MENU_ITEMS.find(d => d.id === 'chicken-shawarma-roll') || MENU_ITEMS[0],
    MENU_ITEMS.find(d => d.id === 'chicken-biryani') || MENU_ITEMS[3],
    MENU_ITEMS.find(d => d.id === 'tandoori-chicken') || MENU_ITEMS[5],
    MENU_ITEMS.find(d => d.id === 'fresh-lime-mint-cooler') || MENU_ITEMS[13],
  ]);
  const [dinerCount, setDinerCount] = useState<number>(2);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [addedFeedback, setAddedFeedback] = useState<string | null>(null);

  const totalCost = selectedDishes.reduce((sum, d) => sum + d.price, 0);
  const costPerDiner = Math.round(totalCost / Math.max(1, dinerCount));

  const loadCombo = (type: 'highway_quick' | 'sizzler_feast' | 'family_banquet') => {
    if (type === 'highway_quick') {
      setSelectedDishes([
        MENU_ITEMS.find(d => d.id === 'chicken-shawarma-roll')!,
        MENU_ITEMS.find(d => d.id === 'chicken-biryani')!,
        MENU_ITEMS.find(d => d.id === 'fresh-lime-mint-cooler')!
      ]);
    } else if (type === 'sizzler_feast') {
      setSelectedDishes([
        MENU_ITEMS.find(d => d.id === 'special-spicy-shawarma')!,
        MENU_ITEMS.find(d => d.id === 'tandoori-chicken')!,
        MENU_ITEMS.find(d => d.id === 'garlic-butter-naan')!,
        MENU_ITEMS.find(d => d.id === 'fresh-lime-mint-cooler')!
      ]);
    } else {
      setSelectedDishes([
        MENU_ITEMS.find(d => d.id === 'chicken-shawarma-roll')!,
        MENU_ITEMS.find(d => d.id === 'chicken-biryani')!,
        MENU_ITEMS.find(d => d.id === 'tandoori-chicken')!,
        MENU_ITEMS.find(d => d.id === 'butter-chicken-mughlai')!,
        MENU_ITEMS.find(d => d.id === 'rumali-roti-bread')!,
        MENU_ITEMS.find(d => d.id === 'fresh-lime-mint-cooler')!
      ]);
    }
  };

  const handleAddDish = (dish: Dish) => {
    setSelectedDishes(prev => [...prev, dish]);
    setShowAddModal(false);
  };

  const handleRemoveDish = (index: number) => {
    setSelectedDishes(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleOrderAll = () => {
    selectedDishes.forEach(dish => onAddToCart(dish));
    setAddedFeedback(`Added ${selectedDishes.length} dishes to your order!`);
    setTimeout(() => {
      setAddedFeedback(null);
      onOpenCart();
    }, 1000);
  };

  return (
    <section id="feast-curator" className="py-20 px-4 md:px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Interactive Dining Planner</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>City Madina Table Feast</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif-display text-white tracking-tight">
              Curate Your Group Feast
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-xl">
              Select dishes, calculate cost per diner, and order your custom highway feast with one click.
            </p>
          </div>

          {/* Quick Combo Selectors */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-zinc-500 font-medium mr-1">Combos:</span>
            <button
              onClick={() => loadCombo('highway_quick')}
              className="px-3.5 py-2 text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-xl border border-zinc-800 transition-colors"
            >
              Highway Express (₹370)
            </button>
            <button
              onClick={() => loadCombo('sizzler_feast')}
              className="px-3.5 py-2 text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-xl border border-zinc-800 transition-colors"
            >
              Sizzler Special (₹545)
            </button>
            <button
              onClick={() => loadCombo('family_banquet')}
              className="px-3.5 py-2 text-xs font-semibold bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 rounded-xl border border-amber-600/40 transition-colors"
            >
              Grand Feast (₹1,095)
            </button>
          </div>
        </div>

        {/* Main Grid: Left Feast Platter, Right Bill Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Selected Dishes Cards Display */}
          <div className="lg:col-span-8 bg-zinc-900/60 p-6 rounded-3xl border border-zinc-800">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-bold text-white">Your Feast Table</h3>
                <span className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-0.5 rounded-full font-mono">
                  {selectedDishes.length} Dishes
                </span>
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Add Dish to Table</span>
              </button>
            </div>

            {selectedDishes.length === 0 ? (
              <div className="py-16 text-center text-zinc-500">
                <p className="text-sm font-medium">Your feast table is empty.</p>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="mt-3 text-xs text-amber-400 font-semibold hover:underline"
                >
                  + Add dishes to start planning
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedDishes.map((dish, idx) => (
                  <div
                    key={`${dish.id}-${idx}`}
                    className="p-3.5 bg-zinc-950/80 rounded-2xl border border-zinc-800/80 flex items-center justify-between gap-3 hover:border-zinc-700 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-zinc-800 shrink-0">
                        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${dish.isVeg ? 'bg-emerald-500' : 'bg-red-500'}`} />
                          <h4 className="text-xs font-bold text-white truncate">{dish.name}</h4>
                        </div>
                        <span className="text-xs font-bold text-amber-400 tabular-nums">
                          ₹{dish.price}
                        </span>
                        <span className="block text-[11px] text-zinc-500">{dish.portion}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveDish(idx)}
                      className="p-2 text-zinc-500 hover:text-red-400 rounded-lg hover:bg-zinc-900 transition-colors shrink-0"
                      title="Remove from table"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Group Bill & Cost per Person Calculator */}
          <div className="lg:col-span-4 bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div>
                <h4 className="text-sm font-bold text-white">Feast Summary</h4>
                <p className="text-xs text-zinc-400">Generous casual dining</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-amber-400 tabular-nums">
                  ₹{totalCost}
                </span>
                <span className="block text-[11px] text-zinc-500">Total Feast Cost</span>
              </div>
            </div>

            {/* Split Among Diners */}
            <div className="py-2 border-b border-zinc-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-500" />
                  <span>Number of Diners:</span>
                </span>
                <span className="font-bold text-white">{dinerCount} {dinerCount === 1 ? 'Person' : 'People'}</span>
              </div>

              <div className="grid grid-cols-5 gap-1 p-1 bg-zinc-950 rounded-xl border border-zinc-800 text-center">
                {[1, 2, 3, 4, 6].map(count => (
                  <button
                    key={count}
                    onClick={() => setDinerCount(count)}
                    className={`py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                      dinerCount === count
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>

              <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Estimated Cost Per Person:</span>
                <span className="text-base font-bold text-amber-400 tabular-nums">
                  ₹{costPerDiner} <span className="text-xs font-normal text-zinc-500">/ diner</span>
                </span>
              </div>
            </div>

            {/* Value Promise note */}
            <div className="text-xs text-zinc-400 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/80 leading-relaxed">
              💡 <span className="font-semibold text-zinc-200">Affordable Dining:</span> Average dining at City Madina is approximately <strong className="text-amber-400">₹200–₹400 per person</strong>. Freshly cooked, authentic spices, generous portions.
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleOrderAll}
                disabled={selectedDishes.length === 0}
                className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order This Feast (₹{totalCost})</span>
              </button>

              <button
                onClick={() => {
                  let itemsText = selectedDishes.map((d, i) => `${i + 1}. *${d.name}* (₹${d.price})`).join('%0A');
                  const message = `Hello City Madina Restaurant, I would like to order this group feast:%0A%0A${itemsText}%0A%0A*Total:* ₹${totalCost}%0A*Sharing among:* ${dinerCount} diners (approx ₹${costPerDiner}/person).%0APlease let me know preparation time.`;
                  window.open(`https://wa.me/${RESTAURANT_INFO.rawPhone}?text=${message}`, '_blank');
                }}
                disabled={selectedDishes.length === 0}
                className="w-full py-2.5 bg-emerald-600/90 hover:bg-emerald-600 disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order via WhatsApp (+91 99866 95215)</span>
              </button>
            </div>

            {addedFeedback && (
              <div className="text-center text-xs font-semibold text-emerald-400 animate-fade-in flex items-center justify-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>{addedFeedback}</span>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Add Dish Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full max-h-[80vh] flex flex-col shadow-2xl">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Add a Dish to Your Feast</h3>
                <p className="text-xs text-zinc-400">Choose from City Madina favorites</p>
              </div>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-y-auto space-y-2 flex-1">
              {MENU_ITEMS.map(dish => (
                <div 
                  key={dish.id} 
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-800 shrink-0">
                      <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${dish.isVeg ? 'bg-emerald-500' : 'bg-red-500'}`} />
                        <h4 className="text-xs font-semibold text-white">{dish.name}</h4>
                      </div>
                      <span className="text-xs font-bold text-amber-400 tabular-nums">₹{dish.price}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddDish(dish)}
                    className="px-3 py-1.5 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
