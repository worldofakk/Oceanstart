// swiper init
let swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// filter dropdown add class .check

const lists = document.querySelectorAll("ul.menu__drop li");
lists.forEach(function (i) {
  i.addEventListener("click", (e) => {
    e.target.classList.toggle("check");
  });
});

// filter boxbutton add class .chose
const filterBoxs = document.querySelectorAll(".filter__bottom__item");
filterBoxs.forEach(function (i) {
  i.addEventListener("click", (e) => {
    e.target.classList.toggle("chose");
  });
});

// filter sort add class .-active
const filteredisActive = document.querySelector(".-filtered");
filteredisActive.addEventListener("click", (e) => {
  e.target.classList.toggle("-active");
});
