// Han Solo and My Code
class Player {
    age = 20;
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    // this.age = 20;
  }

  speak(phrase) {
    console.log(`${this.name} says ${phrase}`);
  }
}


// Darth Vader's Code
function AnotherPlayer(name, hp, mp, items) {
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.items = items;
}


// Phrase code
AnotherPlayer.prototype.speak = function (phrase) {
  console.log(`${this.name} says ${phrase}`);
}

// Han Solo
const hanSolo = new Player('Han Solo', 100, 10, ['Blaster']);
hanSolo.speak('Never tell me the odds..');
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__)); 


//Darth Vader
const darthVader = new AnotherPlayer('Darth Vader', 200, 50, ['Saber']);
darthVader.speak('Krrrrr Hrrrrrr');
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader).__proto__); 


// Me
const jered = new Player('Jered', 5, .2, 'a pickle')
jered.speak('Huh wha?');
console.log(jered);
console.log(Object.getOwnPropertyNames(jered));
console.log(Object.getOwnPropertyNames(jered).__proto__);
