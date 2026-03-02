class Chai {
    flavour: string;
    price: number;
    isHot: boolean;

    constructor(flavour: string, price: number, isHot: boolean) {
        this.flavour = flavour;
        this.price = price;
        this.isHot = isHot;
    }
}


// access modifer 

class myChai {
    private flavour: string;
    private price: number;
    private isHot: boolean;

    constructor(flavour: string, price: number, isHot: boolean) {
        this.flavour = flavour;
        this.price = price;
        this.isHot = isHot;
    }
    reveal(){
        return this.flavour;
    }
}

const chai = new myChai("Masala Chai", 25, true)
console.log(chai.reveal());



class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const user = new Person("Kaushik");
user.greet();


// 3️⃣ Encapsulation

class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  public deposit(amount: number) {
    this.balance += amount;
  }

  public getBalance() {
    return this.balance;
  }
}




// 5️⃣ Abstraction

// Hide implementation details using abstract classes.

abstract class Animal {
  abstract makeSound(): void;

  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark!");
  }
}



// 6️⃣ Inheritance

// One class inherits another using extends.

class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car driving");
  }
}



// 7️⃣ Polymorphism

// One interface, many forms.

class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  area(): number {
    return Math.PI * 5 * 5;
  }
}