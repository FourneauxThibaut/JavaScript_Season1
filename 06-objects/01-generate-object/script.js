// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function() {
        let me = {
            lastname:"Fourneaux",
            firstname:"Thibaut",
            age: "25",
            city: "Namur",
            country: "Belgique",
        };
        console.log("Hey i'm"+ me.lastname + " " + me.firstname + " i've " + me.age + " year old, i live in " + me.city + " in " + me.country);
    });
})();
