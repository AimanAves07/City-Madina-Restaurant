import { Dish, CustomerReview } from '../types/restaurant';

// High-fidelity distinct imagery for every dish
// Non-Veg Specialties
import chickenBiryaniImg from '../assets/images/biryani_handi_special_1791173543793.jpg';
import tandooriChickenImg from '../assets/images/tandoori_sizzler_feast_1791173555845.jpg';
import roundChickenShawarmaImg from '../assets/images/round_chicken_shawarma_1791175372738.jpg';
import roundSpicyShawarmaImg from '../assets/images/round_spicy_shawarma_1791175386947.jpg';
import shawarmaPlatterImg from '../assets/images/shawarma_plate_platter_1791174775936.jpg';
import grilledChickenImg from '../assets/images/grilled_chicken_specialty_1791173576247.jpg';
import butterChickenImg from '../assets/images/butter_chicken_handi_1791174502173.jpg';
import muttonBiryaniImg from '../assets/images/mutton_dum_biryani_1791174515470.jpg';
import chilliChickenImg from '../assets/images/chilli_chicken_dry_1791174525905.jpg';
import schezwanRiceImg from '../assets/images/schezwan_fried_rice_1791174536593.jpg';

// Pure Vegetarian Specialties
import paneerButterMasalaImg from '../assets/images/paneer_butter_masala_1791174453930.jpg';
import paneerTikkaImg from '../assets/images/paneer_tikka_skewer_1791174467203.jpg';
import garlicNaanImg from '../assets/images/garlic_naan_basket_1791174479629.jpg';
import plainRumaliRotiImg from '../assets/images/plain_rumali_roti_1791174551375.jpg';
import limeSodaImg from '../assets/images/fresh_lime_soda_glass_1791174490919.jpg';

export const RESTAURANT_INFO = {
  name: "City Madina Restaurant",
  altName: "City Madina Hotel",
  tagline: "Authentic Flavours. Delicious Moments.",
  address: "#1553, Opposite Janata Saw Mill, SH17 (Bengaluru–Mysore Road), Kuvempu Nagar, Channapatna, Karnataka – 562160",
  phone: "+91 99866 95215",
  rawPhone: "919986695215",
  hours: "Every Day | 12:00 PM – 12:00 AM",
  priceRange: "₹200–₹400 per person",
  googleRating: 4.1,
  totalReviews: 296,
  landmark: "Opposite Janata Saw Mill, SH17 Bengaluru-Mysore Highway",
  coordinates: {
    lat: 12.5976,
    lng: 77.2036
  }
};

export const MENU_ITEMS: Dish[] = [
  // --- FAMOUS SHAWARMA SPECIALTIES ---
  {
    id: "chicken-shawarma-roll",
    name: "Famous City Madina Chicken Shawarma (Round)",
    subtitle: "Famous Signature Round Kuboos Pocket · Only ₹90",
    description: "The legendary City Madina round-shaped Shawarma! Prepared in a soft circular round kuboos pocket packed with succulent rotisserie-shaved chicken, signature garlic toum, and crunchy pickled veggies.",
    price: 90,
    category: "shawarma",
    isVeg: false,
    isChefSpecial: true,
    isBestSeller: true,
    spiceLevel: 2,
    portion: "1 Loaded Round Shawarma",
    calories: "380 kcal",
    prepTime: "5-8 mins",
    image: roundChickenShawarmaImg,
    ingredients: ["Rotisserie Grilled Chicken", "Creamy Garlic Toum", "Pickled Cucumbers", "Round Circular Kuboos Bread", "Secret Shawarma Spices"]
  },
  {
    id: "special-spicy-shawarma",
    name: "Special Spicy Red Masala Shawarma (Round)",
    subtitle: "Fiery Red Garlic Sauce in Round Pocket · Only ₹90",
    description: "City Madina's famous round shawarma tossed in our signature fiery red chili garlic sauce with pickled onions, mint chutney, and generous roasted chicken shavings in a circular toasted pocket.",
    price: 90,
    category: "shawarma",
    isVeg: false,
    isChefSpecial: true,
    isBestSeller: true,
    spiceLevel: 3,
    portion: "1 Loaded Round Shawarma",
    calories: "390 kcal",
    prepTime: "5-8 mins",
    image: roundSpicyShawarmaImg,
    ingredients: ["Spiced Chicken Cuts", "Signature Red Masala Sauce", "Garlic Mayo", "Round Kuboos Pocket", "Pickled Onions"]
  },
  {
    id: "open-plate-shawarma",
    name: "Deluxe Open Plate Shawarma Platter",
    subtitle: "Generous Platter with Garlic Toum & Khubz",
    description: "A feast of tender spiced rotisserie chicken shavings served with creamy garlic toum, pickled veggies, golden french fries, and warm soft khubz bread triangles.",
    price: 220,
    category: "shawarma",
    isVeg: false,
    isChefSpecial: false,
    isBestSeller: true,
    spiceLevel: 2,
    portion: "Serves 1-2 Platter (350g)",
    calories: "520 kcal",
    prepTime: "8-10 mins",
    image: shawarmaPlatterImg,
    ingredients: ["Rotisserie Chicken Shavings", "Garlic Toum Dip", "Golden French Fries", "Pickled Radish", "Warm Khubz Flatbread"]
  },

  // --- BIRYANI & RICE ---
  {
    id: "chicken-biryani",
    name: "Special Chicken Dum Biryani",
    subtitle: "Served in Traditional Copper Handi",
    description: "Fragrant long-grain aged basmati rice slow-cooked on dum with tender farm-fresh chicken, saffron, fried onions, and secret Mughlai pot spices. Served with cooling cucumber raita and spicy salan.",
    price: 220,
    category: "biryani",
    isVeg: false,
    isChefSpecial: true,
    isBestSeller: true,
    spiceLevel: 2,
    portion: "Serves 1-2 (450g)",
    calories: "580 kcal",
    prepTime: "10-15 mins",
    image: chickenBiryaniImg,
    ingredients: ["Aged Basmati Rice", "Tender Chicken", "Pure Saffron", "Golden Fried Onions", "Whole Spices", "Boiled Egg", "Fresh Mint"]
  },
  {
    id: "mutton-biryani",
    name: "Royal Mutton Dum Biryani",
    subtitle: "Succulent Tender Bone-in Goat Meat",
    description: "Slow-braised tender goat meat layered with fragrant basmati rice, browned shallots, fresh herbs, and aromatic saffron milk cooked under a flour-sealed dough lid.",
    price: 290,
    category: "biryani",
    isVeg: false,
    isChefSpecial: true,
    isBestSeller: false,
    spiceLevel: 2,
    portion: "Serves 1-2 (450g)",
    calories: "640 kcal",
    prepTime: "10-15 mins",
    image: muttonBiryaniImg,
    ingredients: ["Tender Mutton", "Basmati Rice", "Mutton Yakhni", "Kewra Essence", "Saffron", "Caramelized Onions"]
  },

  // --- TANDOORI & GRILLS ---
  {
    id: "tandoori-chicken",
    name: "Tandoori Chicken Sizzler",
    subtitle: "Charred in Clay Tandoor with Coal Aroma",
    description: "Classic tender chicken quarters marinated overnight in Kashmiri chili yogurt, garlic, ginger, and roasted garam masala, roasted to juicy perfection in intense clay oven heat. Served sizzling on cast iron with mint chutney.",
    price: 340,
    category: "tandoori",
    isVeg: false,
    isChefSpecial: true,
    isBestSeller: true,
    spiceLevel: 3,
    portion: "Full (4 Quarters)",
    calories: "520 kcal",
    prepTime: "15-20 mins",
    image: tandooriChickenImg,
    ingredients: ["Chicken on Bone", "Hung Curd", "Kashmiri Degi Mirch", "Tandoori Spices", "Mustard Oil", "Lemon", "Mint Chutney"]
  },
  {
    id: "grilled-chicken-pepper",
    name: "City Madina Pepper Charcoal Grill",
    subtitle: "Slow Flame-Grilled with Pepper Crust",
    description: "Succulent chicken marinated in cracked black Malabar peppercorns, lemon, and aromatic garlic butter, flame-grilled on charcoal for a crispy smoky skin and tender melting bite.",
    price: 320,
    category: "tandoori",
    isVeg: false,
    isChefSpecial: true,
    isBestSeller: false,
    spiceLevel: 2,
    portion: "Half / Full Platter",
    calories: "460 kcal",
    prepTime: "15-18 mins",
    image: grilledChickenImg,
    ingredients: ["Whole Chicken Cuts", "Malabar Black Pepper", "Garlic Butter Glaze", "Pickled Radish", "Garlic Dip"]
  },

  // --- MUGHLAI CURRIES ---
  {
    id: "butter-chicken-mughlai",
    name: "Old Delhi Style Butter Chicken",
    subtitle: "Silky Cream & Tomato Velvet Gravy",
    description: "Tandoori chicken pieces simmered in a velvety slow-simmered tomato, cashew, and butter makhani gravy flavored with dried wild fenugreek leaves (kasoori methi) and rich fresh cream.",
    price: 240,
    category: "mughlai",
    isVeg: false,
    isChefSpecial: false,
    isBestSeller: true,
    spiceLevel: 1,
    portion: "Serves 2 (380ml)",
    calories: "490 kcal",
    prepTime: "12-15 mins",
    image: butterChickenImg,
    ingredients: ["Tandoori Chicken Tikka", "Ripe Tomatoes", "Cashew Paste", "Amul Butter", "Fresh Cream", "Kasoori Methi"]
  },

  // --- INDO-CHINESE ---
  {
    id: "chinese-chilli-chicken",
    name: "Indo-Chinese Chilli Chicken (Dry)",
    subtitle: "Wok-Tossed with Green Chillies & Garlic",
    description: "Crispy coated chicken chunks wok-tossed in high flame with crushed garlic, soy sauce, crunchy green capsicum, and fiery slit green chilies.",
    price: 210,
    category: "chinese",
    isVeg: false,
    isChefSpecial: false,
    isBestSeller: true,
    spiceLevel: 3,
    portion: "Serves 1-2 (320g)",
    calories: "420 kcal",
    prepTime: "10-12 mins",
    image: chilliChickenImg,
    ingredients: ["Crispy Fried Chicken", "Dark Soya", "Green Chillies", "Garlic Pearls", "Spring Onions"]
  },
  {
    id: "schezwan-fried-rice",
    name: "Chicken Schezwan Fried Rice",
    subtitle: "Wok Aromatics with Red Chilli Paste",
    description: "Long grain rice wok-tossed with minced chicken, spring onions, egg ribbons, and spicy house-made Schezwan chili paste.",
    price: 190,
    category: "chinese",
    isVeg: false,
    isChefSpecial: false,
    isBestSeller: false,
    spiceLevel: 2,
    portion: "Serves 1-2 (400g)",
    calories: "490 kcal",
    prepTime: "10 mins",
    image: schezwanRiceImg,
    ingredients: ["Wok Rice", "Minced Chicken", "Egg Whites", "In-House Schezwan Sauce", "Spring Greens"]
  },

  // --- PURE VEGETARIAN DISHES ---
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    subtitle: "Mughlai Cottage Cheese Delicacy",
    description: "Soft fresh malai paneer cubes simmered in a luscious honey-tinged tomato cashew butter sauce with subtle aromatic spices and cream garnish.",
    price: 190,
    category: "veg",
    isVeg: true,
    isChefSpecial: false,
    isBestSeller: true,
    spiceLevel: 1,
    portion: "Serves 2 (360ml)",
    calories: "410 kcal",
    prepTime: "10-12 mins",
    image: paneerButterMasalaImg,
    ingredients: ["Fresh Malai Paneer", "Tomato Makhani Gravy", "Cashew Nut Paste", "Amul Butter", "Dried Fenugreek"]
  },
  {
    id: "paneer-tikka-tandoor",
    name: "Smoky Tandoori Paneer Tikka",
    subtitle: "Charcoal Grilled Skewers",
    description: "Spiced thick cubes of cottage cheese marinated in ajwain-spiced yogurt, skewered with bell peppers and onions, and roasted in the clay tandoor.",
    price: 200,
    category: "veg",
    isVeg: true,
    isChefSpecial: false,
    isBestSeller: false,
    spiceLevel: 2,
    portion: "6 Large Chunks",
    calories: "380 kcal",
    prepTime: "12-15 mins",
    image: paneerTikkaImg,
    ingredients: ["Cottage Cheese", "Bell Peppers", "Red Onions", "Ajwain Spiced Curd", "Lemon Chutney"]
  },
  {
    id: "rumali-roti-bread",
    name: "Fresh Handkerchief Rumali Roti (Plain)",
    subtitle: "Extremely Thin & Soft Bread",
    description: "Ultra-thin stretched dough cooked deftly on an inverted karahi, folded soft like a silk handkerchief. The perfect pairing for all gravies and kebabs.",
    price: 25,
    category: "mughlai",
    isVeg: true,
    isChefSpecial: false,
    isBestSeller: true,
    spiceLevel: 1,
    portion: "1 Large Roti",
    calories: "120 kcal",
    prepTime: "3 mins",
    image: plainRumaliRotiImg,
    ingredients: ["Fine Flour", "Milk Splash", "Salt", "Hand-stretched Dough"]
  },
  {
    id: "garlic-butter-naan",
    name: "Charred Garlic Butter Naan",
    subtitle: "Baked on Tandoor Clay Wall",
    description: "Leavened refined flour flatbread studded with minced roasted garlic and fresh coriander, slapped onto hot tandoor walls and brushed with melted golden butter.",
    price: 55,
    category: "mughlai",
    isVeg: true,
    isChefSpecial: false,
    isBestSeller: true,
    spiceLevel: 1,
    portion: "1 Sliced Naan",
    calories: "210 kcal",
    prepTime: "5 mins",
    image: garlicNaanImg,
    ingredients: ["Clay Tandoor Dough", "Roasted Garlic Slivers", "Amul Butter", "Fresh Coriander"]
  },
  {
    id: "fresh-lime-mint-cooler",
    name: "Fresh Lime Mint Soda",
    subtitle: "Chilled Highway Refreshment",
    description: "Freshly squeezed green limes muddled with aromatic garden mint leaves, black salt, and chilled sparkling soda. Pure refreshing bliss after spicy tandoor delicacies.",
    price: 60,
    category: "drinks",
    isVeg: true,
    isChefSpecial: false,
    isBestSeller: true,
    spiceLevel: 1,
    portion: "350ml Tall Glass",
    calories: "85 kcal",
    prepTime: "3 mins",
    image: limeSodaImg,
    ingredients: ["Fresh Green Limes", "Garden Mint Leaves", "Black Kala Namak", "Sparkling Soda", "Crushed Ice"]
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Syed Mansoor",
    role: "Highway Traveler & Foodie",
    rating: 5,
    date: "2 weeks ago",
    comment: "Whenever we drive from Bengaluru to Mysore, City Madina is our non-negotiable stop! Their famous Chicken Shawarma with authentic garlic toum and the Dum Biryani are legendary. Great portion sizes and very reasonable prices.",
    source: "Google Reviews"
  },
  {
    id: "rev-2",
    author: "Praveen Kumar R",
    role: "Local Guide · 128 reviews",
    rating: 4,
    date: "1 month ago",
    comment: "One of the most reliable casual dining spots on the Channapatna stretch. Best shawarma in town, juicy chicken and nicely toasted. Quick service and very budget friendly around ₹300 per head.",
    source: "Google Reviews"
  },
  {
    id: "rev-3",
    author: "Farhana Begum",
    role: "Family Diner",
    rating: 5,
    date: "Last month",
    comment: "Came here with family on a Sunday evening. The shawarmas, butter chicken, and rumali rotis were melt-in-mouth. The staff is polite and parking is hassle-free right by the highway.",
    source: "Google Reviews"
  },
  {
    id: "rev-4",
    author: "Karthik Gowda",
    role: "Frequent Visitor",
    rating: 4,
    date: "2 months ago",
    comment: "The spicy red shawarma and Pepper Grilled Chicken were on point. Hot food, great quantity, and open till midnight which is a blessing for late highway travelers.",
    source: "Google Reviews"
  }
];
