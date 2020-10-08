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

function addClassCheck(li) {
  if (li.className === "check") {
    li.classList.remove("check");
    return;
  } else {
    li.classList.add("check");
    return;
  }
}

function addClassChose(div) {
  if (div.className === "filter__bottom__item") {
    div.classList.add("chose");
    return;
  } else if (div.className === "filter__bottom__item chose") {
    div.classList.remove("chose");
    return;
  }
}

function addClassFiltered(div) {
  if (div.className === "filter__top__direction-right__item -filtered") {
    div.classList.add("-active");
    return;
  } else if (
    div.className === "filter__top__direction-right__item -filtered -active"
  ) {
    div.classList.remove("-active");
  }
}
