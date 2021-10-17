const swiperNavigation = new Swiper(".swiper-nav", {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        860: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        990: {
            slidesPerView: 3,
            spaceBetween: 500,
        },
    },
});

const pricingSwiper = new Swiper(".pricing-swiper", {
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }
});