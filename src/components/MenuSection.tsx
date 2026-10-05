import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Eye, Flame } from 'lucide-react';
import { Dish, DishCategory } from '../types/restaurant';
import { MENU_ITEMS } from '../data/restaurantData';

interface MenuSectionProps {
  onAddToCart: (dish: Dish) => void;
  onAddToFeast?: (dish: Dish) => void;
}

const CATEGORIES: { id: DishCategory; label: string }[] = [
  { id: 'all', label: 'All Dishes' },
  { id: 'biryani', label: 'Biryani & Rice' },
  { id: 'tandoori', label: 'Tandoori & Grills' },
  { id: 'shawarma', label: 'Famous Shawarma' },
  { id: 'mughlai', label: 'Mughlai Curries' },
  { id: 'chinese', label: 'Chinese Wok' },
  { id: 'veg', label: 'Vegetarian' },
  { id: 'drinks', label: 'Beverages' },
];

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<DishCategory>('all');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'nonveg' | 'chefs'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDetailDish, setSelectedDetailDish] = useState<Dish | null>(null);
  const [addedItemIds, setAddedItemIds] = useState<{ [id: string]: boolean }>({});

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter(dish => {
      // Category match
      if (activeCategory !== 'all' && dish.category !== activeCategory) {
        return false;
      }
      // Diet filter
      if (dietFilter === 'veg' && !dish.isVeg) return false;
      if (dietFilter === 'nonveg' && dish.isVeg) return false;
      if (dietFilter === 'chefs' && !dish.isChefSpecial) return false;

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesIng = dish.ingredients.some(i => i.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesIng;
      }

      return true;
    });
  }, [activeCategory, dietFilter, searchQuery]);

  const handleAdd = (dish: Dish, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(dish);
    setAddedItemIds(prev => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [dish.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-20 px-4 md:px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">
            <span>Freshly Prepared Daily</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Generous Portions</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>₹200–₹400 / Person</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display text-white tracking-tight">
            Our Complete Food Menu
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            From our famous City Madina Shawarmas and clay tandoor sizzlers to copper handi dum biryani and fresh breads, experience authentic culinary excellence.
          </p>
        </div>

        {/* Filter Controls Row: Search + Diet Toggle */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search shawarma, biryani, tandoori, curries..."
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 focus:border-amber-500 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Dietary Filter Segmented Control */}
          <div className="flex items-center p-1 bg-zinc-900 rounded-xl border border-zinc-800 self-start md:self-auto overflow-x-auto">
            <button
              onClick={() => setDietFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                dietFilter === 'all' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All Diets
            </button>
            <button
              onClick={() => setDietFilter('nonveg')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                dietFilter === 'nonveg' ? 'bg-red-950/80 text-red-200 shadow-sm border border-red-800/40' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Non-Veg
            </button>
            <button
              onClick={() => setDietFilter('veg')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                dietFilter === 'veg' ? 'bg-emerald-950/80 text-emerald-200 shadow-sm border border-emerald-800/40' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Pure Veg
            </button>
            <button
              onClick={() => setDietFilter('chefs')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                dietFilter === 'chefs' ? 'bg-amber-950/80 text-amber-200 shadow-sm border border-amber-800/40' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              ★ Chef's Special
            </button>
          </div>

        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dish Cards Grid */}
        {filteredDishes.length === 0 ? (
          <div className="py-16 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800">
            <p className="text-zinc-400 text-sm">No dishes found matching your criteria.</p>
            <button
              onClick={() => { setActiveCategory('all'); setDietFilter('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-amber-400 hover:underline font-semibold"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish) => {
              const isAdded = addedItemIds[dish.id];

              return (
                <div
                  key={dish.id}
                  onClick={() => setSelectedDetailDish(dish)}
                  className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-1 shadow-lg cursor-pointer flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div>
                    <div className="relative h-48 w-full bg-zinc-950 overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-semibold text-zinc-300">
                          <span className={`w-2 h-2 rounded-full ${dish.isVeg ? 'bg-emerald-500' : 'bg-red-500'}`} />
                          <span>{dish.isVeg ? 'Veg' : 'Non-Veg'}</span>
                        </div>

                        {dish.isChefSpecial && (
                          <span className="px-2 py-0.5 rounded-md bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[10px] font-semibold">
                            Chef's Special
                          </span>
                        )}
                      </div>

                      {/* Bottom Info in Image */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-300">
                        <span>{dish.portion}</span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: dish.spiceLevel }).map((_, i) => (
                            <Flame key={i} className="w-3 h-3 text-red-400 fill-red-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                          {dish.name}
                        </h3>
                        <span className="text-base font-bold text-amber-400 tabular-nums shrink-0">
                          ₹{dish.price}
                        </span>
                      </div>

                      {dish.subtitle && (
                        <p className="text-xs text-amber-300/80 font-medium mb-2">
                          {dish.subtitle}
                        </p>
                      )}

                      <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                        {dish.description}
                      </p>

                      {/* Ingredients Teaser */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {dish.ingredients.slice(0, 3).map((ing, idx) => (
                          <span key={idx} className="text-[10px] text-zinc-400 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800">
                            {ing}
                          </span>
                        ))}
                        {dish.ingredients.length > 3 && (
                          <span className="text-[10px] text-zinc-500 self-center">
                            +{dish.ingredients.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-4 pt-0 flex items-center gap-2 border-t border-zinc-800/80 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDetailDish(dish);
                      }}
                      className="px-3 py-2 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={(e) => handleAdd(dish, e)}
                      className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-600 hover:bg-amber-500 text-white shadow-md'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Dish Detailed Inspection Modal */}
      {selectedDetailDish && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-fade-in">
            <div className="relative h-56 w-full bg-zinc-950">
              <img
                src={selectedDetailDish.image}
                alt={selectedDetailDish.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedDetailDish(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/70 text-zinc-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-xl font-bold text-white">
                  {selectedDetailDish.name}
                </h3>
                <span className="text-xl font-bold text-amber-400 tabular-nums">
                  ₹{selectedDetailDish.price}
                </span>
              </div>

              {selectedDetailDish.subtitle && (
                <p className="text-xs text-amber-400 font-semibold mb-3">
                  {selectedDetailDish.subtitle}
                </p>
              )}

              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                {selectedDetailDish.description}
              </p>

              {/* Nutrition & Specs */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-800 text-center text-xs mb-4">
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Portion</span>
                  <span className="font-semibold text-zinc-200">{selectedDetailDish.portion}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Energy</span>
                  <span className="font-semibold text-zinc-200">{selectedDetailDish.calories}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Prep Time</span>
                  <span className="font-semibold text-zinc-200">{selectedDetailDish.prepTime}</span>
                </div>
              </div>

              {/* Full Ingredients */}
              <div className="mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-2">
                  Full Recipe Ingredients:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDetailDish.ingredients.map((ing, i) => (
                    <span key={i} className="text-xs text-zinc-300 bg-zinc-800 px-2 py-1 rounded-md border border-zinc-700">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedDetailDish(null)}
                  className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-xl"
                >
                  Close
                </button>

                <button
                  onClick={(e) => {
                    handleAdd(selectedDetailDish, e);
                    setSelectedDetailDish(null);
                  }}
                  className="flex-1 py-2.5 px-4 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Order · ₹{selectedDetailDish.price}</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
