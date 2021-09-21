// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        appelCount = 0;
        fruits.forEach(element => {
            if (element == "apple"){
                appelCount++;
            }
        });
        if ( appelCount > 0){
                console.log("there is apple in the list");
        }else{
                console.log("there is no apple in the list");
        }
    });
})();
