$(function () {
// yandex maps
    ymaps.ready(init);
    let map,
        placemark;

    function init() {
        map = new ymaps.Map("map", {
            center: [55.791025, 37.461839],
            zoom: 16,
            controls: ['zoomControl']
        });
        placemark = new ymaps.Placemark([55.790931, 37.464985], {},
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/map-baloon.png',
                iconImageSize: [61, 58],
                iconImageOffset: [-45, -72]
            });
        map.geoObjects.add(placemark);
        map.behaviors.disable('scrollZoom');
    }
// jquery mask
    $("input[type='tel']").mask("+7(999)999-99-99");
// scroll
    $(".button-order").click(function(){
        let href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(href).offset().top+"px"});
        return false;
    });
});