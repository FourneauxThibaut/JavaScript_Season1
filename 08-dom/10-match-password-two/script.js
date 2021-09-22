// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    document.getElementById('run').addEventListener('click', function(){
        let pass1 = document.getElementById('pass-one');
        let pass2 = document.getElementById('pass-two');
    
        if (pass1 != pass2){
            pass1.classList.add("error");
            pass2.classList.add("error");
        }else{
            pass1.classList.remove("error");
            pass2.classList.remove("error");
        }
    });
})();
