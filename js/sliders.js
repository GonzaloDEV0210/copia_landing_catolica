const swiper_one = new Swiper('#slider_1', {
    loop: true,
    navigation: {
        nextEl: '.next_arrow',
        prevEl: '.prev_arrow',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

const swiper_two = new Swiper ('#slider_2', {
    loop: true,
    navigation: {
        nextEl: '.next_arrow_2',
        prevEl: '.prev_arrow_2',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    speed: 1500,
})