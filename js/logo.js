$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.logokomp').fadeIn('slow');
    } else {
        $('.logokomp').fadeOut('slow');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() < 100) {
        $('.logokom').fadeIn('slow');
    } else {
        $('.logokom').fadeOut('slow');
    }
});