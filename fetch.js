// 1. JSON

const person = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "painting", "cooking"],
};

const personJSON = JSON.stringify(person);
console.log(person);
console.log(personJSON);

const personObj = JSON.parse(personJSON);
console.log(personObj);

// 2. fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

//keys, values
const keys = Object.keys(person);
const values = Object.values(person);
console.log(keys, values);

// for
const numbers = [23, 54, 65, 47];
numbers.forEach((number) => console.log(number));
numbers.map((number) => console.log(number * 2));

//for of on array like object
const names = ["John", "Jane", "Bob"];
for (const name of names) {
  console.log(name);
}

//loop on an object using for in

const person2 = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "painting", "cooking"],
};

for (const key in person2) {
  console.log(key, person2[key]);
  if (typeof person2[key] === "string") {
    console.log(person2[key].toUpperCase());
  }
  if (Array.isArray(person2[key])) {
    console.log(person2[key].join(", "));
  }
}

const products = [
  { name: "laptop", price: 32000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "rayban", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

// create a new array without specific item
const remaining = products.filter((product) => product.name !== "phone");
console.log(remaining);