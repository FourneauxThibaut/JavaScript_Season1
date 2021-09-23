// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    function getRandom (min, max) {
        return Math.floor((Math.random() * (max - min + 1)))+ min;
    }

    random = getRandom( 1, 100 );
    let userGuess = 150;
    let tryes = 0;

    while (userGuess != random){
        userGuess = prompt("Guess the number");
        if (userGuess < random)
        {
            alert("higher");
            tryes++
        }
        else if (userGuess > random) 
        {
            alert("lower");
            tryes++
        }
        else
        {
            alert("that's it! you needed "+ tryes +" guesses");
            break;
        }
    }
})();
