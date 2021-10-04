

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async () => {
        const heroes = await fetch('http://localhost:3000/heroes');
        const data = await heroes.json();
        const count = Object.keys(data).length;


        if ("content" in document.createElement("template")) {
            const template = document.getElementById('tpl-hero');
            const target = document.getElementById("target");
            const clone = [];
        
            for ( let i = 0; i < count; i++ ){
                clone[i] = document.importNode(template.content, true);
                let name = clone[i].querySelectorAll(".name");
                let alterEgo = clone[i].querySelectorAll(".alter-ego");
                let powers = clone[i].querySelectorAll(".powers");

                
                
                target.appendChild(clone[i]);
            }     
        }
        console.log(data);

        allName = document.querySelectorAll('.name');
        allAlterEgo = document.querySelectorAll('.alter-ego');
        allPowers = document.querySelectorAll('.powers');
        heroList = allName.length;

        for (let j = 0; j < allName.length; j++){
            allName[j].textContent = data[j].name;
            allAlterEgo[j].textContent = data[j].alterEgo;
            allPowers[j].textContent = data[j].abilities;
        };
    })
})();
