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
        delay: 4000,
        disableOnInteraction: false,
    },
    effect: 'flip',
    fadeEffect: {
        crossFade: true,
    },
    speed: 1500,
});

const swiper_trhee = new Swiper ('#slider_3', {
    effect: 'flip',
    flipEffect: {
        slideShadows: true,
        limitRotation: true,
    },
    speed: 1500,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.next_arrow_3',
        prevEl: '.prev_arrow_3',
    },
    breakpoints: {
        640: {
            effect: 'cards',
            cardsEffect: {
                slideShadows: false,
            },
        },
        768: {
            effect: 'flip',
            flipEffect: {
                slideShadows: false
            }
        }
    },
});

const swiper_four = new Swiper ('#slider_4', {
    speed: 1500,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    navigation: {
        nextEl: '.next_arrow_4',
        prevEl: '.prev_arrow_4',
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            effect: 'slide',
        },
        1536: {
            slidesPerView: 3,
        }
    },
});