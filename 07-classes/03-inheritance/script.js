// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Dog extends Animal {
        static greeting = 'Wouaf';
    }
    class Cat extends Animal {
        static greeting = 'Miaou';
    }

    document.getElementById("run").addEventListener("click", function() {

        let gnar = new Cat("Nanar");
        console.log(gnar.sayHello());

        let benji = new Dog("Ben");
        console.log(benji.sayHello());

    });
})();
