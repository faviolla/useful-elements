/**
 * Created by Anjelika Belikh on 21.03.2019.
 */
$('.datetimepicker').datepicker({
    dateFormat: 'dd.mm.yyyy',
    navTitles: {
        days: 'MM <i>yyyy</i>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    }
}).val(function () {
    return $(this).data('value');
});

$('.remove-date').on('click', function (e) {
    e.preventDefault();

    // $('.datetimepicker .date').text()  !== '' ? $('.datetimepicker .date').text('') : $('.datetimepicker .date').text();
    $('.datetimepicker').val() !== '' ? $('.datetimepicker').val('') : $('.datetimepicker').val();
    // console.log('remove');
});