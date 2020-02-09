$(function() {

 // scroll-plugin
  $('body').niceScroll({
    cursorwidth: "10px",
     cursorcolor: "#FF9A00",
     zindex:'10000000000000000000000',
  });

  // background-image

var pageSection = $(".bg-img, section");
pageSection.each(function(indx){

    if ($(this).attr("data-background")){
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
});
// smooth-scroll
$.scrollIt({
  upKey: 38,                // key code to navigate to the next section
  downKey: 40,              // key code to navigate to the previous section
  easing: 'swing',          // the easing function for animation
  scrollTime: 600,          // how long (in ms) the animation takes
  activeClass: 'active',    // class given to the active nav element
  onPageChange: null,       // function(pageIndex) that is called when page is changed
  topOffset: 0            // offste (in px) for fixed top navigation
});

})
$(document).ready(function(){
  var owl = $('.header .owl-carousel');


// gallery-popup
  $('.gallery').magnificPopup({
      delegate: '.popimg',
      zoom:{
        enabled:true
      },
      type: 'image',
      gallery: {
          enabled: true
      }
  });

// carousel-slider
  $('.owl-carousel').owlCarousel({

    items: 1,
    loop:true,
    margin: 0,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:false,
    smartSpeed:200,
    dots:false,
});

// owl carousel
$('.Tesimonials .owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:1
})

// Aos effect
 AOS.init();

// gallery filter----------------------------------------------------------
 $('.gallery').isotope({
   // options
   itemSelector: '.box'
 });

 var gallery = $('.menu-Food').isotope({
   // options

 });

 $('.filter').on('click','li', function(){
   var filterValue = $(this).attr('data-filter');
   gallery.isotope({filter:filterValue})
 })


})



$(document).scroll(function(){


  var scrollDistance = $(window).scrollTop();


  // var item = $('.navbar-nav .nav-link');
  // var section = $('section');
  // if(item.hasClass('section.className')){
  //   console.log('true')
  // }
  // else{
  //   console.log('false')
  // }

  $('section').each(function(i){
    if($(this).position().top <= scrollDistance){
      $('.navbar-nav .Active').removeClass('Active');
      $('.navbar-nav .nav-link').eq(i).addClass('Active')
    }
  })

   if($(window).scrollTop() > 80) {
     $('.nav-custom').addClass('nav-scroll');
      $('.navbar-nav .nav-link').css({'color': '#FFF'})
   }
   else{
     $('.nav-custom').removeClass('nav-scroll');
      $('.navbar-nav .nav-link').css({'color': 'black'})
   }
})
