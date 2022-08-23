/* 헤더 */
$(function () {
      var tablet = $('.menu_t, .menu_t2') //var : 변수
      var menu = $('.main_tt');
      var main = $('.main_tt li')
     
     

      $(tablet).on('click', function (e) {
            
            e.preventDefault();
            menu.slideToggle();

      })

      $(main).on('click', function (e) {
            $('.main_tt>li>ul').hide(400)
            e.preventDefault();

            $(this).find('ul').stop().slideToggle(500);
          
      })



});



$(document).ready(function () {
      /*웹페이지 열었을 때*/
      $("#im1").show();
      $("#im2").hide();

      /*img1을 클릭했을 때 img2를 보여줌*/
      $("#im1").click(function () {
            $("#im1").hide();
            $("#im2").show();
      });

      /*img2를 클릭했을 때 img1을 보여줌*/
      $("#im2").click(function () {
            $("#im1").show();
            $("#im2").hide();
      });
});