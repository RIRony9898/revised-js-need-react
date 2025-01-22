const person = {
    name: 'John Doe',
    profession: 'Traffic Surgeon',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

//dot notation
const prof1 = person.profession;

//bracket notation
const prof2 = person['profession']

console.log(prof1, prof2);