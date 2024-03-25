// external js: flickity.pkgd.js

var $carousel = $('.carousel').flickity({
  imagesLoaded: true,
  percentPosition: false,
});

var $imgs = $carousel.find('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';
// get Flickity instance
var flkty = $carousel.data('flickity');

$carousel.on( 'scroll.flickity', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = $imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});
function open_close_PTG(){
  if (document.getElementById("PTG-container").style.display == "flex") {
      document.getElementById("PTG-container").style.display = "none";
  }
  else{
    if(document.getElementById("TTD-container").style.display == "flex"){
      document.getElementById("TTD-container").style.display = "none";}
      document.getElementById("PTG-container").style.display = "flex";
  }
};
function open_close_TTD(){
  if (document.getElementById("TTD-container").style.display == "flex") {
      document.getElementById("TTD-container").style.display = "none";
  }
  else{
    if(document.getElementById("PTG-container").style.display == "flex"){
      document.getElementById("PTG-container").style.display = "none";}
      document.getElementById("TTD-container").style.display = "flex";
  }
};