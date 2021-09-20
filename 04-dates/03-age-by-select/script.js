
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here

    const currentDate = new Date();
    userDay = document.getElementById("dob-day").value;
    userMonth = document.getElementById("dob-month").value;
    userYear = document.getElementById("dob-year").value;

    userDate = new Date( userMonth+ userDay, userYear);


    difference = currentDate.getFullYear() - userDate.getFullYear();
    
    console.log(difference);
    // days = Math.round(difference / (1000 * 60 * 60 * 24) - 1);

})();
