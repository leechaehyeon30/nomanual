$(document).ready(function() {
    setInterval(function() {
        const $activeSlide = $('.slide.active');
        const $nextSlide = $activeSlide.next('.slide').length ? $activeSlide.next('.slide') : $('.slide').first();

        $activeSlide.removeClass('active');
        $nextSlide.addClass('active');
    }, 3000);

    // 네비게이션 슬라이드
    $("#nav_shop").mouseenter(function(){
        $(".subShop").stop().slideDown(1000);
    });
    $("#nav_shop").mouseleave(function(){
        $(".subShop").stop().slideUp(700);
    });

    $("#nav_info").mouseenter(function(){
        $(".subInfo").stop().slideDown(1000);
    });
    $("#nav_info").mouseleave(function(){
        $(".subInfo").stop().slideUp(700);
    });

    // 장바구니 여닫기
    $('.sub3, #bag_open').on('click', function() {
        $('.bag').show();
    });
    $('.cls_bag').on('click', function() {
        $('.bag').hide();
    });
    $(window).on('click', function(event) {
        if ($(event.target).is('.bag')) {
            $('.bag').hide();
        }
    });

    // 모달창 여닫기
    $('#search_Btn, #modal_open').on('click', function() {
        $('.modal').show();
    });
    $('.close').on('click', function() {
        $('.modal').hide(); 
    });
    $(window).on('click', function(event) {
        if ($(event.target).is('.modal')) {
            $('.modal').hide();
        }
    });

    // 퀵버튼 여닫기
    $('.quick').on('click', function() {
        $('.quicksos').fadeIn();
        $('.quick').fadeOut(); 
    });
    $('.cls_chat').on('click', function() {
        $('.quicksos').fadeOut();
        $('.quick').fadeIn(); 
    });
    $(window).on('click', function(event) {
        if ($(event.target).is('.quicksos')) {
            $('.quicksos').hide();
        }
    });
});

