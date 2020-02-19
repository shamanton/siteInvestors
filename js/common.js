var swiper = new Swiper('.swipper__card-carousel', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 300,
    nav: true,
    navigation: {
        nextEl: '.btn-card-next',
        prevEl: '.btn-card-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        1000: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }

});

var swiper = new Swiper('.investors-carousel', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 300,
    nav: true,
    navigation: {
        nextEl: '.btn-investor-next',
        prevEl: '.btn-investor-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        1000: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});