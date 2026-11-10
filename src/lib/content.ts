// Everything on the site comes from here. See PLACEHOLDERS.md for what is verified and what is assumed.

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${base}${p}`;

export const site = {
  name: "Tacos El Caballo",
  tz: "America/Detroit",
  rating: 4.7,
  reviewCount: 875,
  street: "1445 Springwells St",
  city: "Detroit, MI",
  zip: "48209",
  phone: "(313) 989-8426",
  tel: "+13139898426",
  lat: 42.3055373,
  lng: -83.1232523,
  owner: "Jose Badajoz",
};

const q = encodeURIComponent(`${site.street}, ${site.city} ${site.zip}`);
export const links = {
  tel: `tel:${site.tel}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${q}`,
  embed: `https://www.google.com/maps?q=${q}&output=embed`,
  place: "https://www.google.com/maps/place/Tacos+el+Caballo/@42.3055373,-83.1232523,17z",
};

// Every day 10 AM to 9 PM (Google listing + a WXYZ feature)
export const open = { label: "Every day", time: "10 AM – 9 PM" };
export const byDay = Array.from({ length: 7 }, () => ({ open: 10, close: 21 }));

export const meats = [
  { es: "Asada", en: "Steak" },
  { es: "Pastor", en: "Marinated pork" },
  { es: "Pollo", en: "Grilled chicken" },
  { es: "Chorizo", en: "Mexican sausage" },
  { es: "Tripa", en: "Tripe", extra: 0.5 },
  { es: "Cabeza", en: "Beef head" },
  { es: "Lengua", en: "Beef tongue" },
  { es: "Birria", en: "Marinated beef" },
  { es: "Carnitas", en: "Fried pork" },
  { es: "Camarón", en: "Shrimp" },
  { es: "Ceviche", en: "Chopped fish" },
];

// ---- the price board, as printed on the truck ----
export type Item = { id: string; es: string; en: string; price: number; note?: string };
export const board: Item[] = [
  { id: "taco-corn", es: "Tacos", en: "Corn tortilla", price: 3 },
  { id: "taco-flour", es: "Tacos", en: "Flour tortilla", price: 4 },
  { id: "quesa-flour", es: "Quesadilla", en: "Flour tortilla", price: 4.5 },
  { id: "quesa-corn", es: "Quesadilla", en: "Corn tortilla", price: 3.5 },
  { id: "torta", es: "Torta", en: "Sandwich", price: 11 },
  { id: "burrito", es: "Burrito", en: "Big one", price: 12 },
  { id: "tostada", es: "Tostada", en: "Crispy", price: 6 },
  { id: "dinner", es: "Dinner", en: "Plate", price: 12 },
];
export const drinks = ["Coke", "Pepsi", "Diet Coke", "Sprite", "Squirt", "Sunkist", "Mountain Dew", "Bottled water", "Horchata", "Jamaica"];

export type Dish = { src: string; alt: string; name: string; es: string; line: string; price?: string };
export const dishes: Dish[] = [
  { src: "/img/tacos-green.webp", alt: "Tacos with grilled onions and green salsa on a paper plate", name: "Tacos", es: "Tacos de asada", line: "Grilled steak, grilled onions and fresh ones too, cilantro, a lime. Help yourself to the salsas.", price: "$3 corn · $4 flour" },
  { src: "/img/al-pastor.webp", alt: "Tacos al pastor with red and green salsa", name: "Al pastor", es: "Taco al pastor", line: "Marinated pork on a corn tortilla, off the grill. One of the most-mentioned things on Google.", price: "$3" },
  { src: "/img/burrito.webp", alt: "A burrito with grilled onions", name: "The burrito", es: "Burrito de asada", line: "Asada, pastor or any meat on the list, wrapped in a flour tortilla. Reviewers call them huge.", price: "$12" },
  { src: "/img/tostadas.webp", alt: "Shrimp tostadas with avocado", name: "Shrimp tostada", es: "Tostada de camarón", line: "Cold shrimp, cucumber, tomato and avocado piled on a crisp tortilla.", price: "$6" },
  { src: "/img/torta.webp", alt: "A carne asada torta with grilled onions", name: "Torta", es: "Torta de asada", line: "A toasted roll, grilled onions and the meat of your choice.", price: "$11" },
  { src: "/img/shrimp-dinner.webp", alt: "Shrimp dinner with rice and garlic bread", name: "Shrimp dinner", es: "Cena de camarón", line: "Shrimp with rice and garlic bread, off the dinner list.", price: "$12" },
];

export const gallery = [
  { src: "/img/combo.webp", alt: "Tacos, rice and beans in a to-go box", span: "tall" },
  { src: "/img/oysters.webp", alt: "A tray of oysters with lime", span: "tall" },
  { src: "/img/steak-tacos.webp", alt: "Two steak tacos with grilled onions", span: "wide" },
  { src: "/img/fruit-cup.webp", alt: "A fresh fruit cup with chile", span: "tall" },
  { src: "/img/tacos-foil.webp", alt: "Tacos wrapped in foil", span: "tall" },
  { src: "/img/quesa-slate.webp", alt: "A crisp cheese quesadilla on a slate board", span: "wide" },
  { src: "/img/tacos-close.webp", alt: "Tacos with cilantro and onion, salsa on the side", span: "tall" },
  { src: "/img/salsas.webp", alt: "Red and green salsa cups", span: "wide" },
];

// ---- reviews: Google, public. First name + initial, lightly trimmed (…) ----
export const stars = [729, 91, 23, 10, 22]; // 5 → 1
export const reviews = [
  { who: "Ann K.", when: "2 years ago", text: "Ordered chicken tacos on Grubhub, but they were so good that I ordered two more. They give you tons of toppings. The onion is fantastic, they have grilled and fresh onion. Best taco truck I’ve ever tried." },
  { who: "Mami J.", when: "6 months ago", text: "Love love love this truck, been going here since their burritos were 7 dollars… I drive from the Eastside just to go here. I buy the green salsa by the cup." },
  { who: "David C.", when: "a year ago", text: "The first time I had these tacos it changed my life. When I’m away from home all I can think about is getting home and going to this taco truck." },
  { who: "Jon T.", when: "9 months ago", text: "Open rain or snow and always has my favorites, lengua and cabeza. Will be back again and again and again." },
  { who: "Ken S.", when: "a year ago", text: "My fav by far was the asada. The grilled onions so flavorful, and I liked they let you have as many condiments as you wanted. The horchata was good as well." },
  { who: "Paige K.", when: "a year ago", text: "Without a doubt the best tacos I’ve ever had. We come once a month now, they are so good. Great service as well." },
  { who: "Bridget L.", when: "a year ago", text: "An authentic Mexican food truck in a Mexican neighborhood. Loved the food. They had outside seating. Will be going back the next time I am in the Detroit area." },
  { who: "Andrew G.", when: "a year ago", text: "Awesome food, really delicious. One of the highlights of my trip to Detroit." },
];
