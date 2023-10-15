$(document).ready(function () {


    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".mainNav").addClass("changeBg");
        } else {
            //remove the background property so it comes transparent again
            $(".mainNav").removeClass("changeBg");
        }
    });

    // toggle menu
    $("header .toggle").click(function () {
        $(".overlay").css({
            "transform": "scaleX(1)"
        });

        $(".menu").addClass('ulDir');

    });

    $("header .overlay").click(function () {
        $(this).removeAttr("style");
        $(".menu").removeClass("ulDir");
    });


    $('.servicesCarusel , .solutionCarusel , .productsCarusel , .technologiesCarusel').owlCarousel({
        items: 1,
        // rtl: true,
        dots: false,
        nav: true,
        navText: [
            "&#8592;",
            "&#8594;"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        animateOut: 'animate__fadeOutDown',
        animateIn: 'animate__fadeInUp',
    });

    $('.cooperateCarusel').owlCarousel({
        // rtl: true,
        margin:20,
        dots: false,
        nav: true,
        autoWidth:true,
        navText: [
            "&#8592;",
            "&#8594;"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                autoWidth:false,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4
            },
        }
    });

    $('.testimonialsCarusel').owlCarousel({
        loop: true,
        thumbs: true,
        items: 1,
        responsiveClass: true, 
        autoplayHoverPause: true,
        autoplay: true,
        slideSpeed: 1000,
        paginationSpeed: 900,
        thumbsPrerendered: true,
        autoplayTimeout: 3000,
      });


    function initiateAnimation() {
        AOS.init({
            delay: 500, // values from 0 to 3000, with step 50ms
            duration: 900, // values from 0 to 3000, with step 50ms
            easing: "ease-out-back" // default easing for AOS animations
        });

        if ($(window).width() < 560) {
            AOS.init({
                once: true
            });
        }
    }
    initiateAnimation();

    //scroll top
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.fadeIn(1000);
        } else {
            scrollButton.fadeOut(1000);
        }
    });

    //click to scroll top
    scrollButton.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    });

});

/* loading screen */
$(window).on('load', function () {

    $(".layer-preloader").fadeOut(700, function () {

        $(".lds-dual-ring").delay(1000).fadeOut(700);

        $("body").css("overflow-y", "auto");

    });

});