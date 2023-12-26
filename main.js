// loader
const load = () => {
  document.getElementById("load").classList.add("d-none");
};
// navbar
window.addEventListener("scroll", () => {
  var pageYOffset = Math.round(window.scrollY);
  if (pageYOffset >= 750) {
    document.getElementById("navbar").classList.add("sticky-top", "shadow");
    document.getElementsByClassName("container")[0].classList.remove("py-2");
  } else if (pageYOffset <= 750) {
    document.getElementById("navbar").classList.remove("sticky-top", "shadow");
  }
});
// offcanvas close after click link in mobile
jQuery("#offcanvasNavbar .navbar-nav a").click(function () {
  jQuery(".offcanvas").offcanvas("hide");
});
// chef social links height width set when page reload
const chefImg = document.getElementsByClassName("chefimg")[0];
const chefImgHeight = chefImg.offsetHeight;
const chefImgWidth = chefImg.offsetWidth;

const chefsocial1 = document.getElementsByClassName("chefsocial")[0];
chefsocial1.style.height = chefImgHeight - 8 + "px";
chefsocial1.style.width = chefImgWidth - 8 + "px";

const chefsocial2 = document.getElementsByClassName("chefsocial")[1];
chefsocial2.style.height = chefImgHeight - 8 + "px";
chefsocial2.style.width = chefImgWidth - 8 + "px";

const chefsocial3 = document.getElementsByClassName("chefsocial")[2];
chefsocial3.style.height = chefImgHeight - 8 + "px";
chefsocial3.style.width = chefImgWidth - 8 + "px";

// carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>",
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// weekmenu changes
let breakfastbtn = document.getElementById("breakfast");
let lunchbtn = document.getElementById("lunch");
let dinnerbtn = document.getElementById("dinner");
let breakfast_title = document.getElementById("breakfasttitle");
let lunch_title = document.getElementById("lunchtitle");
let dinner_title = document.getElementById("dinnertitle");

let item1 = document.getElementById("weekmenu-item1");
let item2 = document.getElementById("weekmenu-item2");
let item3 = document.getElementById("weekmenu-item3");
let item4 = document.getElementById("weekmenu-item4");
let item5 = document.getElementById("weekmenu-item5");
let item6 = document.getElementById("weekmenu-item6");

breakfastbtn.addEventListener("click", () => {
  breakfast_title.classList.add("rose");
  lunch_title.classList.remove("rose");
  dinner_title.classList.remove("rose");

  item1.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-01.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Fresh Chicken Salad</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$10.50</h5></div></div>';

  item2.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-02.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Orange Juice</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$8.50</h5></div></div>';

  item3.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-03.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Fruit Salad</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$9.90</h5></div></div>';

  item4.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-04.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Eggs Omelette</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$6.50</h5></div></div>';

  item5.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-05.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Dollma Pire</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$5.00</h5></div></div>';

  item6.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-06.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Omelette & Cheese</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$4.10</h5></div></div>';
});

lunchbtn.addEventListener("click", () => {
  breakfast_title.classList.remove("rose");
  lunch_title.classList.add("rose");
  dinner_title.classList.remove("rose");
  item1.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-03.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Fruit Salad</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$9.90</h5></div></div>';

  item2.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-01.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Fresh Chicken Salad</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$10.50</h5></div></div>';

  item3.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-02.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Orange Juice</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$8.50</h5></div></div>';

  item4.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-06.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Omelette & Cheese</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$4.10</h5></div></div>';

  item5.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-04.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Eggs Omelette</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$6.50</h5></div></div>';

  item6.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-05.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Dollma Pire</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$5.00</h5></div></div>';
});

dinnerbtn.addEventListener("click", () => {
  breakfast_title.classList.remove("rose");
  lunch_title.classList.remove("rose");
  dinner_title.classList.add("rose");

  item1.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-02.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Orange Juice</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$8.50</h5></div></div>';

  item2.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-05.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Dollma Pire</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$5.00</h5></div></div>';

  item3.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-04.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Eggs Omelette</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$6.50</h5></div></div>';

  item4.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-03.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Fruit Salad</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$9.90</h5></div></div>';

  item5.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-06.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Omelette & Cheese</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$4.10</h5></div></div>';

  item6.innerHTML =
    '<div class="d-flex align-items-center"><div><img src="images/tab-item-01.png" class="rounded-1" alt=""></div><div class="mx-3"><h4 class="fw-bold">Fresh Chicken Salad</h4><p class="mb-0">Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p></div><div class="weekmenu-price rounded-1 text-white py-4 px-3"><h5 class="mb-0">$10.50</h5></div></div>';
});
