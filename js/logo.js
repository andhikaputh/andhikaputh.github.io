$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.logokomp').fadeIn('slow');
    } else {
        $('.logokomp').fadeOut('slow');
    }
});