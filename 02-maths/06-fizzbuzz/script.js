
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here

    // In the console, for each numbers between 1 and 100 : 
    // show "fizz" if the number is a multiple of 3, 
    // "buzz" if it's a multiple of 5, 
    // "fizzbuzz" if it's both, 
    // or simply the number if it's none of these. 

    let i = 1;
    while (i < 100){
        if (i % 5 == 0 && i % 3 == 0)
        {
            console.log("fizzbuzz");
        }
        else if ( i % 5 == 0 && i % 3 != 0)
        {
            console.log("buzz");
        }
        else if ( i % 5 != 0 && i % 3 == 0)
        {
            console.log("fizz");
        }
        else
        {
            console.log(i);
        }
        i++;
    }

})();
