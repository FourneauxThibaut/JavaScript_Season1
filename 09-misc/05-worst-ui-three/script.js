// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here  
    let partOne = document.getElementById('part-one');
    let partTwo = document.getElementById('part-two');
    let partThree = document.getElementById('part-three');
    let partFour = document.getElementById('part-four');

    function getRandom (min, max) {
        return Math.floor((Math.random() * (max - min + 1)))+ min;
    }

    document.getElementById('fix-part-one').onclick = function(){

        let dataMinOne = parseInt(partOne.getAttribute('data-min'));
        let dataMaxOne = parseInt(partOne.getAttribute('data-max'));
        let random1 = getRandom(dataMinOne, dataMaxOne);

        document.getElementById('part-one').setAttribute('value', random1);
    };
    document.getElementById('fix-part-two').onclick = function(){

        let dataMinTwo = parseInt(partTwo.getAttribute('data-min'));
        let dataMaxTwo = parseInt(partTwo.getAttribute('data-max'));
        let random2 = getRandom(dataMinTwo, dataMaxTwo);
        
        document.getElementById('part-two').setAttribute('value', random2);
    };
    document.getElementById('fix-part-three').onclick = function(){

        let dataMinThree = parseInt(partThree.getAttribute('data-min'));
        let dataMaxThree = parseInt(partThree.getAttribute('data-max'));
        let random3 = getRandom(dataMinThree, dataMaxThree);
        
        document.getElementById('part-three').setAttribute('value', random3);
    };
    document.getElementById('fix-part-four').onclick = function(){

        let dataMinFour = parseInt(partFour.getAttribute('data-min'));
        let dataMaxFour = parseInt(partFour.getAttribute('data-max'));
        let random4 = getRandom(dataMinFour, dataMaxFour);
        
        document.getElementById('part-four').setAttribute('value', random4);
    };

})();
 