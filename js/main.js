//cards slider
(function ($) {
  "use strict";
  jQuery(document).ready(function ($) {
      $(function () {
          var owl = $(".courses-sliders").owlCarousel({
              loop: false,
              margin: 25,
              autoplay: false,
              autoplayHoverPause: true,
              nav: true,
              dots: false,
              animateIn: "fadeIn",
              animateOut: "fadeOut",
              navText: ["<img src='./img/left-arrow-white.png'>", "<img src='./img/right-arrow-white.png'>"],
              responsive: {
                  0: {
                      items: 1,
                  },
                  600: {
                      items: 3,
                  },
                  1000: {
                      items: 4,
                  },
              },
          });

          //cards-images-for-courses
          $(".course-image-card").each(function () {
              var courseimg = $(this).data("courseimage");
              $(this).css("background-image", "url(" + courseimg + ")");
          });
          $(".random-courses-block").on("click", ".course-title-top", function (e) {
              var randomcourses = $(this).data("filter");
              if ($(this).hasClass("active-course-title")) return;
              $(this).addClass("active-course-title").siblings().removeClass("active-course-title");
              owl.owlFilter(randomcourses, function (_owl) {
                  $(_owl).find(".item").each(owlAnimateFilter);
              });
          });
      });
  });

  jQuery(window).load(function () {});

  var headermain = $("header nav > ul").clone();
  var mobileleftmenu = $(".mobile-menu nav");
  mobileleftmenu.append(headermain);
  if ($(mobileleftmenu).find(".header-sub-menu ").length != 0) {
      $(mobileleftmenu).find(".header-sub-menu ").parent().append('<i class="fas fa-chevron-down d-flex align-items-center"></i>');
  }

  var mobileleftmenulist = $(".mobile-menu nav > ul > li > i");
  $(mobileleftmenulist).on("click", function () {
      if (!$(this).siblings(".header-sub-menu ").hasClass("d-block")) {
          $(this).siblings(".header-sub-menu ").addClass("d-block");
      } else {
          $(this).siblings(".header-sub-menu ").removeClass("d-block");
      }
  });

  $(".mobile-menu-close").on("click", function () {
      if (!$(".mobile-menu-close").hasClass("closemenu")) {
          $(".mobile-menu-close").addClass("closemenu");
      } else {
          $(".mobile-menu-close").removeClass("closemenu");
      }
  });

  $(".mobile-menu-close").on("click", function () {
      if (!$(".mobile-menu").hasClass("showmenu")) {
          $(".mobile-menu").addClass("showmenu");
      } else {
          $(".mobile-menu").removeClass("showmenu");
      }
  });

  //cards-slider-filters
  
jQuery.fn.owlRemoveItem = function(num) {
	var course_item = jQuery(this).data('owlCarousel');
	
	course_item._items = jQuery.map(course_item._items, function(data, index) {
		if(index != num) return data;
	})

	jQuery(this).find('.owl-item').eq(num).remove();
}

jQuery.fn.owlFilter = function(data, callback) {
	var owl = this,
	course_item = jQuery(owl).data('owlCarousel'),
		$elemCopy = jQuery('<div>').css('display', 'none');
	if(typeof(jQuery(owl).data('courseitem_data')) == 'undefined') {
		jQuery(owl).find('.owl-item:not(.cloned)').clone().appendTo($elemCopy);
		jQuery(owl).data('courseitem_data', $elemCopy);
	}else {
		$elemCopy = jQuery(owl).data('courseitem_data');
	}
	owl.trigger('replace.owl.carousel', ['<div/>']);
	
	switch(data){
		case '*': 
			$elemCopy.children().each(function() {
				owl.trigger('add.owl.carousel', [jQuery(this).clone()]);
			})
			break;
		default: 
			$elemCopy.find(data).each(function() {
				owl.trigger('add.owl.carousel', [jQuery(this).parent().clone()]);
			})
			break;
	}
	owl.owlRemoveItem(0);
	owl.trigger('refresh.owl.carousel').trigger('to.owl.carousel', [0]);
	if(callback) callback.call(this, owl);
}
})(jQuery);
