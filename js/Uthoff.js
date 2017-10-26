$(document).ready(function(){
        $(body).removeClass('storypage www');
});
</script>

<script type="text/javascript">
"use strict";

var stickySidebarone = $('.markerone').offset().top;
var stickySidebartwo = $('.markertwo').offset().top;
var stickySidebarthree = $('.markerthree').offset().top;
var stickySidebarfour = $('.markerfour').offset().top;
var stickySidebarfive = $('.markerfive').offset().top;
var stickySidebarsix = $('.markersix').offset().top;

var stickySidebarseven = $('.markerseven').offset().top;
var stickySidebareight = $('.markereight').offset().top;
var stickySidebarnine = $('.markernine').offset().top;
var stickySidebarten = $('.markerten').offset().top;
var stickySidebareleven = $('.markereleven').offset().top;
var stickySidebartwelve = $('.markertwelve').offset().top;

var stickySidebarthirteen = $('.markerthirteen').offset().top;
var stickySidebarfourteen = $('.markerfourteen').offset().top;
var stickySidebarfifteen = $('.markerfifteen').offset().top;
var stickySidebarsixteen = $('.markersixteen').offset().top;

var stickySidebarseventeen = $('.markerseventeen').offset().top;
var stickySidebareighteen = $('.markereighteen').offset().top;
var stickySidebarnineteen = $('.markernineteen').offset().top;
var stickySidebartwenty = $('.markertwenty').offset().top;

var stickySidebartwentyone = $('.markertwentyone').offset().top;



window.onresize = function(){
    stickySidebarone = $('.markerone').offset().top;
    stickySidebartwo = $('.markertwo').offset().top;
    stickySidebarthree = $('.markerthree').offset().top;
    stickySidebarfour = $('.markerfour').offset().top;
    stickySidebarfive = $('.markerfive').offset().top;
    stickySidebarsix = $('.markersix').offset().top;

    stickySidebarseven = $('.markerseven').offset().top;
    stickySidebareight = $('.markereight').offset().top;
    stickySidebarnine = $('.markernine').offset().top;
    stickySidebarten = $('.markerten').offset().top;
    stickySidebareleven = $('.markereleven').offset().top;
    stickySidebartwelve = $('.markertwelve').offset().top;

    stickySidebarthirteen = $('.markerthirteen').offset().top;
    stickySidebarfourteen = $('.markerfourteen').offset().top;
    stickySidebarfifteen = $('.markerfifteen').offset().top;
    stickySidebarsixteen = $('.markersixteen').offset().top;

    stickySidebarseventeen = $('.markerseventeen').offset().top;
    stickySidebareighteen = $('.markereighteen').offset().top;
    stickySidebarnineteen = $('.markernineteen').offset().top;
    stickySidebartwenty = $('.markertwenty').offset().top;

    stickySidebartwentyone = $('.markertwentyone').offset().top;
};


$(window).scroll(function() {
    if ($(window).scrollTop() <= stickySidebarone) {
        $('.right').addClass('affix');
        $('#uthoffonestart').addClass('seepic');
    }

    else {
        $('.right').addClass('affix');
        $('#uthoffonestart').removeClass('seepic');

    }

});


$(window).scroll(function() {
    if ($(window).scrollTop() > stickySidebarone && $(window).scrollTop() <= stickySidebartwo) {
        $('.uthoffone').addClass('seepic');
    }

    else {
        $('.uthoffone').removeClass('seepic');
    }

});
  
$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebartwo && $(window).scrollTop() <= stickySidebarthree) {
        $('.uthofftwo').addClass('seepic');
    }
    
    else {
        $('.uthofftwo').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebarthree && $(window).scrollTop() <= stickySidebarfour) {
        $('.uthoffthree').addClass('seepic');
    }
    
    else {
        $('.uthoffthree').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebarfour && $(window).scrollTop() <= stickySidebarfive) {
        $('.uthofffour').addClass('seepic');
    }
    
    else {
        $('.uthofffour').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebarfive && $(window).scrollTop() <= stickySidebarseven) {
        $('.uthofffive').addClass('seepic');
    }
    
    else {
        $('.uthofffive').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebarseven && $(window).scrollTop() <= stickySidebareight) {
        $('.uthoffseven').addClass('seepic');
    }
    
    else {
        $('.uthoffseven').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebareight && $(window).scrollTop() <= stickySidebarnine) {
        $('.uthoffeight').addClass('seepic');
    }
    
    else {
        $('.uthoffeight').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebarnine && $(window).scrollTop() <= stickySidebarten) {
        $('.uthoffnine').addClass('seepic');
    }
    
    else {
        $('.uthoffnine').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebarten && $(window).scrollTop() <= stickySidebareleven) {
        $('.uthofften').addClass('seepic');
    }
    
    else {
        $('.uthofften').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebareleven && $(window).scrollTop() <= stickySidebartwelve) {
        $('.uthoffeleven').addClass('seepic');
    }
    
    else {
        $('.uthoffeleven').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebartwelve && $(window).scrollTop() <= stickySidebarthirteen) {
        $('.uthofftwelve').addClass('seepic');
    }
    
    else {
        $('.uthofftwelve').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebarthirteen && $(window).scrollTop() <= stickySidebarfourteen) {
        $('.uthoffthirteen').addClass('seepic');
    }
    
    else {
        $('.uthoffthirteen').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop() > stickySidebarfourteen && $(window).scrollTop() <= stickySidebarfifteen) {
        $('.uthofffourteen').addClass('seepic');
    }
    
    else {
        $('.uthofffourteen').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop()> stickySidebarfifteen && $(window).scrollTop() <= stickySidebarsixteen) {
        $('.uthofffifteen').addClass('seepic');
    }
    
    else {
        $('.uthofffifteen').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop()> stickySidebarsixteen && $(window).scrollTop() <= stickySidebarseventeen) {
        $('.uthoffsixteen').addClass('seepic');
    }
    
    else {
        $('.uthoffsixteen').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop()> stickySidebarseventeen && $(window).scrollTop() <= stickySidebareighteen) {
        $('.uthoffseventeen').addClass('seepic');
    }
    
    else {
        $('.uthoffseventeen').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop()> stickySidebareighteen && $(window).scrollTop() <= stickySidebarnineteen) {
        $('.uthoffeighteen').addClass('seepic');
    }
    
    else {
        $('.uthoffeighteen').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop()> stickySidebarnineteen && $(window).scrollTop() <= stickySidebartwenty) {
        $('.uthoffnineteen').addClass('seepic');
    }
    
    else {
        $('.uthoffnineteen').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop()> stickySidebartwenty && $(window).scrollTop() <= stickySidebartwentyone) {
        $('.uthofftwenty').addClass('seepic');
    }
    
    else {
        $('.uthofftwenty').removeClass('seepic');
    }
});

$(window).scroll(function() {
   if ($(window).scrollTop()> stickySidebartwentyone) {
        $('.uthofftwentyone').addClass('seepic');
    }
    
    else {
        $('.uthofftwentyone').removeClass('seepic');
    }
});

    var video1 = document.getElementsByClassName('video');

    video1.addEventListener("canplay", start);

    function start() {this.play()};

</script>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>
  $(document).ready(function(){
   $('.twoclick').on('click', function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markertwo').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markertwo').offset().top-40);
   }
  });


$('.threeclick').click(function () {
           if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markerthree').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markerthree').offset().top-40);
   }
});

$('.fourclick').click(function () {
            if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markerfour').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markerfour').offset().top-40);
   }
});

$('.fiveclick').click(function () {
            if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markerfive').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markerfive').offset().top-40);
   }
});

$('.fivefiveclick').click(function () {
            if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markerfivefive').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markerfivefive').offset().top-40);
   }
});

$('.eightclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markereight').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markereight').offset().top-40);
   }
});
$('.nineclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markernine').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markernine').offset().top-40);
   }
});

$('.tenclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markerten').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markerten').offset().top-40);
   }
});

$('.elevenclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markereleven').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markereleven').offset().top-40);
   }
});

$('.twelveclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markertwelve').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markertwelve').offset().top-40);
   }
});

$('.thirteenclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markerthirteen').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markerthirteen').offset().top-40);
   }
});

$('.thirteenfiveclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markerthirteenfive').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markerthirteenfive').offset().top-40);
   }
});

$('.fifteenclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markerfifteen').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markerfifteen').offset().top-40);
   }
});
 
$('.sixteenclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markersixteen').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markersixteen').offset().top-40);
   }
});

$('.seventeenclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markerseventeen').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markerseventeen').offset().top-40);
   }
});

$('.eighteenclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markereighteen').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markereighteen').offset().top-40);
   }
});
 
$('.eighteenfiveclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markereighteenfive').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markereighteenfive').offset().top-40);
   }
});

$('.twentyclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markertwenty').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markertwenty').offset().top-40);
   }
});

$('.twentyoneclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markertwentyone').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markertwentyone').offset().top-40);
   }
});

$('.twentytwoclick').click(function () {
   if ($(window).width() >= 767) {     
       $("html, body").scrollTop($('.markertwentytwo').offset().top-100);
   }
   else {
       $("html, body").scrollTop($('.markertwentytwo').offset().top-40);
   }
});

});
