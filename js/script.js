/* 헤더 */
$(function () {
      $('.main>li').mouseover(function () {
            $(this).find('ul').stop().slideDown(0) //0.5s
      });
      $('.main>li').mouseout(function(){
            $(this).find('ul').stop().slideUp(0)
      }); 
});
/* 배너 */
$(function () {
      var visual = $('#main_visual>ul>li'); //슬라이드 이미지
      var button = $('#buttonList>li'); //동그라미 버튼
      var current = 0; //초기에 보여질 이미지
      var setIntervalID; //clearInterval을 사용하기 위해 변수가 필요

      timer(); //사용자 지정함수

      function timer() {
            setIntervalID = setInterval(function () {
                  var prev = visual.eq(current);
                  var pn = button.eq(current);
                  move(prev, 0, '-100%');
                  pn.removeClass('on');

                  current++;

                  if (current == visual.size()) {
                        current = 0
                  }

                  var next = visual.eq(current);
                  var pnn = button.eq(current);

                  move(next, '100%', 0);
                  pnn.addClass('on');

            }, 4000);
      };

      function move(tg, start, end) {
            tg.css('left', start).stop().animate({
                  left: end
            }, 1500);
      }

      //버튼을 클릭했을 때
      button.on({
            click: function () {

                  var tg = $(this); //클릭되어진 버튼을 타겟 tg에 담고
                  var i = tg.index(); //index: 순번(선택한 버튼의 인덱스 번호)

                  button.removeClass('on'); //활성화된 on 해제
                  tg.addClass('on'); //선택되어진 버튼의 on 활성화

                  move1(i);
            }
      });

      function move1(i) {
            if (current == i) return //현재 보이는 이미지가 i와 같다면 리턴을 이용해서 종료

            var currentEl = visual.eq(current);
            var nextEL = visual.eq(i);

            currentEl.css({
                  left: 0
            }).stop().animate({
                  left: '-100%'
            }, 500);
            nextEL.css({
                  left: '100%'
            }).stop().animate({
                  left: 0
            }, 500);

            current = i; //i는 현재 보여지는 이미지

      }

      //호버시 멈추게 하는 기능
      $('#main_visual').on({
            mouseover: function () {
                  clearInterval(setIntervalID);


            },
            mouseout: function () {
                  timer();
            }
      });

      function move(tg, start, end) { //파라미터(매개변수)
            tg.css('left', start).stop().animate({
                  left: end
            }, {
                  duration: 500,
            });
      }
});



$(function(){

      var search = $('.search_start')
      var smenu = $('#searchBox')
      var cancel = $('.search_cancel')

     /*  $(search).on('click', function (e) {
            
            e.preventDefault();
            smenu.slideToggle();

      })
 */

  $(search).click(function(){

      $(smenu).stop().slideDown(800)

  });

  $(cancel).click(function(){
        $(smenu).stop().slideUp(800)
  });



});
