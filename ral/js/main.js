$(document).ready(function () {
// full-page plugin
    if($('html').width() >= 1200) {
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
            slideSelector: '.no-slide',
            verticalCentered: false,
            // responsiveWidth: 1200,
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        });
    }


// modal-call
    $('#order').click(function () {
        $('.modal, .close-modal, .modal-overlay').fadeIn(250);
    });
    $('.modal-overlay, .close-modal').click(function () {
        $('.modal, .modal-overlay').fadeOut(250);
    });
});