window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
};
$(document).ready(function() {

    var a = setTimeout(function() {
        $.fancybox.open({
            src: "#free"
        });
    }, 20000);
    $("[data-src]").on("click", function() {
        clearTimeout(a);
    });


    $(".input_phone").mask("+99 (999) 999-99-99", {
        translation: {
            9: {
                pattern: /[0-9]/
            }
        }
    });
    $(".input_phone").focusin(function() {
        0 === $(this).val().length && $(this).val("+38 (0");
    });
    $(".input_phone").focusout(function() {
        $(this).val().length < 7 && $(this).val("");
    });


    $('.modal__form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "../mailer/form.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find(".user_name, .user_phone").val("");

            $('.modal__form').trigger('reset');
            $('.thanks').fadeIn('fast');
            $.fancybox.close();
            setTimeout(function() {
                $(".thanks").fadeOut("slow");
            }, 2500);

        });
        return false;
    });


    $(function() {
        $('ul.calculation__list').on('click', 'li:not(.calculation__item_active)', function() {
            $(this)
                .addClass('calculation__item_active').siblings().removeClass('calculation__item_active')
                .closest('div.calculation__tabs').find('div.calculation__content').removeClass('calculation__content_active').eq($(this).index()).addClass('calculation__content_active');
        });

        $('.calculation__item a.btn.btn_white').on("click.smoothscroll", function(e) {
            e.preventDefault();
        });
    });


    $('.gallery__carousel').slick({
        infinite: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<div class="gallery__arrow gallery__arrow_left"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>',
        nextArrow: '<div class="gallery__arrow gallery__arrow_right"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></div>',
        accessibility: false,
        focusOnSelect: false,
        appendDots: ".gallery__dots",
        dotsClass: "dot",
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.slick-slide.slick-active').eq(3).css({ "opacity": "0.3", "pointer-events": "none" });

    function opacity() {
        $('.slick-slide.slick-active').css({ "opacity": "1", "pointer-events": "unset" });
        $('.slick-slide.slick-active').eq(3).css({ "opacity": "0.3", "pointer-events": "none" });
    }
    $('.gallery__arrow_right, .gallery__arrow_left, ul li').click(opacity);
});