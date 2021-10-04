// 11-fetch/03-details/script.js - 11.3: details


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async () => {
        let indexInput = document.getElementById('hero-id').value;

        const heroes = await fetch('http://localhost:3000/heroes');
        const data = await heroes.json();
        const count = Object.keys(data).length;


        if ("content" in document.createElement("template")) {
            const template = document.getElementById('tpl-hero');
            const target = document.getElementById("target");
            const clone = [];
        
            for ( let i = 0; i < 1; i++ ){
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

        data.forEach(element => {
            if (element.id == indexInput){
                console.log("oui jnon");
                allName[0].textContent = element.name;
                allAlterEgo[0].textContent = element.alterEgo;
                allPowers[0].textContent = element.abilities;
            };
        });
        
    })
})();
