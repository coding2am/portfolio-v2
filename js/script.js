//  page open
let pageOpen = (page, event) => {
  event.preventDefault();

  if (page == "home") {
    $("#home").show();
    $("#about").hide();
    $("#project").hide();
    $("#service").hide();

    $("#home-btn").css("color", "#0076c6");
    $("#about-btn").css("color", "#000");
    $("#project-btn").css("color", "#000");
    $("#service-btn").css("color", "#000");
  }

  if (page == "about") {
    $("#about").show();
    $("#home").hide();
    $("#project").hide();
    $("#service").hide();

    $("#about-btn").css("color", "#0076c6");
    $("#home-btn").css("color", "#000");
    $("#project-btn").css("color", "#000");
    $("#service-btn").css("color", "#000");
  }

  if (page == "project") {
    $("#project").show();
    $("#home").hide();
    $("#about").hide();
    $("#service").hide();

    $("#project-btn").css("color", "#0076c6");
    $("#home-btn").css("color", "#000");
    $("#about-btn").css("color", "#000");
    $("#service-btn").css("color", "#000");
  }

  if (page == "service") {
    $("#service").show();
    $("#project").hide();
    $("#home").hide();
    $("#about").hide();
    $("#service-btn").css("color", "#0076c6");
    $("#home-btn").css("color", "#000");
    $("#about-btn").css("color", "#000");
    $("#project-btn").css("color", "#000");
  }
};

$(".owl-carousel").owlCarousel({
  item: 3,
  margin: 10,
  singleItem: true,
  autoplay: false,
  autoplayTimeout: 5000,
  loop: false,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    600: {
      items: 2,
      dots: false,
    },
    1200: {
      items: 3,
    },
  },
});

$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [3500]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

$(document).ready(function () {
  // init
  $("#home").show();
  $("#about").hide();
  $("#project").hide();
  $("#service").hide();
  $("#home-btn").css("color", "#0076c6");

  $("#mybod").text(calculateAge("2000-04-21"));

  function calculateAge(birthDate) {
    const now = new Date();
    const diffInMs = now - new Date(birthDate);
    const diffInYears = diffInMs / 31536000000; // 1000 * 60 * 60 * 24 * 365.25
    const diffInMonths = (diffInYears % 1) * 12;
    const diffInDays = Math.floor((diffInMonths % 1) * 30);

    const years = Math.floor(diffInYears);
    const months = Math.floor(diffInMonths);
    const days = diffInDays;

    const yearString = years > 1 ? "years" : "year";
    const monthString = months > 1 ? "months" : "month";
    const dayString = days > 1 ? "days" : "day";

    return `${years} ${yearString}, ${months} ${monthString}, and ${days} ${dayString}`;
  }

  // Bouncing Letters
  document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
    element.addEventListener("mouseover", (e) => bounce(e.target));
  });

  function bounce(letter) {
    if (!letter.classList.contains("bounce")) {
      letter.classList.add("bounce");
      setTimeout(function () {
        letter.classList.remove("bounce");
      }, 1000);
    }
  }
});
