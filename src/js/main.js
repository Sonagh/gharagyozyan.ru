$(function() {
    /* webfont loader */
    WebFont.load({
        google: {
            families: ['Roboto Condensed:300,400,700']
        }
    });

    /* fullpage scroll plugin */
    if ($(window).width() >= 992) {
        $('#fullpage').fullpage({
            responsiveWidth: 992,
            anchors:['home','about','portfolio','contact']
        });
    }



    /* navbar toggle button */
    var navbar = $('.navbar-dark');

    $('.btn-toggle').click(function () {
        $(this).toggleClass('toggled');
        navbar.toggleClass('toggled');
        $('body').toggleClass('overflow-hidden');
    });

    /*  close menu when clicked menu item */
    $('#navbar li').click(function() {
        navbar.removeClass('toggled');

    });

    $('.image-item a').fancybox();

});

