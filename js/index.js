let bar = document.getElementById("bar")
bar.addEventListener('click', function(){
    let nav = document.getElementById('items');
    nav.classList.toggle('open');
})
var owl = $('.owl-carousel#members');
owl.owlCarousel({
    // items:3,
    loop:true,
    // margin:70,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
var owl = $('.owl-carousel#testimonials');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
});
let totop = document.getElementById('totop');
totop.addEventListener('click', function(){
    window.scrollTo(0,0);
})
