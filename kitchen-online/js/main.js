"use strict";$(window).on("load",function(){$(".preloader").removeClass("preloader_active"),$("html").css("overflow","auto")}),$(".header__trigger").on("click",function(){const s=$(".header__menu"),e=$(this);s.hasClass("slideInLeft")?(s.removeClass("slideInLeft"),s.addClass("slideOutLeft"),e.removeClass("header__trigger_active")):(s.removeClass("slideOutLeft"),s.addClass("slideInLeft"),e.addClass("header__trigger_active"))}),$(document).ready(function(){$(".accordion > li:eq(0) .accordion__question").addClass("accordion__question_active").next().slideDown(),$(".accordion__question").click(function(s){let e=$(this).closest("li").find(".accordion__answer");$(".accordion").find(".accordion__answer").not(e).slideUp(),$(this).hasClass("accordion__question_active")?$(this).removeClass("accordion__question_active"):($(this).closest(".accordion").find(".accordion__question_active").removeClass("accordion__question_active"),$(this).addClass("accordion__question_active")),e.stop(!1,!0).slideToggle(),s.preventDefault()}),$(".producers__slider").slick({slidesToShow:4,infinite:!1,nextArrow:'<div class="arrow arrow_next"></div>',prevArrow:'<div class="arrow arrow_prev"></div>',responsive:[{breakpoint:1201,settings:{slidesToShow:3}},{breakpoint:993,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),$(".steps__container").slick({slidesToShow:1,infinite:!1,nextArrow:'<div class="arrow arrow_next"></div>',prevArrow:'<div class="arrow arrow_prev"></div>',mobileFirst:!0,responsive:[{breakpoint:769,settings:"unslick"}]});let s=1;$(window).on("scroll",function(){let e=$(window).scrollTop();$(".title").each(function(){$(this).offset().top<e+800&&$(this).addClass("fadeIn").css("opacity",1)}),$(".features__item:nth-child(even)").each(function(){$(this).offset().top<e+500&&$(this).addClass("slideInRight").css("opacity",1)}),$(".features__item:nth-child(odd)").each(function(){$(this).offset().top<e+500&&$(this).addClass("slideInLeft").css("opacity",1)}),$(".products__card:nth-child(even)").each(function(){$(this).offset().top<e+500&&$(this).addClass("slideInRight").css("opacity",1)}),$(".products__card:nth-child(odd)").each(function(){$(this).offset().top<e+500&&$(this).addClass("slideInLeft").css("opacity",1)}),$(".accordion li").each(function(){$(this).offset().top<e+700&&$(this).addClass("slideInUp").css("opacity",1)}),$(".steps__item").each(function(){let i=$(this).offset().top,t=$(this);i<e+700&&(setTimeout(function(){t.addClass("bounceIn").css("opacity",1)},400*s),s++)})})});