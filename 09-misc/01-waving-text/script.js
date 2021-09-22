// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    let target = document.getElementById('target').textContent;
    const words = target.split(' ');
    const wordsLenght = words.length;
    fontSizeArr = [ 'xx\-small', 'x\-small', 'small', 'medium', 'large', 'x\-large', 'xx\-large']
    // words.forEach(element => {
    //     element.style.fontSize = Math.random(fontSizeArr);
    // });

    for (var i = 0; i <= wordsLenght; ++i) {
        words[i].unshift("<div>");
        words[i].push("</div>");
    }

    console.log(words);
})();
