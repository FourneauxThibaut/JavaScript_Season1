// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    let input = document.getElementById('pass-one');
    input.addEventListener('input', function () {
        if (input.value.length >= 8){
            
        }
        input.maxLength = "10";
        counter.textContent = input.value.length + "/10";
    });
})();
