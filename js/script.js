/*
Animation library
https://github.com/graingert/wow
https://wowjs.uk/docs.html
*/
$(function () {
    new WOW().init();
    $(window).on('load', function () {
        // $("#loader").hide();
        setTimeout(function () {
            $("#loader").fadeOut();
        }, 1500);
    });
    //parallax effect for banner
    if ($('#parallax').length) {
        (function () {
            var posY;
            var image = document.getElementById('parallax');;
            function paralax() {
                posY = window.pageYOffset;
                image.style.top = posY * 0.6 + 'px';
            }
            window.addEventListener('scroll', paralax);
        })();
    }
    jQuery(document).ready(function ($) {
        $(window).on('load resize scroll', function () {
            var header = $('header.mainHeader nav.navbar');
            var header_Height = header.outerHeight() + 10;
            if (getScrollTop() > header_Height) {
                $('body').addClass('headerSticky');
                $(header).addClass('sticky');
            } else {
                $('body').removeClass('headerSticky');
                $(header).removeClass('sticky');
            }
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
    var fixedFooter = '.footer-fixed';
    var content = '.content';
    var fixedFooter = '.footer-fixed';
    var footer = '.footer';
    if ($('body').hasClass('mobile')) return false;
    var footerHeight = $(fixedFooter).outerHeight();
    var footerClass = fixedFooter.split('.').join('');
    var footerThreshold;
    var contentTop = $(content).offset().top;
    if ($(footer).hasClass(footerClass)) $(content).addClass('reveal-footer');
    $(window).on('scroll', function () {
        footerHeight = $(fixedFooter).outerHeight();
        updateContent();
    });
    $(window).on('resize', function () {
        footerHeight = $(fixedFooter).outerHeight();
        updateContent();
    });
    function updateContent() {
        if ($(footer).hasClass(footerClass) && $(window).width() > 960) $(content).css({ marginBottom: footerHeight + 'px' });
        if ($(footer).is('[data-animate-reveal]')) {
            footerThreshold = ($(content).outerHeight() + contentTop) - $(window).scrollTop();
            if (footerThreshold <= $(window).height() && $(window).width() > 960) {
                $(content).addClass('animate-content');
            } else {
                $(content).removeClass('animate-content');
            }
        }
    }
    updateContent();
    // Instagram feed Widget
    if ($('#instafeed').length) {
        var feed = new Instafeed({
            get: 'user',
            userId: 3416118500,
            accessToken: '3416118500.1677ed0.6dc7b7deb32c4f8f91a0552f637bc256',
            limit: '8',
            resolution: 'low_resolution',
            template: '<a href="{{link}}"><img src="{{image}}" /><div class="instagram-content"><span><i class="fa fa-heart icon-heart"></i> {{likes}}</span><span><i class="fa fa-comment icon-bubble"></i> {{comments}}</span></div></a>',
            after: function () {
                var owl = $('.owl2row-plugin');
                owl.owlCarousel({
                    loop: true,
                    margin: 1,
                    navText: ['', ''],
                    nav: false,
                    dots: false,
                    owl2row: 'true',
                    owl2rowTarget: 'item',
                    owl2rowContainer: 'owl2row-item',
                    owl2rowDirection: 'utd',
                    autoplay: true,
                    autoplayTimeout: 2500,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        480: {
                            items: 4
                        },
                        768: {
                            items: 4
                        },
                        980: {

                            items: 5

                        },
                        1200: {
                            items: 6
                        }
                    }
                });
                external();
            },
        });
        feed.run();
        function external() {
            jQuery(document).ready(function ($) {
                $('#instafeed a').attr('target', '_blank');
            });
        }
    }
    var owl = $('.mainslider');
    owl.owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 1,
        items: 1,
        navText: ['', ''],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false
    });
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
        $(".filter-button").addClass('active');
        $(this).removeClass('active');
        if (value == "all") {
            $('.filter').fadeIn();
        }
        else {
            $(".filter").not('.' + value).fadeOut();
            $('.filter').filter('.' + value).fadeIn();
        }
    });

    if ($('.profileImgSlider').length) {
        var owl = $('.profileImgSlider');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 1,
            navText: ['', ''],
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true
        });
    }


});

var main = function () {
    var typeWriterText = $('.typeWriter .text');
    function typeWriter(text, n) {
        if (n < (text.length)) {
            $(typeWriterText).html(text.substring(0, n + 1));
            n++;
            setTimeout(function () {
                typeWriter(text, n)
            }, 200);
        }
    }
    var text = $(typeWriterText).data('text');
    typeWriter(text, 0);
};

setTimeout(function () {
    $(document).ready(main);
}, 3000);
