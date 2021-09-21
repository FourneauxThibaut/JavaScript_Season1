// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", function() {

        console.log(people.size);

        if (Array.from(people).find(e => e === "Alexandre") != undefined){
            console.log("there is a Alexandre in the set");
        }else{
            console.log("there is not a Alexandre in the set");
        }

    });
})();
