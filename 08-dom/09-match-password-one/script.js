// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here

    document.getElementById('run').addEventListener('click', function(){
        let pass1 = document.getElementById('pass-one');
        let pass2 = document.getElementById('pass-two');
    
        if (pass1 != pass2){
            pass1.style.borderColor = "red";
            pass2.style.borderColor = "red";
        }
    });
})();
