$('select').change(function () {
    if ($(this).parent().attr('class').indexOf('_sel-chanel') >= 0)
        $(this).parent().attr('class', 'form-select _sel-chanel');
    else $(this).parent().attr('class', 'form-select _adv-chanel');
    if ($(this).parent().siblings('label').attr('class').indexOf('_required') >= 0)
        $(this).parent().siblings('label').attr('class', 'form__label _required');
    else $(this).parent().siblings('label').attr('class', 'form__label');
});
$('input').change(function () {
    if( $(this).val() ){
        if ($(this).attr('class').indexOf('_adv-chanel') >= 0)
            $(this).attr('class', 'form-field _adv-chanel')
        else $(this).attr('class', 'form-field');
        $(this).siblings('label').attr('class', 'form__label');
    }
});
