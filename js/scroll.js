jQuery(function($) {
	animationSetting();

function animationSetting(){
    $('.scranm').each(function(){
        var obj       = $(this),
            objH      = $(this).outerHeight(),
            scrolled  = $(window).scrollTop(),
            viewed    = scrolled + $(window).height(),
            objTop    = $(this).offset().top,
            objBottom = objTop + objH,
            excnum    = 0.4;
//もしオブジェクトが画面内にあれば
        if((objTop + objH * excnum) <= viewed && (objBottom - objH * excnum) >= scrolled){
//オブジェクトにclassを付与(アニメーションの種類と起動)
//obj.addClass(obj.data('animation')).addClass('animated');
          obj.addClass('anm').addClass('animated');
        }
    })
}

//読み込んだした時点で一度起動
animationSetting();

//スクロールする度に起動
$(window).on('scroll', function() {
    animationSetting();
});

});
