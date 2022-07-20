let slideIndex = 1;
let carouselInterval = undefined;

// Next/previous controls
function incrSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function setSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = $(".carousel-slide");
  let dots = $(".carousel-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    $(slides[i])
      .css("display", "none")
      .removeClass("animate__animated animate__fadeIn");
  }
  const visibleSlide = $(slides[slideIndex - 1]);
  visibleSlide
    .addClass("animate__animated animate__fadeIn")
    .css("display", "block");
  if (dots.length > 0) {
    for (i = 0; i < dots.length; i++) {
      $(dots[i]).removeClass("carousel-active");
    }
    $(dots[slideIndex - 1]).addClass("carousel-active");
  }
}

// Startup
$(function () {
  // populate events
  $(".carousel-next").on("click", function () {
    clearInterval(carouselInterval);
    incrSlides(+1);
  });
  $(".carousel-prev").on("click", function () {
    clearInterval(carouselInterval);
    incrSlides(-1);
  });
  // populate dots
  const slides = $(".carousel-slide").length;
  for (let i = 0; i < slides; i++) {
    $(".carousel-dots").append(
      $("<div></div>")
        .addClass("carousel-dot")
        .on("click", function () {
          setSlide(i + 1);
          clearInterval(carouselInterval);
        })
    );
  }
  // Show first slide
  showSlides(slideIndex);
  // carousel autoplay
  carouselInterval = setInterval(function () {
    incrSlides(+1);
  }, 10_000);
});
