// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    sliderValue = document.getElementById('slider');
    valueShow = document.getElementById('target');

    sliderValue.oninput = function(){
        valueShow.textContent = 0+sliderValue.value
    };

})();
