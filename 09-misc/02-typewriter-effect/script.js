// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let target = document.getElementById('target');
    let text = target.textContent;
    target.textContent.innerHTML = "";

    for (var i = 0; i < text.length; i++) {
        setTimeout(function(){ 
            target.textContent.innerHTML = text.charAt(i)
        }, Math.floor(Math.random() * 61));
    }
    console.log(text);

})();