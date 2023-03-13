$(document).ready(function(){

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        prevArrow: '<span class="prev_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fa-solid fa-arrow-left"></i></span>' 
      });     
});



function onEntry(entry) {
  entry.forEach(change => {
    if(change.isIntersecting) {
      change.targer.classList.add('element-show');
    }
  })
}

let options = {
  threshold: [0.5]};

  let observer = new
  IntersectionObserver(onEntry, options);
  let element = 
  document.querySelectorAll('.element-animation');

  for (let elm of elements) {
    observer.observe(elm);
  }