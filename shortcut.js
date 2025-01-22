//falsy values => '' , 0, false, null, undefined
//truthy values => 'almas', 5, true, {}, []

let myVar = 5;
if(myVar){
    console.log('Condition is true');
}else{
    console.log('Condition is false');
}


const money = 80;
let food;
if (money > 100) {
    food = 'biriyani';
}else {
    food = 'cha biscuits';
}

//ternary
let food1 = money>100 ? 'biriyani' : 'cha biscuits';

console.log(food, food1);

// Number to string conversion
let num1 = 50;
console.log(num1);

let numStr = num1 + '';

console.log(numStr);

// String to number conversion
let input = '560';
console.log(input);
let inputNum = +input;
console.log(inputNum);

//ternary with function
const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

isActive ? showUser() : hideUser();
//more shortcut
isActive && showUser(); // if the left side is true then right side will execute
isActive || hideUser();// if the left side is false then left side will execute