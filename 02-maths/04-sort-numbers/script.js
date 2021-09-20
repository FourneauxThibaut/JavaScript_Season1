// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let userinput = document.getElementById("numbers").value;
        let userArr = userinput.split(',');
        let sortedArr = [];
        let min = userArr[0];
        console.log(userArr);
        
        while ( userArr.length > 0 ){

            for (let i = 0; i < userArr.length; i++){
                min = Math.min(...userArr)
                sortedArr.push(min);

                let index = userArr.indexOf(min);

                // console.log(userArr);
                // console.log(min);
                console.log(index);
                userArr.splice(index, 1);
            }
        }

        console.log(userArr);
        document.getElementById("answer").innerHTML = sortedArr;
    });

})();
