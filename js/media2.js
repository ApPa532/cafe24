$(function () {

    var slideListWidth1 = $('ul.slide>li').width();
    var slide = $('ul.slide')

    //오른쪽에서 왼쪽으로 이동
    function next2_1() {
        slide.stop().animate({
                left: -slideListWidth1
            },
            function () {
                $('ul.slide>li:first').insertAfter('ul.slide>li:last');
                slide.css('left', 0);
            })
    }
    
    //왼쪽에서 오른쪽으로 이동
    //li:first(슬라이드 다음 이미지), li:last(슬라이드 이전 이미지)
    function prev2_1(){
        $('ul.slide>li:last').insertBefore('ul.slide>li:first');
        slide.css('left',-slideListWidth1);
        slide.animate({left:0},300);
    }
    $('.prev2_1').click(function(){
        prev2_1();
    })
    $('.next2_1').click(function(){
        next2_1();
    })




});