$(document).ready(function() {
    setInterval(function() {
        const $activeSlide = $('.slide.active');
        const $nextSlide = $activeSlide.next('.slide').length ? $activeSlide.next('.slide') : $('.slide').first();

        $activeSlide.removeClass('active');
        $nextSlide.addClass('active');
    }, 3000);
});

$(document).ready(function(){
    $(".gnb1").mouseenter(function(){
        $(".subShop").stop().slideDown(1000);
    });
    $(".gnb1").mouseleave(function(){
        $(".subShop").stop().slideUp(700);
    });
});
$(document).ready(function(){
    $(".gnb2").mouseenter(function(){
        $(".subInfo").stop().slideDown(1000);
    });
    $(".gnb2").mouseleave(function(){
        $(".subInfo").stop().slideUp(700);
    });
});
