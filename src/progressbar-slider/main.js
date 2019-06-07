var $slider1 = $('.slider-one');
var $slider2 = $('.slider-two');
var $slider3 = $('.slider-three');
var $progressBar = $('.progress1');
var $progressBar2 = $('.progress2');
var $progressBarLabel = $( '.progress1 .slider__label' );
var $progressBarLabel2 = $( '.progress2 .slider__label' );


$slider1.slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    customPaging: function(slider, i) {
        var currentIndex = (i + 1) * 4;
        if (currentIndex > slider.slideCount) {
            currentIndex = slider.slideCount;
        }
        return '<div class="num-slider">' + '<span class="current-num">' + currentIndex + '</span>' + ' / ' + '<span>' + slider.slideCount + '</span>' + '</div>';
    },
    dots: true
});

function setProgress(index) {
    var calc = ((index + 1) / ($slider2.slick('getSlick').slideCount)) * 100;

    $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );

    $progressBarLabel.text(calc + '% completed');
}

$slider2.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    setProgress(nextSlide);
});

$slider2.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true
});


setProgress(0);

$slider3.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide)/(slick.slideCount-1)) * 100;

    $progressBar2
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc);

    $progressBarLabel2.text(calc + '% completed');
});

$slider3.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400
});