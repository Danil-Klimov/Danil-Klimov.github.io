$(document).ready(function () {
// full-page plugin
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        slideSelector: '.no-slide',
        responsiveWidth: 992,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5']
    });
    $(document).on('click', '#down', function () {
        $.fn.fullpage.moveTo('page2');
    });

//Menu and Call trigger
    $('.main-nav-trigger').click(function () {
        $('header .main-nav').slideToggle(600);
    });
    $('.main-nav .close').click(function () {
        $('header .main-nav').slideToggle(600);
    });
    $('.call-trigger').click(function () {
        $('header .call').slideToggle(600);
    });
    $('.call .close').click(function () {
        $('header .call').slideToggle(600);
    });

//sliders var
    let sliders = [$('.slick-slider'),
                   $('.main-slider'),
                   $('.photo-gallery-slider'),
                   $('.parking-slider'),
                   $('.office-page-slider')];

// main-slider init
    sliders[1].slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.photogallery-screen .slider-arrows',
        nextArrow: '<div class="r-arrow"></div>',
        prevArrow: '<div class="l-arrow"></div>',
    });
    sliders[1].on('init reInit afterChange', slider_count(sliders[1], $('.photogallery-screen .current')));

// photo-gallery-slider init
    sliders[2].slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        arrows: true,
        appendArrows: '.slider-arrows',
        nextArrow: '<div class="r-arrow"></div>',
        prevArrow: '<div class="l-arrow"></div>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                    adaptiveHeight: false
                }
            }
        ]
    }).magnificPopup({
        type: 'image',
        delegate: 'a:not(.slick-cloned)',
        gallery: {
            enabled: true
        },
        callbacks: {
            open: function() {
                let current = sliders[2].slick('slickCurrentSlide');
                sliders[2].magnificPopup('goTo', current);
            },
            beforeClose: function() {
                sliders[2].slick('slickGoTo', parseInt(this.index));
            }
        }
    });
    sliders[2].on('init reInit afterChange', slider_count(sliders[2], $('.photo-gallery .current')));

// parking-slider init
    sliders[3].slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        appendArrows: '.slider-arrows',
        nextArrow: '<div class="r-arrow"></div>',
        prevArrow: '<div class="l-arrow"></div>',
    });
    sliders[3].on('init reInit afterChange', slider_count(sliders[3], $('.parking .current')));

// office-page-slider init
    sliders[4].slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        appendArrows: '.office-card .slider-arrows',
        nextArrow: '<div class="r-arrow"></div>',
        prevArrow: '<div class="l-arrow"></div>'
    });
    sliders[4].on('init reInit afterChange', slider_count(sliders[4], $('.office-card .current')));

//Slider count init
    $('.current').html('0' + (sliders[0].slick("getSlick").currentSlide + 1));
    $('.count').html(' /0' + (sliders[0].slick("getSlick").slideCount));

//video
    videoSize();
    $(window).on('resize', function () {
        videoSize();
    });
    function videoSize() {
        // - 1.78 is the aspect ratio of the video
        // - This will work if your video is 1920 x 1080
        // - To find this value divide the video native width by the height eg 1920/1080 = 1.78
        let aspectRatio = 1.78;

        let video = $('.top-screen iframe');
        let videoHeight = video.outerHeight();
        let newWidth = videoHeight * aspectRatio;
        let halfNewWidth = newWidth / 2;

        video.css({"width": newWidth + "px", "left": "50%", "margin-left": "-" + halfNewWidth + "px"});
    }

// modal-table
    if($(window).width() > 767){
        $('tbody tr').click(function () {
            $('.office-rent-modal').css('top', '60px');
            $('.close-office, .office-rent-modal-overlay, .office-rent-modal-close').fadeIn(1);
            $('.current').html('0' + (sliders[4].slick("getSlick").currentSlide + 1));
            $('.count').html(' /0' + (sliders[4].slick("getSlick").slideCount));
        });
        $('.office-rent-modal-overlay, .close-office').click(function () {
            $('.office-rent-modal').css('top', '-99999px');
            $('.office-rent-modal-overlay, .office-rent-modal-close').fadeOut(1);
        });
    }
    else {
        $('tbody tr[data-href]').click(function () {
            window.location = $(this).attr('data-href');
        });
    }

// modal-call
    $('.call-request').click(function () {
        $('.call-request-modal, .close-modal, .call-request-modal-overlay').fadeIn(250);
    });
    $('.call-request-modal-overlay, .close-modal').click(function () {
        $('.call-request-modal, .call-request-modal-overlay').fadeOut(250);
    });
    $(".video-container").fitVids();
});

function slider_count(slider, container) {
    slider.on('afterChange', function () {
        container.html('0' + (slider.slick("getSlick").currentSlide + 1))
    });
}