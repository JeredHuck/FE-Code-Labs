// OBJECT DESCTRUCTURING

// ex 1
// let person = {
//   firstName: 'Sonny',
//   lastName: 'Sangha',
//   middleName: 'Singh'
// };

// let { firstName, lastName, middleName = '', currentAge: age = 20 } = person;

// console.log(middleName);
// console.log(age);
// console.log(person);


// ARRAY DESTRUCTURING

//ex 1
// const arr = [1, 2, 3];

// let [x, y, z] = arr;

// console.log(x);

// let [a, b, c, d] = [1, 2, 3, 4];

// ex 2
// const arrValue = ['one', 'two', 'three'];

// const [x,,z] = arrValue;


// SPREAD OPERATOR !=== THE SPREAD OPERATOR CAN ONLY BE THE LAST ELEMENT

// array
// const names = ['Sonny', 'Jay', 'Brian', 'Rodgers'];

// const [x, a, ...y] = names;

// console.log(x);
// console.log(a);
// console.log(y);

// object
// const person = {
//   firstName: 'Sonny',
//   lastName: 'Sangha',
//   middleName: 'Singh'
// }

// let { name, ...rest} = person; 

// console.log(name);
// console.log(rest);

// SWAPPING VARIABLES

// let name1 = 'Sonny';
// let name2 = 'Jered';

// [name1, name2] = [name2, name1];

// console.log(name1);
// console.log(name2);


// FUNCTIONS 

// function getPerson() {
//   return null;
// }

// let { firstName, lastName } = getPerson() || {};

// console.log(firstName, lastName);


// NESTED OBJECT DESTRUCTURING

// let member = {
//   id: 0o1,
//   name: {
//     firstName: 'Jered',
//     lastName: 'Huckleberry'
//   }
// };

// let { id, name: { firstName, lastName }, name } = member;

// console.log(id);
// console.log(firstName);
// console.log(lastName);
// console.log(name);


// FUNCTION ARGUMENT DESTRUCTURING

// let displayFullName = ({firstName, lastName}) => `${firstName} ${lastName}`;

// let person = {
//   firstName: 'Jered',
//   lastName: 'Huckleberry'
// };

// console.log(displayFullName(person));