// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here    
    
/*     async function fetchThis(url) {
        const heroes = await fetch(url)
            .then(response => {
                const data = await heroes.json();
                console.log(data);
            });
    }

    document.getElementById('run').addEventListener('click', fetchThis( 'http://localhost:3000/heroes' )); */

    document.getElementById("run").addEventListener("click", async () => {
        const heroes = await fetch('http://localhost:3000/heroes');
        const data = await heroes.json();
        console.log(data);
    })

})();
