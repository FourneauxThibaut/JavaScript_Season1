// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    let counter = document.getElementById('counter');
    let input = document.getElementById('pass-one');
    input.addEventListener('input', function () {
        input.maxLength = "10";
        counter.textContent = input.value.length + "/10";
    });
})();
