let owl = $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


$('#btn-left').click(function () {
    owl.trigger('next.owl.carousel')
});
$('#btn-right').click(function () {
    owl.trigger('next.owl.carousel')
});