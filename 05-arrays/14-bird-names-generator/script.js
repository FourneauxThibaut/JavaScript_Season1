// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", function() {

        var randomBirds = birds[Math.floor(Math.random()*birds.length)];
        
        let items = Array.from(adjectives);
        let randomAdj = items[Math.floor(Math.random() * items.length)];

        if (randomBirds.fem == true){
            document.getElementById("target").innerHTML = randomBirds.name + " " + randomAdj + "e";
        }else{
            document.getElementById("target").innerHTML = randomBirds.name + " " + randomAdj;
        }

    });
})();
