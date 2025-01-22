const products = [
  { name: "laptop", price: 32000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "rayban", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

// Simple map with arrow function
const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);

// kono return jodi drkr na hoy ejonno for each use korte hoy
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

// Filter
const filteredProducts = products.filter(product => product.price < 10000);
console.log(filteredProducts);

const specificNameFilter = products.filter(product => product.name.includes('n'));
console.log(specificNameFilter);

//find
const specialName = products.find(product => product.name.includes('n'));   
console.log(specialName)