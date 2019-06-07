$(document).ready(function () {
    openingText();
    $('.about-product-titles-holder').length > 0 && stickyMenuActive();

    $(window).on('resize', function () {
        var windowWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        if (windowWidth > 1024) {
            $('.product-scroll-item').length > 0 && initStickyProduct();
        }
    }).trigger('resize');
});
function initStickyProduct() {
    var menuPanel = $('.about-product-titles').outerHeight();
    var topPos = $('.about-product-section').offset().top - menuPanel;

    $(window).scroll(function() {
        var $top = $(document).scrollTop(),
            pip = $('.stop-sticky-product').offset().top,
            element = $('.product-scroll-item'),
            height = element.outerHeight();

        if ($top > topPos && $top < pip - height - menuPanel) {
            element.addClass('sticky').removeAttr("style");
        } else if ($top > pip - height - menuPanel) {
            element.removeClass('sticky').css({'position':'absolute','bottom':'0'});
        } else {
            element.removeClass('sticky');
        }

        if ($top > $('.about-product-section').offset().top && $top < pip - 200) {
            $('.about-product-titles').closest('.description-column').addClass('fixed-menu');
        } else {
            $('.about-product-titles').closest('.description-column').removeClass('fixed-menu');
        }
    });
}

function openingText() {
    var text = '';

    $(document).on('click', '.opening-text', function (e) {
        e.preventDefault();

        if($(this).parent().hasClass('opened')) {
            $(this).parent().removeClass('opened');
        } else {
            $(this).parent().addClass('opened');
        }
    })
}

function stickyMenuActive() {
    $('.about-product-titles-holder a').bind('click', function(e) {
        e.preventDefault();

        $(document).off("scroll");
        $(this).addClass('active').siblings('a.about-product-title').removeClass('active');

        var target = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(target).offset().top - 65
        }, 600);
    });
}

$(window).scroll(function () {
    var scrollDistance = $(this).scrollTop();

    $('.section-item').each(function () {
        var target = $(this).offset().top;
        var id = $(this).attr('id');
        var menuHeader = $('.about-product-titles').outerHeight() + 21;


        if (scrollDistance >= target - menuHeader) {
            $('.about-product-titles-holder a.active').removeClass('active');
            $('.about-product-titles-holder a[href="#' + id + '"]').addClass('active');
        }
    });
    // $('.section-item').each(function (i) {
    //
    //     if($(this).position().top <= scrollDistance && $(this).position().top + $(this).height() > scrollDistance) {
    //         console.log($(this).position().top, $(this).height() , scrollDistance);
    //         $('.about-product-titles-holder a.active').removeClass('active');
    //         $('.about-product-titles-holder a').eq(i).addClass('active');
    //     }
    // });
});

