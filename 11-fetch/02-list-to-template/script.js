

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
                console.log(data[i]);
                clone[i] = document.importNode(template.content, true);
                let name = clone[i].querySelectorAll(".name");
                let alterEgo = clone[i].querySelectorAll(".alter-ego");
                let powers = clone[i].querySelectorAll(".powers");

                name.textContent = data[i].name;
                alterEgo.textContent = data[i].alterEgo;
                powers.textContent = data[i].abilities;
                
                target.appendChild(clone[i]);
            }     
        }
        console.log(data);
    })
})();
