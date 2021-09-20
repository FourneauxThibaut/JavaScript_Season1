
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    while (agree != true){
        let userAge = prompt("How old are you?");
        let userGender = prompt("What gender are you?");
        let userTown = prompt("Where do you live?"); 

        var agree = confirm('So you are ' + userAge + ', you are a ' + userGender + ' and you live in ' + userTown);
        if ( agree == true) {
            console.log('Data saved!');
            break;
        }
    }
})();
