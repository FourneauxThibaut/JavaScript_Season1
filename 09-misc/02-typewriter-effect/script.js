// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let target = document.getElementById('target');
    target.style.opacity = "0"; 

    for (var i = 0; i < target.length; i++) {
        setTimeout(function(){ 
        target.textContent.charAt(i).style.opacity = "1"; 
    }, Math.floor(Math.random() * 61));

    }
})();
