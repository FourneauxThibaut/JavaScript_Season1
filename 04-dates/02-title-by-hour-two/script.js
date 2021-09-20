
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMins = currentDate.getMinutes();

    if ( currentHours >= 17 && currentMins >= 30){
        document.getElementById("target").innerHTML = "Good evening";
    }else{
        document.getElementById("target").innerHTML = "Hello";
    }
})();
