$(function() {
$(".toggleButton").click(function() {
    $(".toggleMenu").slideToggle();
});




$('dd[id != "acc1"]').css("width", "0px");


$('.accordion a').click(function() {
    if (!$(this).hasClass('currentButton')) {
        // 現在のコンテンツを閉じる
        $('.current').animate({'width': '0px'}, 300);
        $($(this).attr('href')).animate({'width': '600px'}, 300);
        $('dd').removeClass();
        $($(this).attr('href')).addClass('current');
        $('a').removeClass();
        $(this).addClass('currentButton');
    }
    return false;
});
});