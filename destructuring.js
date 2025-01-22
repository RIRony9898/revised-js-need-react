// 1. Array destructuring
const numbers = [42, 65];
const x = numbers[0];
const y = numbers[1];

const [a, b] = [40, 60];

console.log(a, b, x, y);

const [c, d] = numbers;

console.log(c, d);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

console.log(boxify(90, 34));

// 2. Object destructuring
const student = {
  name: "sakib khan",
  age: 32,
  movies: ["king khan", "dhakar mastan"],
};

const [firstMovie, secondMovie] = student.movies;

console.log(firstMovie, secondMovie);


const employee = {
    ide: 'vs code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 70,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            brand: 'rolex',
            model: '12345',
            price: 30000
        }
    }
}

const {ide, designation} = employee;
const {height, weight} = employee.specification;
const {brand} = employee?.specification?.watch;

console.log(ide, designation, height, weight, brand);