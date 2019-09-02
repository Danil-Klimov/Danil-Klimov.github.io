$(document).ready(function () {
// sub menu open
    $('.sub-menu-link').click(function(j) {
        let subMenu = $('.sub-menu');
        let dropDown = $(this).closest(subMenu).find('.sub-menu-body');

        $(this).closest(subMenu).find('.sub-menu-body').not(dropDown).slideUp();

        if (subMenu.hasClass('active-sub')) {
            subMenu.removeClass('active-sub');
            $('.icon-chevron-right').css('transform', 'rotate(0)');
        } else {
            subMenu.addClass('active-sub');
            $('.icon-chevron-right').css('transform', 'rotate(90deg)');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

// accordion
    $('.accordion > li:eq(0) div').addClass('active').next().slideDown();

    $('.accordion div').click(function(j) {
        let dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('div.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

// currency-list
    $.fn.currency = function() {
        var currency_list = $('.currency-list');

        if($(window).width() <= '1199'){
            currency_list.click(function () {
                $(this).children('li:not(.init)').toggleClass('show-trigger');
            });

            currency_list.on("click", "li:not(.init)", function() {
                $(this).closest('.currency-list').children('li').removeClass('active-currency');
                $(this).addClass('active-currency');
                $(this).closest('.currency-list').children('.init').html($(this).html());
                $("html, body").animate({
                    scrollTop: $("body").offset().top
                },0);
            });
        } else {
            currency_list.on("click", "li", function() {
                $(this).closest('.currency-list').children('li').removeClass('active-currency');
                $(this).addClass('active-currency');
            });
        }
    };

    $('.currency-list').currency();

//Menu trigger
    $('.menu-trigger').click(function () {
        $('.menu').slideToggle(600);
    });
    $('.close-trigger').click(function () {
        $('.menu').slideToggle(600);
    });

// SVG
    svg4everybody();
});