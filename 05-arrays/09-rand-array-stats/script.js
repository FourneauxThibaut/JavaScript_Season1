// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        let nArr = [];

        for (let i=0; i<10; i++){
            nTemp = Math.floor(Math.random() * 101);
            nArr.push(nTemp);
            document.getElementById("n-"+(i+1)).innerHTML = nTemp;
        }

        let min = Math.min(...nArr);
        document.getElementById("min").innerHTML = min;

        let max = Math.max(...nArr);
        document.getElementById("max").innerHTML = max;

        let sum = nArr.reduce((a, b) => a + b, 0);
        document.getElementById("sum").innerHTML = sum;
        
        let average = sum / nArr.length;
        document.getElementById("average").innerHTML = average;
    });
})();