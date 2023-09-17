const Person = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },
};

const name = Person.name;
const age = Person.age;

console.log(name);
console.log(age);




const fruits = ['apple', 'banana', 'cherry', 'date'];

const [a, b, c, d] = fruits;

console.log(b, d);



const {address: {city, country}} = Person;

console.log(city, country);



