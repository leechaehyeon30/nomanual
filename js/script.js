$(document).ready(function() {
    
    // 상단 이벤트 슬라이드 효과
    setInterval(function() {
        const $activeSlide = $('.slide.active');
        const $nextSlide = $activeSlide.next('.slide').length ? $activeSlide.next('.slide') : $('.slide').first();

        $activeSlide.removeClass('active');
        $nextSlide.addClass('active');
    }, 3000);

    // 메인비주얼 슬라이드 
    const slider = document.querySelector('.slider');
    const visualImages = document.querySelectorAll('.visual img');
    let visualCurrentIndex = 0; // 고유 인덱스
    let visualSlideInterval; // 슬라이드 자동 전환 인터벌

    function showVisualSlide(index) {
        const offset = -index * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    function nextVisualSlide() {
        visualCurrentIndex = (visualCurrentIndex < visualImages.length - 1) ? visualCurrentIndex + 1 : 0;
        showVisualSlide(visualCurrentIndex);
    }

    // 섹션 2 슬라이드
    const imgGroup = document.querySelector('.imgGroup');
    const imageElements = document.querySelectorAll('.imgGroup img');
    let imgGroupCurrentIndex = 0; // 고유 인덱스
    let imgSlideInterval; // 슬라이드 자동 전환 인터벌

    function showImgGroupSlide(index) {
        const offset = -index * 100; 
        imgGroup.style.transform = `translateX(${offset}%)`;
    }

    function nextImgGroupSlide() {
        imgGroupCurrentIndex = (imgGroupCurrentIndex + 1) % imageElements.length; 
        showImgGroupSlide(imgGroupCurrentIndex);
    }

    // 섹션 1 아이템 슬라이드
    const items = document.querySelectorAll('.item a');
    let itemCurrentIndex = 0; // 고유 인덱스

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = (window.innerWidth <= 470) ? (i === index ? 'block' : 'none') : 'block';
        });
    }

    function prevItem() {
        itemCurrentIndex = (itemCurrentIndex - 1 + items.length) % items.length;
        showItem(itemCurrentIndex);
    }

    function nextItem() {
        itemCurrentIndex = (itemCurrentIndex + 1) % items.length;
        showItem(itemCurrentIndex);
    }

    // 자동 슬라이드 시작 및 멈춤 함수
    function startVisualAutoSlide() {
        visualSlideInterval = setInterval(nextVisualSlide, 3000);
    }

    function stopVisualAutoSlide() {
        clearInterval(visualSlideInterval);
    }

    function startImgGroupAutoSlide() {
        imgSlideInterval = setInterval(nextImgGroupSlide, 3000);
    }

    function stopImgGroupAutoSlide() {
        clearInterval(imgSlideInterval);
    }

    // 창 너비 체크 및 슬라이드 시작/멈춤
    function checkWindowWidth() {
        if (window.innerWidth <= 470) {
            startVisualAutoSlide(); // 자동 슬라이드 시작
            startImgGroupAutoSlide(); // 섹션 2 슬라이드 자동 시작
            showItem(itemCurrentIndex); // 섹션 1 아이템 슬라이드 시작
        } else {
            stopVisualAutoSlide(); // 자동 슬라이드 멈춤
            stopImgGroupAutoSlide(); // 섹션 2 슬라이드 멈춤
            showItem(itemCurrentIndex); // 섹션 1 아이템을 항상 보이게
        }
    }

    // 버튼 클릭 이벤트 리스너 추가
    document.getElementById('prev').addEventListener('click', prevItem);
    document.getElementById('next').addEventListener('click', nextItem);

    // 초기 체크
    checkWindowWidth();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', checkWindowWidth);

    // 처음 슬라이드 표시
    showVisualSlide(visualCurrentIndex);
    showImgGroupSlide(imgGroupCurrentIndex);


    // 새창뜨기
    // let openWin;
    //     openWindow = window.open("index_openWin.html","_blank","toolbar=yes,scrollbars=yes,res izable=yes,top=200,left=200,width=600, height=600");

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