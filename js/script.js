$(document).ready(function() {
    
    // 상단 이벤트 슬라이드 효과 (태블릿,pc)
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

    // 모바일 메뉴 여닫기
    $('.mobileNav').on('click', function() {
        $('.mobilemenu').show();
    });
    $('.cls_menu').on('click', function() {
        $('.mobilemenu').hide();
    });
    $(window).on('click', function(event) {
        if ($(event.target).is('.mobilemenu')) {
            $('.mobilemenu').hide();
        }
    });

    // 모바일 네비게이션 슬라이드
    $("#mobileshop a").click(function(){
        $(".shopopen").toggle();
    });
    $("#mobileinfo a").click(function(){
        $(".infoopen").toggle();
    });
    $("#mobileinter a").click(function(){
        $(".interopen").toggle();
    });

    // 로그인창 여닫기
    $('.sub1').on('click', function() {
        $('.login').show();
    });
    $('.cls_login').on('click', function() {
        $('.login').hide();
    });
    $(window).on('click', function(event) {
        if ($(event.target).is('.login')) {
            $('.login').hide();
        }
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

    // 섹션1 태블릿 슬라이드
    let isMouseDown = false;
    let startX;
    let scrollLeft;
  // 드래그 가능한 리스트 선택
    const $draggableList = $('.draggable');
  // 마우스가 눌렸을 때
    $draggableList.on('mousedown', function(e) {
    isMouseDown = true;
    startX = e.pageX - $draggableList.offset().left;  // 클릭한 위치
    scrollLeft = $draggableList.scrollLeft();  // 현재 스크롤 위치
    $draggableList.css('cursor', 'grabbing');  // 드래그 중 커서 변경
    });
  // 마우스가 이동 중일 때
    $(document).on('mousemove', function(e) {
    if (!isMouseDown) return;  // 마우스 다운 상태에서만
    const x = e.pageX - $draggableList.offset().left;  // 이동된 X 값
    const walk = (x - startX) * 2;  // 이동 거리 계산 (속도 조절)
    $draggableList.scrollLeft(scrollLeft - walk);  // 스크롤 위치 조정
    });
  // 마우스를 뗄 때
    $(document).on('mouseup', function() {
    isMouseDown = false;
    $draggableList.css('cursor', 'grab');  // 커서 원래대로 복귀
    });
  // 모바일 터치 지원
    $draggableList.on('touchstart', function(e) {
    isMouseDown = true;
    startX = e.originalEvent.touches[0].pageX - $draggableList.offset().left;  // 터치 시작 위치
    scrollLeft = $draggableList.scrollLeft();  // 현재 스크롤 위치
    });
  // 터치 이동 중
    $draggableList.on('touchmove', function(e) {
    if (!isMouseDown) return;  // 터치가 시작되지 않으면 무시
    const x = e.originalEvent.touches[0].pageX - $draggableList.offset().left;  // 이동된 X 값
    const walk = (x - startX) * 2;  // 이동 거리 계산 (속도 조절)
    $draggableList.scrollLeft(scrollLeft - walk);  // 스크롤 위치 조정
    });
  // 터치 끝났을 때
    $draggableList.on('touchend', function() {
    isMouseDown = false;
    });

    // 섹션1 마우스엔터 효과 (pc)
    function checkWindowSize() {
        var windowWidth = $(window).width();
        
        if (windowWidth >= 1281 && windowWidth <= 1920) {
            var initialWidth = $('.first').css('width');
            
            $('li').not('.first').on('mouseenter', function() {
                $('.first').css('width', '20vw');
                $('.first').css('height', '20vw');
                $('.first').css('font-size', '11px');
            });

            $('.first').on('mouseover', function() {
                $('.first').css('width', '30vw');
                $('.first').css('height', '30vw');
                $('.first').css('font-size', '17px');
            });

            $('.first').on('mouseleave', function() {
                $('.first').css('font-size', '11px');
            });

            // li에서 마우스를 뗄 때
            $('li').on('mouseleave', function() {
                $('.first').css('width', '30vw');
                $('.first').css('height', '30vw');
                $('.first').css('font-size', '17px');
            });

        } else {
            // 화면 크기가 조건을 벗어나면 이벤트 핸들러 제거
            $('li').off('mouseenter mouseleave');
            $('.first').off('mouseover mouseleave');
            $('.first').css('width', initialWidth);  // 초기 width로 되돌리기 (필요한 경우)
            $('.first').css('height', ''); // 필요에 따라 초기화
            $('.first').css('font-size', ''); // 필요에 따라 초기화
        }
    }
    // 페이지 로드 시와 창 크기 조정 시마다 체크
    checkWindowSize();   
    // 창 크기 변경시 체크
    $(window).resize(function() {
        checkWindowSize();
    });

    // 섹션1 pc 섹션변경
    $('.next').on('click', function() {
        $('.ipad_list').fadeIn(2000);
        $('.firstitem').fadeOut(); 
    });
    $('.prev').on('click', function() {
        $('.ipad_list').fadeOut();
        $('.firstitem').fadeIn(2000); 
    });
    $(window).on('click', function(event) {
        if ($(event.target).is('.quicksos')) {
            $('.quicksos').hide();
        }
    });


    // 섹션2 new제품
    $('.content').click(function() {
        $('.content').addClass('one');
        $('.content2, .content3, .content4').removeClass('one');
        $('.content').prependTo('.imgGroup');
        $('.content4').appendTo('.imgGroup');
    });
    $('.content2').click(function() {
        $('.content2').addClass('one');
        $('.content, .content3, .content4').removeClass('one');
        $('.content2').prependTo('.imgGroup');
        $('.content').appendTo('.imgGroup');
    });
    $('.content3').click(function() {
        $('.content3').addClass('one');
        $('.content, .content2, .content4').removeClass('one');
        $('.content3').prependTo('.imgGroup');
        $('.content2').appendTo('.imgGroup');
    });
    $('.content4').click(function() {
        $('.content4').addClass('one');
        $('.content, .content2, .content3').removeClass('one');
        $('.content4').prependTo('.imgGroup');
        $('.content3').appendTo('.imgGroup');
    });


    // $('#next2').click(function(){
    //     window.location.href = 'index_shop.html';
    // });

});