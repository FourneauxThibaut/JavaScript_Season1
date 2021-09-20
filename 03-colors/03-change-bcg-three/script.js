
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function() {

        let red = Math.round(Math.random() * 255);
        let green = Math.round(Math.random() * 255);
        let blue = Math.round(Math.random() * 255); 
        let rgb = 'rgb('+ red +','+ green +','+ blue +')';

        document.body.style.backgroundColor = rgb;
    });

})();
