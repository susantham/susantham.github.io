//
//function displayDate() {
//    document.getElementById("demo").innerHTML = Date();
//}

/*jslint node: true */
/*eslint-disable no-unused-vars*/

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

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


// end hiding script from old browsers -->