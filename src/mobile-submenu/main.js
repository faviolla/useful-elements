mobileMenu();

function mobileMenu() {
    let mobileMenuBack = '.mobile_menu .back';
    $(document).on('click', '.mobile_menu .submenu_section a', function () {
        $(this).siblings('.submenu').addClass('active');
    });
    $(document).on('click', mobileMenuBack, function() {
        $(this).closest('.submenu').removeClass('active');
    });
}