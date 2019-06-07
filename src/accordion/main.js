openingBlock('.accordion-title', '.accordion-body', '.accordion-item');

function openingBlock(btn, dropBlock, parentBlock) {
    $(document).on('click', btn, function (e) {
        e.preventDefault();
        $(this).parents(parentBlock).toggleClass('opened').find(dropBlock).slideToggle();
    })
}
