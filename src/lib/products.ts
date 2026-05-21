export type Product = {
  id: string;
  name: string;
  category: "men";
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
  { id: "9", name: "Flannel Overshirt — Heavyweight", category: "men", type: "Shirts", price: 1599, mrp: 2699, image: img("photo-1591047139829-d91aecb6caea"), badge: "NEW", description: "Brushed flannel overshirt with chest pockets. Wear it open or buttoned." },
  { id: "10", name: "Tech Track Pants", category: "men", type: "Bottoms", price: 1099, mrp: 1899, image: img("photo-1473966968600-fa801b869a1a"), description: "Lightweight tech fabric with side stripes and zip pockets." },
  { id: "11", name: "Pullover Hoodie — Off White", category: "men", type: "Hoodies", price: 1299, mrp: 2199, image: img("photo-1620799140408-edc6dcb6d633"), description: "Mid-weight pullover, double-lined hood, brushed interior." },
  { id: "12", name: "Striped Knit Polo", category: "men", type: "Shirts", price: 1099, mrp: 1899, image: img("photo-1618354691438-25bc04584c23"), description: "Retro knit polo, ribbed collar, three-button placket." },
  { id: "13", name: "Cargo Shorts — Utility", category: "men", type: "Bottoms", price: 899, mrp: 1599, image: img("photo-1591195853828-11db59a44f6b"), description: "Knee-length cargo shorts with multi-pocket utility." },
  { id: "14", name: "Tie Dye Tee — Sunset", category: "men", type: "T-Shirts", price: 749, mrp: 1299, image: img("photo-1576566588028-4147f3842f27"), description: "Hand-dyed cotton tee, no two are alike." },
  { id: "15", name: "Windbreaker Jacket — Color Block", category: "men", type: "Jackets", price: 1899, mrp: 3199, image: img("photo-1591047139756-eda1da7a9f04"), badge: "NEW", description: "Lightweight nylon windbreaker with bold color-block panels." },
  { id: "16", name: "Daddy Logo Combo (Hoodie + Joggers)", category: "men", type: "Combo", price: 2499, mrp: 4499, image: img("photo-1542327897-d73f4005b533"), badge: "COMBO 44% OFF", description: "Co-ord set in jet black. Hoodie + matching joggers." },
  { id: "17", name: "Henley Long Sleeve", category: "men", type: "T-Shirts", price: 899, mrp: 1499, image: img("photo-1503341504253-dff4815485f1"), description: "Soft cotton henley with three-button placket. Slim fit." },
  { id: "18", name: "Painter Pants — Carpenter Fit", category: "men", type: "Bottoms", price: 1499, mrp: 2499, image: img("photo-1517445312882-bc9910d016b7"), badge: "TRENDING", description: "Sturdy canvas painter pants with hammer loop and tool pockets." },
  { id: "19", name: "Zip-Up Hoodie — Classic Grey", category: "men", type: "Hoodies", price: 1399, mrp: 2299, image: img("photo-1620799139507-2a76f79a2f4d"), description: "Full-zip hoodie in melange grey. Wardrobe staple." },
  { id: "20", name: "Oxford Button-Down", category: "men", type: "Shirts", price: 1199, mrp: 1999, image: img("photo-1596755094514-f87e34085b2c"), description: "Classic oxford in cotton, button-down collar, regular fit." },
  { id: "21", name: "Bucket Hat — Reversible", category: "men", type: "Accessories", price: 399, mrp: 699, image: img("photo-1521369909029-2afed882baee"), description: "Reversible bucket hat. Two looks, one hat." },
  { id: "22", name: "Trucker Cap — Mesh Back", category: "men", type: "Accessories", price: 499, mrp: 899, image: img("photo-1588850561407-ed78c282e89b"), description: "Snapback trucker cap with mesh back and curved brim." },
  { id: "23", name: "Cross-body Tech Sling", category: "men", type: "Accessories", price: 899, mrp: 1599, image: img("photo-1547949003-9792a18a2601"), badge: "NEW", description: "Water-resistant tech sling with 4 compartments." },
  { id: "24", name: "Chunky Dad Sneakers", category: "men", type: "Footwear", price: 2499, mrp: 3999, image: img("photo-1542291026-7eec264c27ff"), badge: "TRENDING", description: "Chunky-sole dad sneakers. Comfort + chaos." },
  { id: "25", name: "Leather Biker Jacket", category: "men", type: "Jackets", price: 4999, mrp: 8999, image: img("photo-1551028719-00167b16eac5"), badge: "HOT", description: "Genuine leather biker with asymmetric zip. Built to last decades." },
  { id: "26", name: "Skate High Top Sneakers", category: "men", type: "Footwear", price: 1899, mrp: 2999, image: img("photo-1525966222134-fcfa99b8ae77"), description: "Canvas high tops with vulcanized sole. Built for the streets." },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const byCategory = (c: Product["category"]) => products.filter((p) => p.category === c);
export const byType = (t: string) => products.filter((p) => p.type === t);
export const featured = () => products.filter((p) => p.badge).slice(0, 8);