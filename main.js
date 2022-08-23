const menuToggler = document.querySelector("#check");
const mobileMenu = document.querySelector(".mobile-menu");
menuToggler.addEventListener("click", () => {
  if (menuToggler.checked) {
    mobileMenu.classList.add("open");
    return;
  }

  mobileMenu.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    autoplay: true,
    interval: 7000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  splide.mount();
});

const preloader = document.querySelector(".preloader");
const popupBtn = document.getElementById("popup_toggle");
const tabsBtn = document.querySelectorAll(".tabs_item")
const tabs = document.querySelectorAll(".latest_main")

window.addEventListener("load", () => {
  preloader.classList.add("disable");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 100);
});

tabsBtn.forEach(tab => {
  tab.addEventListener("click", function() {
    tabsBtn.forEach(btn => {btn.classList.remove("active")})
    tabs.forEach(tab => {tab.style.display = "none"})
    this.classList.add("active")
    document.getElementById(this.dataset.id).style.display = "block"
  })
})

popupBtn.addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.body.style.overflow = "scroll";
});

window.addEventListener("load", () => {
  setTimeout(() => {
    popupBtn.click();
  }, 5000);
});

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/62e145b637898912e95fee06/1g8vvgls4";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();