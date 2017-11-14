//
//function displayDate() {
//    document.getElementById("demo").innerHTML = Date();
//}

/*jslint node: true */
/*eslint-disable no-unused-vars*/
/*jslint browser: true*/
/*global $, jQuery, alert, window, setInterval, document*/

'use strict';

//<!-- hide script from old browsers
function todaydate() {
    var today_date = new Date(),
//        myyear = today_date.getFullYear(),
//        mymonth = today_date.getMonth() + 1,
//        mytoday = today_date.getDate(),
        myHour = today_date.getHours(),
        myGreeting;
    
    if (myHour >= 6 && myHour < 12) {
        myGreeting = "Good morning! ";
    } else if (myHour >= 12 && myHour < 17) {
        myGreeting = "Good afternoon! ";
    } else {
        myGreeting = "Good evening! ";
    }
    return myGreeting;
}


/* Thanks to Marius Craciunoiu
http://jsfiddle.net/mariusc23/s6mLJ/31/ */

// Hide Header on scroll down
/*var scrollTimeOut = true,
    lastYPos = 0,
    yPos = 0,
    yPosDelta = 5,
    nav = $('nav.top-nav-bar'),
    navHeight = nav.outerHeight(),
    setNavClass = function() {
        scrollTimeOut = false;
        yPos = $(window).scrollTop();

        if(Math.abs(lastYPos - yPos) >= yPosDelta) {
            if (yPos > lastYPos && yPos > navHeight){
                nav.addClass('hide-nav');
            } else {
                nav.removeClass('hide-nav');
            }
            lastYPos = yPos;
        }
    };

$(window).scroll(function(e){
    scrollTimeOut = true;
});

setInterval(function() {
    if (scrollTimeOut) {
        setNavClass();
    }

}, 250); 

couldnt get this to work yet...
*/

// end hiding script from old browsers -->