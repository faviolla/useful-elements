initCountdown();

function initCountdown() {
    $('.countdown').each(function () {
        $(this).countdown($(this).data('date'), function (event) {
            $(this).html(event.strftime(''
                + '<div class="time days flip"><span class="count">%D</span></div>'
                + '<div class="time hours flip"><span class="count">%H</span></div>'
                + '<div class="time minutes flip"><span class="count">%M</span></div>'
                + '<div class="time seconds flip"><span class="count">%S</span></div>'
            ));
        });
    });
}