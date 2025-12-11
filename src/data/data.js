export const perfumes = [
  {
    id: 1,
    title: "Acqua",
    brand: "Generic",
    price: 1990, // 100ml price
    description: "A fresh aquatic fragrance perfect for daily wear.",
    category: "Men",
    images: ["acqua2.jpg", "acqua1.jpg", "acqua3.jpg"],
    rating: 4.2,
    reviews: 120,
    notes: {
      top: ["Sea Notes", "Bergamot", "Green Apple"],
      middle: ["Jasmine", "Lotus", "Water Lily"],
      base: ["Cedarwood", "Musk", "Amber"]
    },
    bestFor: ["Daytime", "Office", "Summer", "Casual Wear"],
    longevity: "6-8 hours",
    sillage: "Moderate",
    sizes: [
      { size: "30ml", price: 690 },
      { size: "50ml", price: 1190 },
      { size: "100ml", price: 1990 },
      { size: "200ml", price: 3490 }
    ],
    stock: 45,
    featured: true,
    bestSeller: true
  },
  {
    id: 2,
    title: "Boss",
    brand: "Generic",
    price: 2490, // 100ml price
    description: "Elegant masculine scent with warm notes.",
    category: "Men",
    images: ["boss.jpg", "boss1.jpg", "boss3.jpg", "bossicon.png"],
    rating: 4.5,
    reviews: 98,
    notes: {
      top: ["Grapefruit", "Lavender", "Cardamom"],
      middle: ["Cinnamon", "Geranium", "Clary Sage"],
      base: ["Vanilla", "Sandalwood", "Vetiver"]
    },
    bestFor: ["Evening", "Business Meetings", "Date Night", "Fall"],
    longevity: "7-9 hours",
    sillage: "Strong",
    sizes: [
      { size: "30ml", price: 890 },
      { size: "50ml", price: 1490 },
      { size: "100ml", price: 2490 },
      { size: "200ml", price: 4290 }
    ],
    stock: 32,
    featured: true,
    bestSeller: true
  },
  {
    id: 4,
    title: "Cristal",
    brand: "Generic",
    price: 2590, // 100ml price
    description: "Clean, bright and modern perfume suitable for any occasion.",
    category: "Unisex",
    images: ["cristal.jpg", "cristal1.jpg", "cristal3.jpg"],
    rating: 4.3,
    reviews: 75,
    notes: {
      top: ["Bergamot", "Pink Pepper", "Neroli"],
      middle: ["Rose", "Peony", "Lily of the Valley"],
      base: ["White Musk", "Cedar", "Amberwood"]
    },
    bestFor: ["All Day", "Office", "Special Occasions", "Spring"],
    longevity: "8-10 hours",
    sillage: "Moderate",
    sizes: [
      { size: "30ml", price: 990 },
      { size: "50ml", price: 1590 },
      { size: "100ml", price: 2590 },
      { size: "200ml", price: 4490 }
    ],
    stock: 28,
    featured: false,
    bestSeller: false
  },
  {
    id: 5,
    title: "Delina",
    brand: "Generic",
    price: 2890, // 100ml price
    description: "Floral sweet scent with a luxurious feminine profile.",
    category: "Women",
    images: ["delina.jpg", "delina1.jpg", "delina3.jpg"],
    rating: 4.6,
    reviews: 145,
    notes: {
      top: ["Lychee", "Bergamot", "Rhubarb"],
      middle: ["Turkish Rose", "Peony", "Lily"],
      base: ["Vanilla", "Cashmeran", "Musk"]
    },
    bestFor: ["Evening", "Romantic Dates", "Weddings", "Special Events"],
    longevity: "10-12 hours",
    sillage: "Strong",
    sizes: [
      { size: "30ml", price: 1090 },
      { size: "50ml", price: 1790 },
      { size: "100ml", price: 2890 },
      { size: "200ml", price: 4990 }
    ],
    stock: 22,
    featured: true,
    bestSeller: true
  },
  {
    id: 6,
    title: "Donna",
    brand: "Generic",
    price: 2390, // 100ml price
    description: "Soft, elegant feminine fragrance.",
    category: "Women",
    images: ["donna.jpg", "donna1.jpg", "donna3.jpg"],
    rating: 4.4,
    reviews: 102,
    notes: {
      top: ["Mandarin", "Pear", "Green Notes"],
      middle: ["Jasmine", "Rose", "Lily"],
      base: ["Sandalwood", "Vanilla", "White Musk"]
    },
    bestFor: ["Daytime", "Office", "Brunch", "Spring"],
    longevity: "6-8 hours",
    sillage: "Moderate",
    sizes: [
      { size: "30ml", price: 790 },
      { size: "50ml", price: 1390 },
      { size: "100ml", price: 2390 },
      { size: "200ml", price: 4190 }
    ],
    stock: 38,
    featured: false,
    bestSeller: true
  },
  {
    id: 7,
    title: "Greatness",
    brand: "Generic",
    price: 2790, // 100ml price
    description: "Powerful woody-musky scent for charismatic men.",
    category: "Men",
    images: ["greatness2.png", "greatness1.png", "greatness3.png"],
    rating: 4.7,
    reviews: 87,
    notes: {
      top: ["Black Pepper", "Cardamom", "Bergamot"],
      middle: ["Cedar", "Patchouli", "Vetiver"],
      base: ["Leather", "Amber", "Tonka Bean"]
    },
    bestFor: ["Evening", "Night Out", "Winter", "Formal Events"],
    longevity: "10-12 hours",
    sillage: "Very Strong",
    sizes: [
      { size: "30ml", price: 990 },
      { size: "50ml", price: 1690 },
      { size: "100ml", price: 2790 },
      { size: "200ml", price: 4790 }
    ],
    stock: 19,
    featured: true,
    bestSeller: false
  },
  {
    id: 8,
    title: "Hugo",
    brand: "Generic",
    price: 2190, // 100ml price
    description: "Fresh energetic fragrance perfect for sporty men.",
    category: "Men",
    images: ["hugo.jpg", "hugo1.jpg", "hugo3.jpg"],
    rating: 4.1,
    reviews: 66,
    notes: {
      top: ["Grapefruit", "Apple", "Mint"],
      middle: ["Ginger", "Sage", "Basil"],
      base: ["Oakmoss", "Cedar", "Amber"]
    },
    bestFor: ["Sports", "Gym", "Daytime", "Summer"],
    longevity: "5-7 hours",
    sillage: "Light to Moderate",
    sizes: [
      { size: "30ml", price: 790 },
      { size: "50ml", price: 1290 },
      { size: "100ml", price: 2190 },
      { size: "200ml", price: 3890 }
    ],
    stock: 42,
    featured: false,
    bestSeller: false
  },
  {
    id: 9,
    title: "King",
    brand: "Generic",
    price: 2990, // 100ml price
    description: "Royal and intense scent with a bold profile.",
    category: "Men",
    images: ["king.jpg", "king1.jpg", "king3.jpg"],
    rating: 4.8,
    reviews: 110,
    notes: {
      top: ["Saffron", "Bergamot", "Black Pepper"],
      middle: ["Rose", "Jasmine", "Patchouli"],
      base: ["Oud", "Sandalwood", "Amber"]
    },
    bestFor: ["Special Occasions", "Evening", "Winter", "Luxury Events"],
    longevity: "12+ hours",
    sillage: "Very Strong",
    sizes: [
      { size: "30ml", price: 1190 },
      { size: "50ml", price: 1890 },
      { size: "100ml", price: 2990 },
      { size: "200ml", price: 5190 }
    ],
    stock: 15,
    featured: true,
    bestSeller: true
  },
  {
    id: 10,
    title: "La Nuit",
    brand: "Generic",
    price: 2890, // 100ml price
    description: "Dark seductive night fragrance.",
    category: "Men",
    images: ["lanuit.jpg", "lanuit1.jpg", "lanuit3.jpg"],
    rating: 4.5,
    reviews: 95,
    notes: {
      top: ["Cardamom", "Bergamot", "Lavender"],
      middle: ["Cedar", "Vetiver", "Cashmere Wood"],
      base: ["Tonka Bean", "Amber", "Vanilla"]
    },
    bestFor: ["Night", "Date Night", "Club", "Fall/Winter"],
    longevity: "8-10 hours",
    sillage: "Strong",
    sizes: [
      { size: "30ml", price: 1090 },
      { size: "50ml", price: 1790 },
      { size: "100ml", price: 2890 },
      { size: "200ml", price: 4990 }
    ],
    stock: 27,
    featured: false,
    bestSeller: true
  },
  {
    id: 11,
    title: "Layton",
    brand: "Generic",
    price: 2990, // 100ml price
    description: "Spicy elegant fragrance suitable for night events.",
    category: "Men",
    images: ["layton.jpg", "layton1.jpg", "layton3.jpg"],
    rating: 4.6,
    reviews: 88,
    notes: {
      top: ["Apple", "Bergamot", "Lavender"],
      middle: ["Geranium", "Jasmine", "Patchouli"],
      base: ["Vanilla", "Sandalwood", "Gaiac Wood"]
    },
    bestFor: ["Evening", "Formal Events", "Date Night", "Fall"],
    longevity: "9-11 hours",
    sillage: "Strong",
    sizes: [
      { size: "30ml", price: 1190 },
      { size: "50ml", price: 1890 },
      { size: "100ml", price: 2990 },
      { size: "200ml", price: 5190 }
    ],
    stock: 21,
    featured: true,
    bestSeller: false
  },
  {
    id: 12,
    title: "Liesse",
    brand: "Generic",
    price: 2690, // 100ml price
    description: "Soft sweet floral scent.",
    category: "Women",
    images: ["liesse2.png", "liesse1.png", "liesse1.png"],
    rating: 4.3,
    reviews: 74,
    notes: {
      top: ["Peach", "Bergamot", "Red Berries"],
      middle: ["Rose", "Jasmine", "Heliotrope"],
      base: ["Vanilla", "Musk", "Sandalwood"]
    },
    bestFor: ["Daytime", "Spring", "Casual Outings", "Office"],
    longevity: "7-9 hours",
    sillage: "Moderate",
    sizes: [
      { size: "30ml", price: 990 },
      { size: "50ml", price: 1590 },
      { size: "100ml", price: 2690 },
      { size: "200ml", price: 4590 }
    ],
    stock: 33,
    featured: false,
    bestSeller: false
  },
  {
    id: 13,
    title: "Lumire",
    brand: "Generic",
    price: 2490, // 100ml price
    description: "Bright citrus fragrance with warm undertones.",
    category: "Unisex",
    images: ["lumire.jpg", "lumire1.jpg", "lumire3.jpg"],
    rating: 4.2,
    reviews: 60,
    notes: {
      top: ["Lemon", "Grapefruit", "Orange"],
      middle: ["Jasmine", "Neroli", "Sea Notes"],
      base: ["Amber", "Musk", "Cedar"]
    },
    bestFor: ["Summer", "Daytime", "Beach", "Casual Wear"],
    longevity: "6-8 hours",
    sillage: "Moderate",
    sizes: [
      { size: "30ml", price: 890 },
      { size: "50ml", price: 1490 },
      { size: "100ml", price: 2490 },
      { size: "200ml", price: 4290 }
    ],
    stock: 40,
    featured: false,
    bestSeller: false
  },
  {
    id: 14,
    title: "Man",
    brand: "Generic",
    price: 1990, // 100ml price
    description: "Classic fresh masculine fragrance.",
    category: "Men",
    images: ["man.jpg", "man1.jpg", "man3.jpg"],
    rating: 4.0,
    reviews: 54,
    notes: {
      top: ["Lemon", "Lavender", "Rosemary"],
      middle: ["Geranium", "Jasmine", "Nutmeg"],
      base: ["Oakmoss", "Sandalwood", "Tonka Bean"]
    },
    bestFor: ["Daily Wear", "Office", "All Seasons", "Casual"],
    longevity: "6-8 hours",
    sillage: "Moderate",
    sizes: [
      { size: "30ml", price: 690 },
      { size: "50ml", price: 1190 },
      { size: "100ml", price: 1990 },
      { size: "200ml", price: 3490 }
    ],
    stock: 50,
    featured: false,
    bestSeller: false
  },
  {
    id: 15,
    title: "Musc",
    brand: "Generic",
    price: 2290, // 100ml price
    description: "Soft musky fragrance perfect for calm personalities.",
    category: "Unisex",
    images: ["musc.jpg", "musc1.jpg", "musc3.jpg"],
    rating: 4.1,
    reviews: 72,
    notes: {
      top: ["Bergamot", "Neroli", "Lemon"],
      middle: ["Orange Blossom", "Jasmine", "Lily"],
      base: ["White Musk", "Amber", "Cedar"]
    },
    bestFor: ["All Day", "Meditation", "Yoga", "Relaxation"],
    longevity: "8-10 hours",
    sillage: "Light",
    sizes: [
      { size: "30ml", price: 790 },
      { size: "50ml", price: 1390 },
      { size: "100ml", price: 2290 },
      { size: "200ml", price: 3990 }
    ],
    stock: 36,
    featured: false,
    bestSeller: false
  },
  {
    id: 16,
    title: "Nectar",
    brand: "Generic",
    price: 2590, // 100ml price
    description: "Sweet fruity perfume for warm-hearted individuals.",
    category: "Women",
    images: ["nectar.jpg", "nectar1.jpg", "nectar3.jpg"],
    rating: 4.5,
    reviews: 80,
    notes: {
      top: ["Peach", "Pear", "Red Berries"],
      middle: ["Rose", "Peony", "Magnolia"],
      base: ["Vanilla", "Caramel", "Sandalwood"]
    },
    bestFor: ["Daytime", "Summer", "Casual Dates", "Outdoor Events"],
    longevity: "7-9 hours",
    sillage: "Moderate",
    sizes: [
      { size: "30ml", price: 990 },
      { size: "50ml", price: 1590 },
      { size: "100ml", price: 2590 },
      { size: "200ml", price: 4490 }
    ],
    stock: 29,
    featured: false,
    bestSeller: true
  },
  {
    id: 17,
    title: "Oud",
    brand: "Generic",
    price: 3490, // 100ml price
    description: "Strong oriental oud fragrance with luxury depth.",
    category: "Unisex",
    images: ["oud.jpg", "oud1.jpg", "oud3.jpg"],
    rating: 4.7,
    reviews: 99,
    notes: {
      top: ["Saffron", "Bergamot", "Rose"],
      middle: ["Oud", "Patchouli", "Cedar"],
      base: ["Amber", "Vanilla", "Leather"]
    },
    bestFor: ["Special Occasions", "Evening", "Winter", "Luxury Events"],
    longevity: "12+ hours",
    sillage: "Very Strong",
    sizes: [
      { size: "30ml", price: 1390 },
      { size: "50ml", price: 2190 },
      { size: "100ml", price: 3490 },
      { size: "200ml", price: 5990 }
    ],
    stock: 12,
    featured: true,
    bestSeller: true
  },
  {
    id: 19,
    title: "Pantelleria",
    brand: "Generic",
    price: 2790, // 100ml price
    description: "Sea-breeze inspired fragrance.",
    category: "Unisex",
    images: ["pantelleria.jpg", "pantelleria1.jpg", "pantelleria3.jpg"],
    rating: 4.3,
    reviews: 65,
    notes: {
      top: ["Sea Salt", "Bergamot", "Lemon"],
      middle: ["Juniper", "Lavender", "Rosemary"],
      base: ["Amberwood", "Musk", "Cedar"]
    },
    bestFor: ["Summer", "Beach", "Vacation", "Hot Weather"],
    longevity: "6-8 hours",
    sillage: "Moderate",
    sizes: [
      { size: "30ml", price: 990 },
      { size: "50ml", price: 1690 },
      { size: "100ml", price: 2790 },
      { size: "200ml", price: 4790 }
    ],
    stock: 31,
    featured: false,
    bestSeller: false
  },
  {
    id: 20,
    title: "Perfect",
    brand: "Generic",
    price: 2490, // 100ml price
    description: "Balanced modern fragrance for everyday style.",
    category: "Women",
    images: ["perfect.jpg", "perfect1.jpg", "perfect3.jpg"],
    rating: 4.4,
    reviews: 71,
    notes: {
      top: ["Bergamot", "Mandarin", "Black Currant"],
      middle: ["Jasmine", "Lily", "Peony"],
      base: ["Sandalwood", "Amber", "Musk"]
    },
    bestFor: ["Everyday", "Office", "All Seasons", "Versatile Use"],
    longevity: "8-10 hours",
    sillage: "Moderate",
    sizes: [
      { size: "30ml", price: 890 },
      { size: "50ml", price: 1490 },
      { size: "100ml", price: 2490 },
      { size: "200ml", price: 4290 }
    ],
    stock: 44,
    featured: false,
    bestSeller: false
  },
  {
    id: 21,
    title: "Queen",
    brand: "Generic",
    price: 2990, // 100ml price
    description: "Luxurious feminine perfume with floral notes.",
    category: "Women",
    images: ["queen.jpg", "queen1.jpg", "queen3.jpg"],
    rating: 4.6,
    reviews: 92,
    notes: {
      top: ["Peach", "Bergamot", "Pink Pepper"],
      middle: ["Rose", "Jasmine Sambac", "Orchid"],
      base: ["Patchouli", "Vanilla", "Amber"]
    },
    bestFor: ["Evening", "Special Events", "Gala", "Romantic Occasions"],
    longevity: "10-12 hours",
    sillage: "Strong",
    sizes: [
      { size: "30ml", price: 1190 },
      { size: "50ml", price: 1890 },
      { size: "100ml", price: 2990 },
      { size: "200ml", price: 5190 }
    ],
    stock: 18,
    featured: true,
    bestSeller: false
  },
  {
    id: 22,
    title: "Really Her",
    brand: "Generic",
    price: 2190, // 100ml price
    description: "Clean fresh fragrance ideal for women.",
    category: "Women",
    images: ["reallyher.jpg", "reallyher1.jpg", "reallyher3.jpg"],
    rating: 4.2,
    reviews: 55,
    notes: {
      top: ["Green Apple", "Pear", "Lemon"],
      middle: ["Lily of the Valley", "Jasmine", "Rose"],
      base: ["Musk", "Cedar", "Amber"]
    },
    bestFor: ["Daytime", "Office", "Spring", "Casual Wear"],
    longevity: "6-8 hours",
    sillage: "Light to Moderate",
    sizes: [
      { size: "30ml", price: 790 },
      { size: "50ml", price: 1290 },
      { size: "100ml", price: 2190 },
      { size: "200ml", price: 3890 }
    ],
    stock: 47,
    featured: false,
    bestSeller: false
  },
  {
    id: 24,
    title: "Superdose",
    brand: "Generic",
    price: 2790, // 100ml price
    description: "Intense long-lasting perfume.",
    category: "Unisex",
    images: ["superdose.jpg", "superdose1.jpg", "superdose3.jpg"],
    rating: 4.5,
    reviews: 80,
    notes: {
      top: ["Black Pepper", "Bergamot", "Cardamom"],
      middle: ["Patchouli", "Vetiver", "Cedar"],
      base: ["Amber", "Leather", "Tonka Bean"]
    },
    bestFor: ["Night", "Club", "Winter", "Bold Statements"],
    longevity: "10-12 hours",
    sillage: "Very Strong",
    sizes: [
      { size: "30ml", price: 990 },
      { size: "50ml", price: 1690 },
      { size: "100ml", price: 2790 },
      { size: "200ml", price: 4790 }
    ],
    stock: 25,
    featured: false,
    bestSeller: true
  },
  {
    id: 26,
    title: "Versace",
    brand: "Generic",
    price: 2990, // 100ml price
    description: "A stylish powerful fragrance with premium notes.",
    category: "Unisex",
    images: ["versace.jpg", "versace1.jpg", "versace3.jpg"],
    rating: 4.7,
    reviews: 110,
    notes: {
      top: ["Lemon", "Bergamot", "Neroli"],
      middle: ["Tuberose", "Jasmine", "Rose"],
      base: ["Amber", "Sandalwood", "Tonka Bean"]
    },
    bestFor: ["All Occasions", "Luxury Events", "Evening", "Special Moments"],
    longevity: "9-11 hours",
    sillage: "Strong",
    sizes: [
      { size: "30ml", price: 1190 },
      { size: "50ml", price: 1890 },
      { size: "100ml", price: 2990 },
      { size: "200ml", price: 5190 }
    ],
    stock: 20,
    featured: true,
    bestSeller: true
  }
];