export type DishCategory = 
  | 'all'
  | 'biryani'
  | 'tandoori'
  | 'shawarma'
  | 'rolls'
  | 'mughlai'
  | 'chinese'
  | 'veg'
  | 'drinks';

export interface Dish {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  price: number;
  category: DishCategory;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isBestSeller?: boolean;
  spiceLevel: 1 | 2 | 3;
  portion: string;
  calories: string;
  prepTime: string;
  image: string;
  ingredients: string[];
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  notes?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  source: string;
}

export interface ReservationDetails {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'family_ac' | 'main_hall' | 'highway_view';
  specialRequests?: string;
}
