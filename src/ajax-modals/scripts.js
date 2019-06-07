/**
 * Created by Anjelika Belikh on 12.03.2019.
 */
initModal();

/* modals */
function initModal() {
    var main_modal = $('#modal-main');

    // modal closing
    main_modal.on('hidden.bs.modal', function () {
    });

    // modal showing
    main_modal.on('show.bs.modal', function () {
        centerModal(main_modal);

        $('.form_validate').formValidation();
        $('.validate_phone').mask('+38 (999) 999 99 99');
        $('.input').each(function () {
            $(this).on('blur', inputHasValue)
        });
        $('.input').each(inputHasValue);
        formThx('.js-callback-form' , "/ajax-modals/modals/modal_callback-form.html");
    });

    // bg clicking
    $(document).on('click', '.modal-backdrop', function () {

    });
    $(document).on('click', '[data-openmodal]', function() {

        var link = $(this).data('openmodal');

        main_modal.find('.modal-dialog').load(link, function() {
            main_modal.modal('show');

            $('.form_validate').formValidation();
        })
    })
}

function centerModal(modalBox) {
    if (modalBox === undefined) {
        modalBox = $('#modal-main');
    }

    var wrapper = $('body'),
        modalDialog = modalBox.find('.modal-dialog'),
        widthMain = wrapper.outerWidth(),
        widthModal = modalDialog.find('.modal-body').outerWidth(),
        centerDistance = (widthMain - widthModal) / 2,
        centerVertical = ($(window).outerHeight() - modalDialog.outerHeight())/2;

    modalDialog.css('margin-left', centerDistance + 'px');

    if (centerVertical>0) {
        modalDialog.css('margin-top', centerVertical + 'px');
    } else {
        modalDialog.css('margin-top', '0');
    }

    $(window).resize(function() {
        var modalDialog = modalBox.find('.modal-dialog'),
            widthMain = wrapper.outerWidth(),
            widthModal = modalDialog.find('.modal-body').outerWidth(),
            centerDistance = (widthMain - widthModal) / 2;

        modalDialog.css('margin-left', centerDistance + 'px');

    });
}

function inputHasValue() {
    $(this).val() != '' ? $(this).addClass('has-value') : $(this).removeClass('has-value');
}

/* Thx callback form */
function formThx(form , url) {
    $(form).formValidation().on('submit', function (e) {
        e.preventDefault();
        var main_modal = $('#modal-main');
        if (!$(this).find('.input-holder').hasClass('error')) {

            $(this).find('.input-holder').removeClass('correct').find('input, select, textarea').val('');

            main_modal.find('.modal-dialog').load(url , function() {main_modal.modal('show');});
        }
    });
}