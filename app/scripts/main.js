// Slick slider
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
const header_toggle = document.querySelector(".header-toggle");
const header_menu = document.querySelector(".header-menu");

header_toggle.addEventListener("click", function () {
  header_menu.classList.add("is-expand");
});

window.addEventListener("click", function (e) {
  if (!header_toggle.contains(e.target) && !header_menu.contains(e.target)) {
    header_menu.classList.remove("is-expand");
  }
});
