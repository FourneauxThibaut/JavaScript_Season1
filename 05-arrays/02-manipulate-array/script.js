// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    
    document.getElementById("run").addEventListener("click", function() {
        
        let arrayLenght = fruits.length;

        fruits[0] = "banana";
        fruits[arrayLenght-1] = "kiwi";

        console.log(fruits);
        
    });
})();
