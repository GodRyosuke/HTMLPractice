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

// 画像の枚数
var count = $('#slide li').length;
// 現在表示されている画像
var current = 1;
// 次に表示する画像
var next = 2;

var dir = -1;
// スクロールのインターバル時間
var interval = 3000;
// スクロールのスピード
var duration = 700;
$('#slide ul').prepend($('#slide li:last-child'));
$('#slide ul').css('left', '-1000px');

var timer;
// intervalの時間間隔でslideTimerを実行
timer = setInterval(slideTimer, interval);
// intervalの時間ごとに呼び出される関数
function slideTimer() {
    current = next;
    next++;
    if (next > count) {
        next = 1;
    }
    // console.log('current:', current, 'next: ', next);

    $('#slide ul').animate({'left':'-=1000px'}, duration,
    function() {
        // $SlideLi = $('#slide li');
        // $(this).append($SlideLi[next - 1]);
      //  $(this).append($("#slide li:nth-child(" + next + ")"));
        $currnetSlide = $('#slide li:last-child');
        let temp = $currnetSlide.attr('id'); // 現在のスライドのid
        console.log(temp);
        
        $(this).append($("#slide li:first-child"));
        $(this).css('left', '-1000px');
    });
    
    // ボタンの遷移
    $('#button li a').removeClass('target');
    $("#button li:nth-child("+ current +") a").addClass('target');
}

$('#button li a').click(function() {
    next = $(this).html();
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    slideTimer();
    return false;
});

