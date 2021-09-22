// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get getName() {
            return this.firstname + " " + this.lastname;
        }
        set setName(newName) {
            let words = newName.split(' ');
            this.firstname = words[0];
            this.lastname = words[1];
            console.log(this);
        }
    }

    document.getElementById("run").addEventListener("click", function() {

        let me = new Person("Thibaut", "Fourneaux");
        console.log(me);
        console.log(me.getName);
        me.setName = "Elvis Presselait";

    });
})();