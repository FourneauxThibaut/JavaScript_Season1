// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let storage = localStorage.setItem('value', 0);
    let target = document.getElementById('target');


    document.getElementById('increment').onclick = function(){
        let storageValue = localStorage.getItem('value');
        let newValue = storageValue++;
        localStorage.setItem('value', newValue);
        target.textContent = localStorage.getItem('value');
    };
    
})();
