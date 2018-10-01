$(function() {
    // $('#fullpage').fullpage({
    //     //options here
    //     autoScrolling:true,
    //     scrollHorizontally: true
    // });
    //
    // //methods
    // $.fn.fullpage.setAllowScrolling(false);
    $('.btn-toggle').click(function () {
        $(this).toggleClass('toggled');
        $('.navbar-dark').toggleClass('toggled');
    })
});
