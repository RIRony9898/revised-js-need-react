// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';


// 2. condition
// 6 basic condition >,<, ===, !==, <=, >=
// multiple conditions: &&, ||

if (fatherName === ' arnold' || season === 'rainy') {
    console.log('Arnold or rainy season');
}
else if (fatherName === 'Arnold'){
    console.log('Arnold but not rainy season');
}
else {
    console.log('Not Arnold or rainy season');
}


// 3. Array
// index, change value with index no
// length, push
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]


// 4. loop
// for, while, do while, for of, for in, for each
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. function
// function declaration, function expression, arrow function

function multiply(a, b) {
    const result = a * b;
    return result;
}

const output = multiply(5, 6);


// 6. object
// 3 ways to access property by name
const person = {
    name: 'John',
    age: 25,
    movies: ['movie1', 'movie2', 'movie3'],
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const myVariable = 'age';

console.log(person.name); //direct by property name
console.log(person['name']); //access via property name string
console.log(person[myVariable]); //access via property name in a variable