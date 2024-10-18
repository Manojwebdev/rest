 const menuItems = [
  
  { name: "Idly (2Pc)", category: "South Indian", price: 80 },
  { name: "Podi Idly (2Pc)", category: "South Indian", price: 85 },
  { name: "Mini Idly (12Pc)", category: "South Indian", price: 115 },
  { name: "Vada (2Pc)", category: "South Indian", price: 85 },
  { name: "Sambar Vada", category: "South Indian", price: 115 },
  { name: "Rasam Vada", category: "South Indian", price: 115 },
  { name: "Dahi Vada (1Pc)", category: "South Indian", price: 70 },
  { name: "Dahi Vada (2Pc)", category: "South Indian", price: 120 },
  { name: "Upma", category: "South Indian", price: 110 },
  { name: "Ghee Pongal", category: "South Indian", price: 120 },
  { name: "Ghee Pongal + Vada (1Pc)", category: "South Indian", price: 150 },
  { name: "Poori Masala (2Pc)", category: "South Indian", price: 105 },
  { name: "Extra Sambar (250ml)", category: "South Indian", price: 50 },
  
  
  { name: "Plain Dosa", category: "Dosa", price: 125 },
  { name: "Onion Dosa", category: "Dosa", price: 140 },
  { name: "Masala Dosa", category: "Dosa", price: 145 },
  { name: "Onion Masala Dosa", category: "Dosa", price: 155 },
  { name: "Podi Dosa", category: "Dosa", price: 140 },
  { name: "Butter Dosa", category: "Dosa", price: 135 },
  { name: "Butter Masala Dosa", category: "Dosa", price: 155 },
  { name: "Ghee Roast Dosa", category: "Dosa", price: 135 },
  { name: "Ghee Roast Masala Dosa", category: "Dosa", price: 155 },
  { name: "Set Dosa (2pcs)", category: "Dosa", price: 160 },
  { name: "Rava Dosa", category: "Dosa", price: 135 },
  { name: "Onion Rava Dosa", category: "Dosa", price: 155 },
  { name: "Rava Masala Dosa", category: "Dosa", price: 160 },
  { name: "Coconut Rava Dosa", category: "Dosa", price: 150 },
  { name: "Onion Rava Masala Dosa", category: "Dosa", price: 170 },
  { name: "Green Moong Dosa (Pesarattu)", category: "Dosa", price: 135 },
  { name: "Onion Green Moong Dosa (Pesarattu)", category: "Dosa", price: 150 },
  
  
  { name: "Uttapam", category: "Uttapam", price: 135 },
  { name: "Onion Uttapam", category: "Uttapam", price: 150 },
  { name: "Tomato Uttapam", category: "Uttapam", price: 150 },
  { name: "Mix Vegetable Uttapam", category: "Uttapam", price: 160 },
  { name: "Tomato Coconut Uttapam", category: "Uttapam", price: 160 },


  { name: "Mysore Masala Dosa", category: "Bhavan Special Dosa's", price: 155 },
  { name: "Spring Roll Dosa", category: "Bhavan Special Dosa's", price: 170 },
  { name: "Coconut Rava Masala Dosa", category: "Bhavan Special Dosa's", price: 165 },
  { name: "M.L.A Pesarattu (with Upma)", category: "Bhavan Special Dosa's", price: 165 },
  { name: "Arya Bhavan Paneer Dosa", category: "Bhavan Special Dosa's", price: 170 },
  { name: "Podi Ghee Masala Dosa", category: "Bhavan Special Dosa's", price: 170 },
  { name: "Adai Avail Dosa", category: "Bhavan Special Dosa's", price: 175 },

  { name: "Malabar Parotta 2Pc with Veg Korma", category: "Parotta", price: 155 },
  { name: "Chapati 3Pc with Veg Korma", category: "Parotta", price: 145 },
  { name: "Veg Khothu Parotta", category: "Parotta", price: 150 },

  { name: "Sambar Rice", category: "Rice Variety", price: 110 },
  { name: "Tomato Rice", category: "Rice Variety", price: 110 },
  { name: "Tamarind Rice", category: "Rice Variety", price: 110 },
  { name: "Lemon Rice", category: "Rice Variety", price: 110 },
  { name: "Curd Rice", category: "Rice Variety", price: 110 },


  { name: "Masala Dosa + Dahi Vada (1Pc)", category: "Combos", price: 190 },
  { name: "Green Moong Dosa + Dahi Vada (1Pc)", category: "Combos", price: 195 },
  { name: "Mini Meal", category: "Combos", price: 190, description: "Sambhar Rice/Curd Rice/Any variety of Rice with Poriyal, Sweet, Chapati, Chips" },
  { name: "South Indian Platter", category: "Combos", price: 195, description: "Ghee Pongal, Idly, Mini Masala Dosa, Medhu Vada, Sweet Kesari" },
  { name: "Chocolate Surprise", category: "Combos", price: 120, description: "Vanilla Ice Cream + Chocolate Ice Cream + with Chocolate Sauce + Nuts + Tuti Fruity" },
  { name: "Bunny Hug", category: "Combos", price: 130, description: "Vanilla Ice Cream + Chocolate Sauce with Mixed Nuts" }
,


{ name: "Parotta", category: "Parotta", price: 0 }, // Assuming a base price of 0 for plain Parotta
  { name: "Malabar Parotta 2Pc with Veg Korma", category: "Parotta", price: 155 },
  { name: "Chapati 3Pc with Veg Korma", category: "Parotta", price: 145 },
  { name: "Veg Khothu Parotta", category: "Parotta", price: 150 },


  { name: "Vanilla", category: "Ice Creams", price: 60 },
  { name: "Strawberry", category: "Ice Creams", price: 60 },
  { name: "Chocolate", category: "Ice Creams", price: 60 },
  { name: "Butter Scotch", category: "Ice Creams", price: 60 },
  { name: "Mango", category: "Ice Creams", price: 60 },


  { name: "Rava Kesari", category: "Sweets", price: 85 },
  { name: "Gulab Jamun (2Pcs.)", category: "Sweets", price: 70 },
  { name: "Sweet Pongal", category: "Sweets", price: 85 },
  { name: "Rasogolla (2Pcs.)", category: "Sweets", price: 30 },


  { name: "Tea", category: "Beverages", price: 45 },
  { name: "Lamsa Tea (Hyderabadi Special Chai)", category: "Beverages", price: 50 },
  { name: "Masala Tea (Ginger with Cardamom)", category: "Beverages", price: 50 },
  { name: "Coffee (South Indian Filter)", category: "Beverages", price: 50 },
  { name: "Cold Coffee", category: "Beverages", price: 80 },
  { name: "Bournvita", category: "Beverages", price: 65 },
  { name: "Holicks", category: "Beverages", price: 65 },
  { name: "Badam Milk (Hot)", category: "Beverages", price: 75 },
  { name: "Hot Milk", category: "Beverages", price: 45 },
  { name: "Lassi (Sweet/Salt)", category: "Beverages", price: 90 },
  { name: "Butter Milk", category: "Beverages", price: 75 },
  { name: "Mineral Water", category: "Beverages", price: "MRP" },
  { name: "Soft Drink (Cola, Lemon & Orange)", category: "Beverages", price: "MRP" },
  { name: "Soda", category: "Beverages", price: "MRP" },
  { name: "Fresh Lime Soda", category: "Beverages", price: 70 },
  { name: "Cappuccino", category: "Beverages", price: 75 },
  { name: "Cold Coffee with Ice Cream", category: "Beverages", price: 110 },


  { name: "Strawberry", category: "Milk Shakes", price: 135 },
  { name: "Vanilla", category: "Milk Shakes", price: 125 },
  { name: "Chocolate", category: "Milk Shakes", price: 145 },
  { name: "Butter Scotch", category: "Milk Shakes", price: 145 },
  { name: "Mango", category: "Milk Shakes", price: 145 },

  { name: "Pina Colada", category: "Mocktail", price: 84 },
  { name: "Virgin Mojito", category: "Mocktail", price: 84 },
  { name: "Orange Sunrise", category: "Mocktail", price: 84 },
  { name: "Blue Lagoon", category: "Mocktail", price: 84 },
  { name: "Lemon Ice Tea", category: "Mocktail", price: 84 },

  { name: "Onion Pakoda", category: "Evening Snacks", price: 80 },
  { name: "Aloo Bonda", category: "Evening Snacks", price: 75 },
  { name: "Paneer Bajji (2Pcs.)", category: "Evening Snacks", price: 95 },
  { name: "Masala Vada", category: "Evening Snacks", price: 70 },
  { name: "Mirchi Bajji (3Pcs.)", category: "Evening Snacks", price: 90 },
  { name: "Banana Bajji (4Pcs.)", category: "Evening Snacks", price: 85 },
  { name: "Guntha Punugulu", category: "Evening Snacks", price: 90 },
  { name: "Assorted Bajji", category: "Evening Snacks", price: 100 },

  { name: "Fresh Lime", category: "Fresh Juice", price: 55 },
  { name: "Pomegranate", category: "Fresh Juice", price: 130 },
  { name: "Sweet Lime Juice", category: "Fresh Juice", price: 115 },
  { name: "Apple Juice", category: "Fresh Juice", price: 130 },
  { name: "Pineapple Juice", category: "Fresh Juice", price: 120 },
  { name: "Watermelon Juice", category: "Fresh Juice", price: 115 },



  { name: "Ghee Pongal + Vada (1Pc)", category: "Recommended", price: 150 },
  { name: "Poori Masala (2Pc)", category: "Recommended", price: 105 },
  { name: "Extra Sambar (250ml)", category: "Recommended", price: 50 },
  { name: "Onion Masala Dosa", category: "Recommended", price: 155 },
  { name: "Podi Dosa", category: "Recommended", price: 140 },
  { name: "Butter Dosa", category: "Recommended", price: 135 },
  { name: "Tomato Uttapam", category: "Recommended", price: 150 },
  { name: "Coconut Rava Masala Dosa", category: "Recommended", price: 165 },
  { name: "M.L.A Pesarattu (with Upma)", category: "Recommended", price: 165 },
  { name: "Masala Dosa + Dahi Vada (1Pc)", category: "Recommended", price: 190 },
  { name: "Green Moong Dosa + Dahi Vada (1Pc)", category: "Recommended", price: 195 }


];

export default menuItems ;