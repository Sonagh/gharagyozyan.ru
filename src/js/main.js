$(function() {
    /* fullpage scroll plugin */
    $('#fullpage').fullpage({
        autoScrolling: true,
        anchors:['home','about','portfolio','contact']
    });


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
})