$('[data-modal]').click(function (e) {
  e.preventDefault();
  $('.modal').removeClass('_active');
  var modalItem = $(this).data('modal');
  $(modalItem).addClass('_active');
  $('.mask').addClass('_active');
});

$('.mask, .modal__close').click(function () {
  $(this).removeClass('_active');
  $('.modal').removeClass('_active');
  $('.mask').removeClass('_active');
});

function show_modal(page, action, redir_page) {
    $.ajax({
        type: "POST",
        url: "/?page="+page+"&action="+action,
        data: ({action : action, page : page}),
        success: function(data) {
            if (data == 'logined') {
                $(this).removeClass('_active');
                $('.modal').removeClass('_active');
                $('.mask').removeClass('_active');
                window.location.href = '?page='+redir_page;
                return;
            }
            $('#modal-'+action).html(data);
        }
    })
}
