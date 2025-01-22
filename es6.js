const numbers = [89, 35, 98, 12];
const student = {
  name: "sakib khan",
  age: 32,
  movies: ["king khan", "dhakar mastan"],
};

// 1. template string
const result = `My name is ${student.name} and I am ${student.age} years old. I like the ${student.movies[0]} movie. And my favorite number is ${numbers[2]}`;
console.log(result);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 === 0;
const addThreeNum = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const quotient = num1 / num2;
  return { sum, difference, product, quotient };
};
console.log(getFiftyFive());
console.log(addSixtyFive(40));
console.log(isEven(30));
console.log(addThreeNum(5, 7, 10));
console.log(doMath(10, 5));

// 3. spread operator
const numbers1 = [10, 20, 30, 40, 50, 60];
const numbers2 = [...numbers1, 55];
numbers1.push(99);
console.log(numbers1);
console.log(numbers2);
