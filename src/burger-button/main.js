$('.burger-menu').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('opened')) {
        $(this).removeClass('opened');
    } else {
        $(this).addClass('opened');
    }
});
