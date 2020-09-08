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

$('#slide ul').prepend($('#slide li:last-child'));
$('#slide ul').css('left', 'calc(-100vw + 30px)');
var dir = -1;
// スクロールのインターバル時間
var interval = 3000;
// スクロールのスピード
var duration = 700;
var timer;
timer = setInterval(slideTimer, interval);
function slideTimer() {
    $('#slide ul').animate({'left':'-=calc(100vw - 30px)'}, duration,
    function() {
        $(this).append($('#slide li:first-child'));
        $(this).css('left', 'calc(100vw - 30px)');
    });
}


