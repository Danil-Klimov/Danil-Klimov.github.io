!function(e){function s(s){for(var i,r,a=s[0],l=s[1],c=s[2],h=0,_=[];h<a.length;h++)r=a[h],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&_.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(d&&d(s);_.length;)_.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,s=0;s<n.length;s++){for(var t=n[s],i=!0,a=1;a<t.length;a++){var l=t[a];0!==o[l]&&(i=!1)}i&&(n.splice(s--,1),e=r(r.s=t[0]))}return e}var i={},o={0:0},n=[];function r(s){if(i[s])return i[s].exports;var t=i[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=i,r.d=function(e,s,t){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var i in e)r.d(t,i,function(s){return e[s]}.bind(null,i));return t},r.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=s,a=a.slice();for(var c=0;c<a.length;c++)s(a[c]);var d=l;n.push([124,1]),t()}({124:function(e,s,t){"use strict";t.r(s);t(125);var i=t(123),o=t.n(i),n=t(1),r=t.n(n);t(311);window.jQuery=r.a,t(312),t(313),t(122),t(314),r()(window).on("load",function(){r()(".preloader").removeClass("preloader_active"),r()("html").css("overflow","auto")}),r()(document).ready(function(){r()(window).on("scroll",function(){r()(this).scrollTop()?r()(".header").addClass("header__stuck"):r()(".header").removeClass("header__stuck")}).scroll(),r()(".header__trigger").on("click",function(){r()(this).toggleClass("header__trigger_active"),r()(".header__nav").slideToggle("",function(){"display: none;"===r()(this).attr("style")&&r()(this).attr("style","")})}),r()(window).on("scroll",function(){var e=r()(this).scrollTop(),s=r()(this).height()/3;r()(".js-scroll-section").each(function(t){r()(this).position().top<=e+s&&r()(".header__nav .menu__item").removeClass("menu__item_active").eq(t).addClass("menu__item_active")})}).scroll(),r()(".header__nav .menu__item").on("click",function(){r()(window).width()<1024&&r()(".header__trigger").trigger("click")}),r()(".js-scroll-to").on("click",function(e){e.preventDefault();var s=r()(this).attr("href"),t=r()(".header").height();r()(window).width()<1024?r()("html, body").animate({scrollTop:r()(s).offset().top-t},560):r()("html, body").animate({scrollTop:r()(s).offset().top},560)}),r()(".js-scheme-anchor").on("click",function(e){e.preventDefault();var s=r()(this).attr("href"),t=r()(this).hasClass("scheme__badge_active");r()(this).toggleClass("scheme__badge_active"),r()(".js-scheme-anchor").not(r()(this)).removeClass("scheme__badge_active"),r()(".scheme__tooltip").removeClass("scheme__tooltip_active"),t||r()(s).addClass("scheme__tooltip_active")}),r()(".js-description-image-selector select").customSelect(),r()(".js-description-image-selector select").on("change",function(){var e=r()(this).val();r()(e).addClass("select__img_active").siblings().removeClass("select__img_active")}).change(),r()(".js-description-table-scroller").mCustomScrollbar(),r()("[data-fancybox]").fancybox({lang:"ru",i18n:{ru:{CLOSE:"Закрыть",NEXT:"Следующий слайд",PREV:"Предыдущий слайд",ERROR:"Возникла ошибка при загрузке страницы.<br>Пожалуйста, попробуйте позже.",PLAY_START:"Начать показ",PLAY_STOP:"Приостановить показ",FULL_SCREEN:"Полноэкранный режим",THUMBS:"Превью"}}}),r()(".features__items").on("init reInit afterChange",function(e,s,t,i){var o=(t||0)+1;r()("#features_counter").html("0".concat(o," / 0").concat(s.slideCount))}),r()(".features__items").slick({arrows:!1,mobileFirst:!0,slidesToShow:1,speed:360,zIndex:111,responsive:[{breakpoint:1023,settings:"unslick"}]}),r()(".products__items").on("init reInit afterChange",function(e,s,t,i){var o=(t||0)+1;r()("#products_counter").html("0".concat(o," / 0").concat(s.slideCount))}),r()(".products__items").slick({arrows:!1,mobileFirst:!0,slidesToShow:1,speed:360,zIndex:111,adaptiveHeight:!0,responsive:[{breakpoint:1023,settings:"unslick"}]}),r()(".js-slider-next").on("click",function(e){e.preventDefault();var s=r()(this).attr("href");r()(s).slick("slickNext")}),r()(".js-slider-prev").on("click",function(e){e.preventDefault();var s=r()(this).attr("href");r()(s).slick("slickPrev")}),r()(".gallery__slider").on("init reInit afterChange",function(e,s,t,i){var o=(t||0)+1;r()("#gallery_counter").html("0".concat(o," / 0").concat(s.slideCount))}),r()(".gallery__slider").slick({slidesToShow:1,arrows:!1,infinite:!1,draggable:!1,swipe:!1,responsive:[{breakpoint:1024,settings:{swipe:!0,infinite:!0}}]}),r()(".gallery__thumb-slide").on("click",function(){var e=r()(this);r()(".gallery__thumb-slide").removeClass("gallery__thumb-slide_active"),e.addClass("gallery__thumb-slide_active"),r()(".gallery__slider").slick("slickGoTo",e.index())}),o()()})},313:function(e,s){var t;(t=jQuery).fn.customSelect=function(e){this.each(function(){var e=t(this),s=t('<div class="cs-box"></div>'),i=t('<div class="cs-box__toggle"></div>'),o=t('<div class="cs-box__dropdown"></div>'),n=t('<div class="cs-box__options"></ul>');s.append(i),e.is(":disabled")&&s.addClass("is-disabled"),e.children("option").each(function(){var e=t('<div class="cs-box__option" data-val="'+t(this).val()+'">'+t(this).html()+"</div>");t(this).is(":disabled")&&(e.addClass("is-disabled"),t(this).is(":selected")&&s.children("div").addClass("is-placeholding")),n.append(e)}),o.append(n),s.append(o),e.after(s).hide();var r=0;if(e.children("option:selected").length&&(r=e.prop("selectedIndex")),i.html(n.children(".cs-box__option").eq(r).html()),n.children(".cs-box__option").eq(r).addClass("is-active"),e.children("option").eq(r).prop("selected",!0),i.on("click",function(){if(s.hasClass("is-disabled"))return!1;i.hasClass("is-active")?(t(".cs-box").removeClass("is-focused"),t(".cs-box__toggle").removeClass("is-active"),t(".cs-box__dropdown").removeClass("is-opened")):(t(".cs-box").removeClass("is-focused"),t(".cs-box__toggle").removeClass("is-active"),t(".cs-box__dropdown").removeClass("is-opened"),s.addClass("is-focused"),i.addClass("is-active"),o.addClass("is-opened"))}),n.children(".cs-box__option").on("click",function(){if(e.children("option").eq(t(this).index()).is(":disabled"))return!1;t(this).addClass("is-active").siblings(".cs-box__option").removeClass("is-active"),s.removeClass("is-focused"),i.html(t(this).html()).removeClass("is-active is-placeholding"),o.removeClass("is-opened"),e.children("option").eq(t(this).index()).prop("selected",!0),e.trigger("change")}),Boolean(e.data("filter"))){var a=t('<div class="cs-box__filter"></div>'),l=t('<input type="text" placeholder="'+e.data("placeholder")+'">');a.append(l),o.prepend(a),l.on("input propertychange",function(){var e=t.trim(l.val().toLowerCase());""!=e?n.children(".cs-box__option:not(.is-disabled)").each(function(){t(this).html().toLowerCase().indexOf(e)?t(this).hide():t(this).show()}):n.children(".cs-box__option:not(.is-disabled)").each(function(){t(this).show()})})}}),t(document).on("click",function(e){t(e.target).parents(".cs-box").length||(t(".cs-box").removeClass("is-focused"),t(".cs-box__toggle").removeClass("is-active"),t(".cs-box__dropdown").removeClass("is-opened"))})}}});
//# sourceMappingURL=main.js.map