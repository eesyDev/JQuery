$(document).ready(function() {
    $('a[href="#sheldure"], .main_btna, .main_btn').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown('slow');
    });
    $('.close').on('click', function() {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
    })
});