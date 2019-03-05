$(document).ready(function () {

    var url = window.location.href;
    var idTab = url.substring(url.length - 5, url.length);
    var child = url.substring(url.length - 1, url.length);
    if (window.location.href.search(idTab) >= 1) {
        let currentHref = window.location.href;
        let tabId = currentHref.substring(currentHref.length - 1, currentHref.length);
        $('.canhcam-nav-4 .nav-item a').eq(tabId - 1).trigger('click');
        try {
            $('html,body').animate({
                scrollTop: $('.canhcam-nav-4 .nav-lists').offset().top - $('.canhcam-header-8').outerHeight()
            }, 700);
        } catch (error) {
        }
    }
    $('header .navbar-nav .nav-item.dropdown .dropdown-menu .dropdown-item').on('click', function () {
        let currentHref = $(this).attr('href');
        let tabId = currentHref.substring(currentHref.length - 1, currentHref.length);
        $('.canhcam-nav-4 .nav-item a').eq(tabId - 1).trigger('click');
        try {
            $('html,body').animate({
                scrollTop: $('.canhcam-nav-4 .nav-lists').offset().top - $('.canhcam-header-8').outerHeight()
            }, 700);
        } catch (error) {
        }
    });

    $('.navbar-collapse').find('a.nav-link').eq(2).on('click', function (e) {
        e.preventDefault();
        let url = $(this).attr('href') + "#tab1";
        window.location.href = url;
    })
})