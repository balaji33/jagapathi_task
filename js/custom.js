//mobile menu js
$(".menu-toggle").click(function () {
  $(".top-menus").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});
//header animation
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $("#header").addClass("nav-fixed");
  } else {
    $("#header").removeClass("nav-fixed");
  }
});

//header-links-change-add-class
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $("#header-menus").addClass("header-links-change");
  } else {
    $("#header-menus").removeClass("header-links-change");
  }
});

//mobile-menu
$(document).ready(function () {
  $(".header-menus li").hover(
    function () {
      $(this).children("ul").slideDown("fast");
    },
    function () {
      $("ul", this).slideUp("fast");
    }
  );
  $(".hamburger-menu").click(function () {
    $(".bar-1, .bar-2, .bar-3").toggleClass("open");
    $(".header-menus").slideToggle("fast");
  });
});

//slider-categories
jQuery(document).ready(function ($) {
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //live classes-slider
  $(".live-classes-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // top-courses-categories
  $(".categories-block-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    rows: 2,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});



//demo-video-popup
$(document).ready(function () {
  // get video source from data-src button
  var $videoSrc;
  $(".demo-video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  // autoplay video on modal load
  $("#videomodal").on("shown.bs.modal", function (e) {
    // youtube iframe configuration and settings
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&rel=0&controls=1&loop=1&modestbranding=1"
    );
  });
  // stop playing the youtube video when modal closed
  $("#videomodal").on("hide.bs.modal", function (e) {
    // stop video
    $("#video").attr("src", $videoSrc);
  });
});

//Fixed-element-when-scroll
$(window).scroll(function (e) {
  var $el = $(".fixedElement");
  var isPositionFixed = $el.css("position") == "fixed";
  if ($(this).scrollTop() > 200 && !isPositionFixed) {
    $el.css({ position: "sticky  ", top: "0px" });
  }
  if ($(this).scrollTop() < 200 && isPositionFixed) {
    $el.css({ position: "static", top: "0px" });
  }
});

//remove active-class
$("body").on("click", "li", function () {
  $("li.active").removeClass("active");
  $(this).addClass("active");
});

//about-arkmedis-counting
var a = 0;
$(window).scroll(function () {
  var oTop = $("#about-counting").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".count-number").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    a = 1;
  }
});

//login-block-popup
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('credentials-main-block');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

//back-to-top
var btn = $('#button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});





  // Mobile menu dropdown
  $(".submenu").on("click", function() {
    var width = $(window).width();
    if (width < 992) {
      $(".submenu ul").toggleClass("active");
    }
  });

  