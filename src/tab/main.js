(function() {    
    $(document).on('click', '[data-tab]' ,  function (e) {
        $(this).addClass('active').siblings('[data-tab]').removeClass('active');
        $(this).parents('.tab-holder').find('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
        e.preventDefault()
    })
}());