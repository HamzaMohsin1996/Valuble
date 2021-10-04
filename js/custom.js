// Custom JS

/*
 * @author: Hamza Mohsin
 */
// Custom Drop Down

$(document).ready(function () {
  
  $("#dropDown").click(function () {
    $(".drop-down").toggleClass("drop-down--active");
  });

  $(".fav-btn").click(function () {
    $(this).toggleClass("active-completed");
  });
  $(".fav-items").click(function () {
    $(this).toggleClass("active-completed");
  });
  $(".comment-btn").click(function () {
    $(".comments-wrapper").toggleClass("completed-show");
  });
  $("#nav-icon2").click(function () {
    $(this).toggleClass("open");
    $(".sidebar-mobile").toggleClass("active");
  });
  $(".like").click(function () {
    $(this).toggleClass("active");
  });
  $(".view-more .custom-link-blk").click(function () {
    $(".view-more-p").toggleClass("active");
  });

$("select").change(function () {
    $('#category').css('color', "black");
});
  
  
  $(".mypost").click(function () {
    $(this).toggleClass("active");
  });
  $(".collection-items-details").click(function () {
    $(this).find(".collection-details-img").toggleClass("active");
  });
  $(".image-profile-upload-more .custom-black-button").click(function () {
    $(".view-more-images-wrap").toggleClass("active");
  });

  $('[data-toggle="tooltip"]').tooltip();

  $(".feature-categories.owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      320: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  $(".related-articles-wrap-inner.owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      320: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".interest-wrap").owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 5000,
        autoplayHoverPause: true,
  });

  new WOW().init();
});

//Date Picker Js
$(function () {
  $("#release-date")
    .datepicker({
      autoclose: true,
      todayHighlight: true,
      onSelect: function (dateText, inst) {
        $("input[name='something']").val(dateText);
      },
    })
    .datepicker("update", new Date());
  $("#purchase-date")
    .datepicker({
      autoclose: true,
      todayHighlight: true,
    })
    .datepicker("update", new Date());
});
$(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});
$(function () {
  $("#datepicker-2").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});


function copyText() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}



// Slideshow Js
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex-1].sclassName += " active";
}
// End SlideShow Js

function readURL(input, id) {
  $(input).parent().parent().addClass('active');
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imageResult-" + id).attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

/*  ==========================================
  SHOW UPLOADED IMAGE NAME
* ========================================== */
var input = document.getElementById("upload");
var infoArea = document.getElementById("upload-label");

input.addEventListener("change", showFileName);
function showFileName(event) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = "File name: " + fileName;
}



