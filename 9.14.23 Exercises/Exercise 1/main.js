class Subject {
  constructor() {
    this.observers = [];
    this.observer = new Observer();
  }

  addObserver(fn) {
    this.observers.push(fn);
  }

  removeObserver(fn) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  }

  notifyObservers(data) {
    this.observers.forEach(observer => observer(data));
    this.observer.update();
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

observer.addObserver(observerOne);

observer.addObserver(observerTwo);

observer.removeObserver(observerOne);
