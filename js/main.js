document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('.navbar')
    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }
    window.addEventListener('scroll', addShadow)

    // skrypt naprawiający nawigację (zamyka się po kliknięciu w cokolwiek)
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
        });

    // slickJS
        $('.team-carousel').slick({
            autoplay: true,
            autoplaySpeed: 3500,
            mobileFirst: true,
            slidesToShow: 1,
            responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 3500,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 3500,
                    slidesToShow: 3
                }
            }
            ]
        });
    

});