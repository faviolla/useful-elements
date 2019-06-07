/**
 * Created by Anjelika Belikh on 19.03.2019.
 */
$(document).on('click' , '.js-more' , function(e){
    e.preventDefault();

    var moreText = $(this).data('less'),
        lessText = $(this).data('more');

    if($(this).parents('.review__text-holder').hasClass('opened')) {
        $(this).parents('.review__text-holder').removeClass('opened').children('.review__text').addClass('bg-gradient');
        $(this).text(moreText);
    } else {
        $(this).parents('.review__text-holder').addClass('opened').children('.review__text').removeClass('bg-gradient');
        $(this).text(lessText);
    }
});

function toggleLinkMore() {
    $(window).on('resize', function () {
        $(document).find('.review__text').each(function() {
            if($(this).find('.review__inner-text').height() > 100) {
                $(this).addClass('bg-gradient').siblings('.link__more').css('display','inline-block');
            } else {
                $(this).removeClass('bg-gradient').siblings('.link__more').css('display','none');
            }
        })
    }).trigger('resize');
}
toggleLinkMore();
