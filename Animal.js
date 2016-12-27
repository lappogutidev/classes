console.log("test : Animal.js loaded");

class Animal {

    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(this.name + " made some noise.");
    }

}

class Dog extends Animal {

    speak() {
        console.log(this.name + " barks.");
    }

}
