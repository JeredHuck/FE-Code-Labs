// Exercise 1

function outerFunction() {
  let outerVar = "I'm outside!"; // inner scope

  function innerFunction() {
    let innerVar = "I'm inside!";
  console.log(outerVar); //  inner scope
  console.log(innerVar); //  inner scope
  }
  innerFunction();
}

outerFunction(); // outer scope

// Exercise 2

mainFunction();

function mainFunction() {
  console.log('hola')
  hoistedFunction();
  function hoistedFunction(){
    console.log('hello')
  }
}


// Exercise 3

function outerFunctionTwo() {
  let outerVar = 'I think I am outside...'
  return function innerFunctionTwo() {
    console.log(outerVar);
  }
}

outerFunctionTwo()();

// Exercise 4

let myDog = 'Zeus';

function modifyGlobal() {
  console.log(`My dog is named ${myDog}`)
}

function localScopeTest() {
  let myDog = 'Peaches'
  console.log(myDog);
}

modifyGlobal();

localScopeTest();


// Exercise 5

function functionFactory(param) {
  return function paramFunction() {
    console.log(`I enjoy ${param}`)
  }
}

functionFactory('old video games')();

// Exercise 6

// function hoistingTest() {
//   console.log(heroOfTime);
//   const heroOfTime = 'courage';
// }

// hoistingTest();

// Exercise 7
 
function counter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      return count;
    }
  }
}

let myCounter = counter();

console.log('My count is: ' + myCounter.increment())
console.log('My count is: ' + myCounter.increment())
console.log('My count is: ' + myCounter.increment())

// Exercise 8

function counterTwo() {
  let count = 0;

  return {
    increment: function() {
      count++;
      return count;
    } 
  } 
} 


console.groupCollapsed();

let mySecondCounter = counterTwo()

console.log(mySecondCounter.increment());
console.log(mySecondCounter.increment());
console.log(mySecondCounter.increment());
console.log(mySecondCounter.increment());
console.log(mySecondCounter.increment());
console.log(mySecondCounter.increment());
console.log(mySecondCounter.increment());
console.log(mySecondCounter.increment());
console.log(mySecondCounter.increment());
console.log(mySecondCounter.increment());

if (mySecondCounter >= 11) {
  location.reload();
}

console.log(mySecondCounter.increment());

console.groupEnd()


// Exercise 9


function modifyGlobalTwo() {
  let masterSword = 'cool';
  return function funFactory() {
    console.log(`The master sword is ${masterSword}.`)
  }
  
}

function modifyLocal() {
  let ironBoots = 'dumb';
  console.log(`I think the iron boots are ${ironBoots}.`)
}

modifyLocal();

modifyGlobalTwo()();
