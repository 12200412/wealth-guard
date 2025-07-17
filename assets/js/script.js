/**
 * Wealth Guard Insurance Agency - Custom JavaScript
 * Author: Claude
 * Version: 1.0
 */

$(document).ready(function () {
  $(document).on("submit", "form", function (event) {
    event.preventDefault();
    alert("Submitted");
  });

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top - 70,
      },
      800,
      "swing",
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#backToTop").addClass("show");
    } else {
      $("#backToTop").removeClass("show");
    }
  });

  $("#backToTop").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  $(window)
    .on("scroll", function () {
      var scrollDistance = $(window).scrollTop();

      $("section").each(function (i) {
        if ($(this).position().top <= scrollDistance + 100) {
          $(".navbar-nav a.active").removeClass("active");
          $(".navbar-nav a").eq(i).addClass("active");
        }
      });
    })
    .scroll();

  $(".carousel").carousel({
    interval: 5000,
  });

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      service: $("#service").val(),
      message: $("#message").val(),
    };

    showFormAlert(
      "success",
      "Thank you for contacting us! We will get back to you shortly.",
    );

    this.reset();
  });

  function showFormAlert(type, message) {
    var alertClass = "alert-success";

    if (type === "error") {
      alertClass = "alert-danger";
    }

    var alertElement = `
            <div class="alert ${alertClass} alert-dismissible fade show mt-3" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

    $("#contactForm").append(alertElement);

    setTimeout(function () {
      $(".alert").alert("close");
    }, 5000);
  }

  $(window).on("scroll", function () {
    $(".service-card, .feature-card, .testimonial-card").each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {
        $(this).addClass("animate__animated animate__fadeInUp");
      }
    });
  });

  $(".service-card").hover(
    function () {
      $(this)
        .find(".service-icon")
        .css("background-color", "rgba(12, 77, 162, 0.2)");
    },
    function () {
      $(this)
        .find(".service-icon")
        .css("background-color", "rgba(12, 77, 162, 0.1)");
    },
  );

  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  window.scrollToContact = function () {
    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top - 70,
      },
      800,
    );
  };

  window.sendMessage = function () {
    $("#contactForm").submit();
  };
});
