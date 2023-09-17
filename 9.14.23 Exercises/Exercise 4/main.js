class Subject {
  constructor() {
    this.observers = [];
    this.observer = new Observer();
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((observer) => observer !== observer);
  }

  notifyObservers(data) {
    this.observers.forEach(observer => observer(data));
    this.observer.update();
  }

  async fetchAndNotify() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      } catch (error) {
        console.log('ERROR', error);
      }
  }
}

class Observer {
  update(data) {
    console.log('Observer Updated!');

  }
}

const observer = new Subject;

const observerOne = () => {
  name: 'Jered'
  age: 22
}

const observerTwo = () => {
  name: 'Todd'
  age: 34
}

const observerThree = () => {
  name: 'Stanley'
  age: 32
}

observer.addObserver(observerOne);

observer.addObserver(observerTwo);

observer.addObserver(observerThree);

observer.removeObserver(observerOne);


Subject.fetchAndNotify();
