
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    const currentDate = new Date();

    // date
    const currentDay = currentDate.getDay();
    const currentJour = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // time

    const currentMins = currentDate.getMinutes();
    const currentHours = currentDate.getHours();

    switch (currentDay) {
        case 0:
            // lundi
            switch (currentMonth) {
                case 0:
                    // Janvier
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "January "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 1:
                    // Fevrier
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "February "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 2:
                    // Mars
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "March "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 3:
                    // Avril                    
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "April "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 4:
                    // Mai                    
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "May "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 5:
                    // Juin                    
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "June "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 6:
                    // Juillet                    
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "July "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 7:
                    // Aout                    
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "August "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 8:
                    // Septembre                    
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "September "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 9:
                    // Octobre                    
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "October "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 10:
                    // Novembre                    
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "November "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 11:
                    // Decembre                    
                    document.getElementById("target").innerHTML = "Monday "+ currentJour+ "December "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
            }
            break;
        case 1:
            // Mardi
            switch (currentMonth) {
                case 0:
                    // Janvier
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "January "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 1:
                    // Fevrier
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "February "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 2:
                    // Mars
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "March "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 3:
                    // Avril                    
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "April "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 4:
                    // Mai                    
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "May "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 5:
                    // Juin                    
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "June "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 6:
                    // Juillet                    
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "July "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 7:
                    // Aout                    
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "August "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 8:
                    // Septembre                    
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "September "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 9:
                    // Octobre                    
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "October "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 10:
                    // Novembre                    
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "November "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 11:
                    // Decembre                    
                    document.getElementById("target").innerHTML = "Tuesday "+ currentJour+ "December "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
            }
            break;
        case 2:
            // Mercredi
            switch (currentMonth) {
                case 0:
                    // Janvier
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "January "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 1:
                    // Fevrier
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "February "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 2:
                    // Mars
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "March "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 3:
                    // Avril                    
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "April "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 4:
                    // Mai                    
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "May "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 5:
                    // Juin                    
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "June "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 6:
                    // Juillet                    
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "July "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 7:
                    // Aout                    
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "August "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 8:
                    // Septembre                    
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "September "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 9:
                    // Octobre                    
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "October "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 10:
                    // Novembre                    
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "November "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 11:
                    // Decembre                    
                    document.getElementById("target").innerHTML = "Wednesday "+ currentJour+ "December "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
            }
            break;
        case 3:
            // Jeudi
            switch (currentMonth) {
                case 0:
                    // Janvier
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "January "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 1:
                    // Fevrier
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "February "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 2:
                    // Mars
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "March "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 3:
                    // Avril                    
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "April "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 4:
                    // Mai                    
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "May "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 5:
                    // Juin                    
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "June "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 6:
                    // Juillet                    
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "July "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 7:
                    // Aout                    
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "August "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 8:
                    // Septembre                    
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "September "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 9:
                    // Octobre                    
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "October "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 10:
                    // Novembre                    
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "November "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 11:
                    // Decembre                    
                    document.getElementById("target").innerHTML = "Thursday "+ currentJour+ "December "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
            }
            break;
        case 4:
            // Vendredi
            switch (currentMonth) {
                case 0:
                    // Janvier
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "January "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 1:
                    // Fevrier
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "February "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 2:
                    // Mars
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "March "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 3:
                    // Avril                    
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "April "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 4:
                    // Mai                    
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "May "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 5:
                    // Juin                    
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "June "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 6:
                    // Juillet                    
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "July "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 7:
                    // Aout                    
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "August "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 8:
                    // Septembre                    
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "September "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 9:
                    // Octobre                    
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "October "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 10:
                    // Novembre                    
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "November "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 11:
                    // Decembre                    
                    document.getElementById("target").innerHTML = "Friday "+ currentJour+ "December "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
            }
            break;
        case 5:
            // Samedi
            switch (currentMonth) {
                case 0:
                    // Janvier
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "January "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 1:
                    // Fevrier
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "February "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 2:
                    // Mars
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "March "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 3:
                    // Avril                    
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "April "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 4:
                    // Mai                    
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "May "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 5:
                    // Juin                    
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "June "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 6:
                    // Juillet                    
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "July "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 7:
                    // Aout                    
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "August "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 8:
                    // Septembre                    
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "September "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 9:
                    // Octobre                    
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "October "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 10:
                    // Novembre                    
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "November "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 11:
                    // Decembre                    
                    document.getElementById("target").innerHTML = "Saturday "+ currentJour+ "December "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
            }
            break;
        case 6:
            // Dimanche
            switch (currentMonth) {
                case 0:
                    // Janvier
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "January "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 1:
                    // Fevrier
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "February "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 2:
                    // Mars
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "March "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 3:
                    // Avril                    
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "April "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 4:
                    // Mai                    
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "May "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 5:
                    // Juin                    
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "June "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 6:
                    // Juillet                    
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "July "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 7:
                    // Aout                    
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "August "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 8:
                    // Septembre                    
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "September "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 9:
                    // Octobre                    
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "October "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 10:
                    // Novembre                    
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "November "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
                case 11:
                    // Decembre                    
                    document.getElementById("target").innerHTML = "Sunday "+ currentJour+ "December "+ currentYear+ ", "+ currentHours+ "h"+ currentMins;

                    break;
            }
            break;
    }

})();
