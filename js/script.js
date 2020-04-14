/*
Animation library
https://github.com/graingert/wow
https://wowjs.uk/docs.html
*/

$(function () {
    new WOW().init();
    //parallax effect for banner
    (function () {
        var posY;
        var image = document.getElementById('parallax');;
        function paralax() {
            posY = window.pageYOffset;
            image.style.top = posY * 0.9 + 'px';
        }
        window.addEventListener('scroll', paralax);
    })();

    jQuery(document).ready(function ($) {
        $(window).on('load resize scroll', function () {
            var header = $('header.mainHeader nav.navbar');
            var header_Height = header.outerHeight() + 10;
            console.log(header_Height);
            if (getScrollTop() > header_Height) {
                $('body').addClass('headerSticky');
                $(header).addClass('sticky');
            } else {
                $('body').removeClass('headerSticky');
                $(header).removeClass('sticky');
            }
        });
    });

    function getScrollTop() {
        if (typeof pageYOffset != 'undefined') {
            return pageYOffset;
        } else {
            var B = document.body;
            var D = document.documentElement;
            D = (D.clientHeight) ? D : B;
            return D.scrollTop;
        }
    }
});

