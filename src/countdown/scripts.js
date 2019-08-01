initCountdown();
initCountdown2();

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

function initCountdown2() {
        $('.countdown2').each(function () {
            var d = $(this).data('d'),
                h = $(this).data('h'),
                m = $(this).data('m'),
                s = $(this).data('s');

            $(this).countdown($(this).data('date'), {defer: true })
                .on('update.countdown', function (event) {
                    $(this).html(event.strftime(''
                        + '<div class="days flip"><span class="count"><span class="num">%D</span>'+d +'</span><span class="dots"> :</span></div>'
                        + '<div class="hours flip"><span class="count"><span class="num"> %H</span>'+h +'</span><span class="dots"> :</span></div>'
                        + '<div class="minutes flip"><span class="count"><span class="num"> %M</span>'+m +'</span><span class="dots"> :</span></div>'
                        + '<div class="seconds flip"><span class="count"><span class="num"> %S</span>'+s+'</span></div>'
                    ));
                });
        }).countdown('start');
    }
