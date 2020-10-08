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
for (let i = 0; i < lists.length; i++) {
  let list = lists[i];
  list.addEventListener("click", (e) => {
    e.target.classList.toggle("check");
  });
}

// filter boxbutton add class .chose
const filterBoxs = document.querySelectorAll(".filter__bottom__item");
for (let i = 0; i < filterBoxs.length; i++) {
  let filterBox = filterBoxs[i];
  filterBox.addEventListener("click", (e) => {
    e.target.classList.toggle("chose");
  });
}

// filter sort add class .-active
const filteredisActive = document.querySelector(".-filtered");
filteredisActive.addEventListener("click", (e) => {
  e.target.classList.toggle("-active");
});
