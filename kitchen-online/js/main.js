"use strict";$(window).on("load",function(){$(".preloader").removeClass("preloader_active"),$("html").css("overflow","auto")});const menu=$("#header").outerHeight();function onScroll(){const e=$(document).scrollTop();$(".header__menu a").each(function(){const s=$(this).attr("href");$(s).position().top-menu<e?($(".header__menu a.is_active").removeClass("is_active"),$(this).addClass("is_active")):e+$(window).outerHeight()===$(document).outerHeight()&&($(".header__menu a.is_active").removeClass("is_active"),$(".header__menu li:last-child a").addClass("is_active"))})}$(".header__menu li:first-child a").addClass("is_active"),$(document).on("scroll",onScroll),$(".header__menu a").on("click",function(e){e.preventDefault(),$(document).off("scroll"),$(".header__menu .is_active").removeClass("is_active"),$(this).addClass("is_active");const s=$(this).attr("href"),i=$(s);$("html, body").animate({scrollTop:i.offset().top-menu+1},300,function(){$(document).on("scroll",onScroll)})}),$(".header__trigger").on("click",function(){const e=$(".header__menu"),s=$(this);e.hasClass("slideInLeft")?(e.removeClass("slideInLeft"),e.addClass("slideOutLeft"),s.removeClass("header__trigger_active")):(e.removeClass("slideOutLeft"),e.addClass("slideInLeft"),s.addClass("header__trigger_active"))}),$(document).ready(function(){$(".accordion > li:eq(0) .accordion__question").addClass("accordion__question_active").next().slideDown(),$(".accordion__question").click(function(e){let s=$(this).closest("li").find(".accordion__answer");$(".accordion").find(".accordion__answer").not(s).slideUp(),$(this).hasClass("accordion__question_active")?$(this).removeClass("accordion__question_active"):($(this).closest(".accordion").find(".accordion__question_active").removeClass("accordion__question_active"),$(this).addClass("accordion__question_active")),s.stop(!1,!0).slideToggle(),e.preventDefault()}),$(".producers__slider").slick({slidesToShow:5,infinite:!0,arrows:!1,variableWidth:!0,pauseOnFocus:!0,pauseOnHover:!0,autoplay:!0,speed:400,autoplaySpeed:3e3,responsive:[{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:1}}]}),$(window).on("load resize",function(){$(window).width()<769?$(".steps__container").not(".slick-initialized").slick({slidesToShow:1,infinite:!1,nextArrow:'<div class="arrow arrow_next"></div>',prevArrow:'<div class="arrow arrow_prev"></div>'}):$(".steps__container").hasClass("slick-initialized")&&$(".steps__container").slick("unslick")});let e=1;$(window).on("scroll",function(){let s=$(window).scrollTop();$(".title").each(function(){$(this).offset().top<s+800&&$(this).addClass("fadeIn").css("opacity",1)}),$(".features__item:nth-child(even)").each(function(){$(this).offset().top<s+500&&$(this).addClass("slideInRight").css("opacity",1)}),$(".features__item:nth-child(odd)").each(function(){$(this).offset().top<s+500&&$(this).addClass("slideInLeft").css("opacity",1)}),$(".products__card:nth-child(even)").each(function(){$(this).offset().top<s+500&&$(this).addClass("slideInRight").css("opacity",1)}),$(".products__card:nth-child(odd)").each(function(){$(this).offset().top<s+500&&$(this).addClass("slideInLeft").css("opacity",1)}),$(".accordion li").each(function(){$(this).offset().top<s+700&&$(this).addClass("slideInUp").css("opacity",1)}),$(".steps__item").each(function(){let i=$(this).offset().top,t=$(this);i<s+700&&(setTimeout(function(){t.addClass("bounceIn").css("opacity",1)},400*e),e++)})})});