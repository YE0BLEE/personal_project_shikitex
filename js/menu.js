$(function() {

    $('.menu-trigger').on('click',function(){
        if($(this).hasClass('active')){
      $(this).removeClass('active');
            $('#main').removeClass('open');
      $(window).scrollTop(pointY);
            $('.gnav').removeClass('open');
        } else {
      pointY = $(window).scrollTop();
            $(this).addClass('active');
            $('#main').addClass('open');
            $('#main').css('top', -pointY);
            $('.gnav').addClass('open');
        }
    });

  $('#head li a').each(function(){
    var target = $(this).attr('href');
    if(location.href.match(target)) {
      $(this).parent().addClass('current');
    } else {
      $(this).parent().removeClass('current');
    }
  });
/*
  */
  $('head link:last').after('<link rel="stylesheet" href="/common/css/anim2.css">');

});
