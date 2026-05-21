export type Product = {
  id: string;
  name: string;
  category: "men" | "women" | "kids";
  type: string;
  price: number;
  mrp: number;
  image: string;
  badge?: string;
  description: string;
  brand?: string;
};

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const products: Product[] = [
  { id: "1", name: "Oversized Graphic Tee — Daddy Drip", category: "men", type: "T-Shirts", price: 799, mrp: 1499, image: img("photo-1521572163474-6864f9cf17ab"), badge: "HOT", brand: "Style Daddy", description: "Heavyweight 240 GSM cotton oversized tee with bold front graphic. Drop shoulder, ribbed crew neck." },
  { id: "2", name: "Cargo Joggers — Street Tactical", category: "men", type: "Bottoms", price: 1199, mrp: 1999, image: img("photo-1542272604-787c3835535d"), description: "Tapered cargo joggers with 6 utility pockets. Stretch twill, drawcord waist." },
  { id: "3", name: "Minimal Logo Hoodie — Jet Black", category: "men", type: "Hoodies", price: 1499, mrp: 2499, image: img("photo-1556821840-3a63f95609a7"), badge: "NEW", brand: "Style Daddy", description: "Brushed fleece hoodie with embroidered chest logo. Kangaroo pocket, ribbed cuffs." },
  { id: "4", name: "Tropical Print Resort Shirt", category: "men", type: "Shirts", price: 999, mrp: 1799, image: img("photo-1602810318383-e386cc2a3ccf"), description: "Rayon resort shirt with all-over tropical print. Camp collar, boxy fit." },
  { id: "5", name: "Distressed Baggy Jeans", category: "men", type: "Bottoms", price: 1799, mrp: 2999, image: img("photo-1542272604-787c3835535d"), badge: "TRENDING", description: "90s baggy fit denim with knee distress. Mid-rise, true indigo wash." },
  { id: "6", name: "Street Art Combo (Tee + Cargo)", category: "men", type: "Combo", price: 1899, mrp: 3499, image: img("photo-1490481651871-ab68de25d43d"), badge: "COMBO 45% OFF", description: "Curated combo: graphic tee + matching cargo. Picked by the Daddy himself." },
  { id: "7", name: "Acid Wash Boxy Tee", category: "men", type: "T-Shirts", price: 699, mrp: 1299, image: img("photo-1581655353564-df123a1eb820"), description: "Vintage acid wash on heavyweight cotton. Boxy cropped silhouette." },
  { id: "8", name: "Varsity Bomber Jacket", category: "men", type: "Jackets", price: 2299, mrp: 3999, image: img("photo-1551028719-00167b16eac5"), badge: "NEW", description: "Wool-blend bomber with chenille patches, satin lining, ribbed trims." },
  { id: "9", name: "Pleated Mini Skirt — Y2K", category: "women", type: "Bottoms", price: 999, mrp: 1799, image: img("photo-1583496661160-fb5886a13d44"), badge: "HOT", description: "Low-rise pleated mini, Y2K coded. Wear with chunky sneakers." },
  { id: "10", name: "Crop Hoodie — Sugar Pink", category: "women", type: "Hoodies", price: 1199, mrp: 1999, image: img("photo-1556821840-3a63f95609a7"), description: "Cropped fleece hoodie with raw hem and oversized hood." },
  { id: "11", name: "Baby Tee — Daddy's Girl", category: "women", type: "T-Shirts", price: 599, mrp: 999, image: img("photo-1503342217505-b0a15ec3261c"), badge: "NEW", description: "Slim-fit baby tee, 100% cotton, statement print." },
  { id: "12", name: "Wide Leg Parachute Pants", category: "women", type: "Bottoms", price: 1399, mrp: 2299, image: img("photo-1594633312681-425c7b97ccd1"), description: "Tech nylon parachute pants with elasticated hem." },
  { id: "13", name: "Oversized Boyfriend Shirt", category: "women", type: "Shirts", price: 1099, mrp: 1799, image: img("photo-1485518882345-15568b007407"), description: "Cotton poplin shirt cut extra-oversized. Layer it loose." },
  { id: "14", name: "Mesh Layering Top", category: "women", type: "T-Shirts", price: 499, mrp: 899, image: img("photo-1495121605193-b116b5b9c5fe"), description: "Sheer mesh long sleeve. Layering essential." },
  { id: "15", name: "Denim Mini Dress", category: "women", type: "Dresses", price: 1499, mrp: 2499, image: img("photo-1572804013309-59a88b7e92f1"), badge: "TRENDING", description: "Structured denim mini with corset waist." },
  { id: "16", name: "Co-ord Set — Cargo Skirt + Crop", category: "women", type: "Combo", price: 1999, mrp: 3499, image: img("photo-1483985988355-763728e1935b"), badge: "COMBO", description: "Two-piece utility set. Matching cargo mini + crop top." },
  { id: "17", name: "Mini Daddy Hoodie", category: "kids", type: "Hoodies", price: 899, mrp: 1499, image: img("photo-1503944583220-79d8926ad5e2"), badge: "NEW", description: "Heavyweight kids hoodie with playful print." },
  { id: "18", name: "Kids Graphic Tee Pack of 2", category: "kids", type: "T-Shirts", price: 799, mrp: 1399, image: img("photo-1519278409-1f56fdda7fe5"), badge: "PACK", description: "Two graphic tees, 100% cotton. Sized 2Y–10Y." },
  { id: "19", name: "Joggers — Mini Tactical", category: "kids", type: "Bottoms", price: 699, mrp: 1199, image: img("photo-1545558014-8692077e9b5c"), description: "Soft cotton-fleece joggers with cargo pockets." },
  { id: "20", name: "Skater Denim Jacket", category: "kids", type: "Jackets", price: 1299, mrp: 2199, image: img("photo-1519278409-1f56fdda7fe5"), description: "Classic skater denim jacket with patch detailing." },
  { id: "21", name: "Bucket Hat — Reversible", category: "men", type: "Accessories", price: 399, mrp: 699, image: img("photo-1521369909029-2afed882baee"), description: "Reversible bucket hat. Two looks, one hat." },
  { id: "22", name: "Chain Belt — Heavy Metal", category: "women", type: "Accessories", price: 499, mrp: 899, image: img("photo-1591348278863-a8fb3887e2aa"), description: "Statement chain belt. Adjustable fit." },
  { id: "23", name: "Cross-body Tech Sling", category: "men", type: "Accessories", price: 899, mrp: 1599, image: img("photo-1547949003-9792a18a2601"), badge: "NEW", description: "Water-resistant tech sling with 4 compartments." },
  { id: "24", name: "Chunky Dad Sneakers", category: "men", type: "Footwear", price: 2499, mrp: 3999, image: img("photo-1542291026-7eec264c27ff"), badge: "TRENDING", description: "Chunky-sole dad sneakers. Comfort + chaos." },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const byCategory = (c: Product["category"]) => products.filter((p) => p.category === c);
export const featured = () => products.filter((p) => p.badge).slice(0, 8);