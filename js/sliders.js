const swiper_one = new Swiper('.swiper', {
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