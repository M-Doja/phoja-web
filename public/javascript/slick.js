var angle = 0;
function galleryspin(sign) {
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}


var selector = 'select option';

$(selector).on('click', function(){
  $(selector).removeClass('active');
  $(this).addClass('active');
});

// $(document).ready(function(){
//   $('.bxslider').bxSlider();
// });

// Carousel Auto-Cycle
  // $(document).ready(function() {
  //   $('.carousel').carousel({
  //     interval: 6000
  //   })
  // });
