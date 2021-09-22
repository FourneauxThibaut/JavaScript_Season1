// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let img = document.querySelector('img');
    let current = 0;

    document.getElementById("next").addEventListener("click", function() {
        if (current < gallery.length{
            img.src = gallery[current];
            current++
        }else{
            current = 0;
        }
        console.log(current);
    });
})();
