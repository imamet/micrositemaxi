$(document).ready(function() {

    //Back To Top
    $(window).scroll(function() {

        if ($(this).scrollTop() >= 150) {
            $('.back-top').fadeIn('fast');
            $('header').addClass('is-sticky');
        } else {
            $('.back-top').fadeOut('fast');
            $('header').removeClass('is-sticky');
        }
    });

    // fix header
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $("header").addClass("fixed-position");
        } else {
            $('header').removeClass('fixed-position');
        }
    });


    //Hamburger Icon
    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
        $(".navigation").toggleClass("show-menu");
    });

    // Slider Slick
    $('.sliderVideo').slick({
        slidesToShow: 1,
        infinite: false,
        arrows: true,
        dots: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                // /arrows: false
            }
        }]
    })

    $('.sliderImages').slick({
            slidesToShow: 1,
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
        })
        //modal custom
    $(".right__click1").click(function() {
        $(".frameModal").fadeIn(300);
    });
    $(".close-iframe1").click(function() {
        $(".frameModal").fadeOut(300);
    });
    //modal virtual
    $(".right__click").click(function() {
        $(".frameModal").fadeIn(300);
    });
    $(".close-iframe").click(function() {
        $(".frameModal").fadeOut(300);
    });



})