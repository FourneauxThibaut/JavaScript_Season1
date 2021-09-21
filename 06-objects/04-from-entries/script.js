// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    document.getElementById("run").addEventListener("click", function() {
        
        let arr =[];
        let keyValueArr = [];
        
        for ( let i = 0; i < keys.length/2; i++){
            
            arr.push(keys[i]);
            arr.push(values[i]);
        }

        // const obj = Object.fromEntries(arr);

        console.log(arr);
        
        for ( let j = 0; j < arr.length; j++){
            for ( let k = 0; k < 2; k++){
                keyValueArr[j] = arr[k];
                arr.shift();
                console.log(keyValueArr);
            }
        }
        console.log(keyValueArr);
        console.log(arr);

    });
})();
