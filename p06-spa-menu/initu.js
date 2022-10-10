$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".content").slideToggle("fast");

    $('nav ul li.tidak-aktif').each(function(index, el) {
        var isiID = el.id.split('-')[1];
        $('.content#' + isiID).hide();
    });
});

$('nav').delegate('.tidak-aktif', 'click', function(event) {
    var pilihIsi = this.id.split('-')[1];
    console.log(pilihIsi);
    document.location.hash = pilihIsi;

    $('.isi:visible').fadeOut('slow', function() {
        $('.content#' + pilihIsi).fadeIn('fast');
    });

    var $this = $(this);
    $this.removeClass('tidak-aktif').addClass("aktif");
    $this.siblings().addClass('tidak-aktif').removeClass('aktif');

    });
});