$(document).ready(function () {
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
    window.onload = function(){
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
});
