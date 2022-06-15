$(function () {
  // Vars

  let header = $("#header");
  let introH = $("#intro").innerHeight();
  let scrollOffset = $(window).scrollTop();

  // Fixed Header

  checkScroll(scrollOffset);

  $(window).on("scroll load resize", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let blockId = $this.data("scroll");
    let blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html,body").animate(
      {
        scrollTop: blockOffset - 30,
      },
      600
    );
  });

  // Burger toggle
  $("#nav__toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });
  // Burger collapse

  $(".nav__link,  #header a").on("click", function (event) {
    event.preventDefault();
    $("#nav__toggle, #nav").removeClass("active");
  });

  // Accordion collapse
  $("[data-collapse]").on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let blockId = $this.data("collapse");
    $this.toggleClass("active");
  });

  // Slider
  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
  });
});
