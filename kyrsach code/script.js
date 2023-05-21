let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");

  searchForm.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove(
    "active"
  ); /*  чтобы активан была только одно дейстиве */
};

let korzinaForm = document.querySelector(".korzina-form");

document.querySelector("#shop-btn").onclick = () => {
  korzinaForm.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove(
    "active"
  ); /*  чтобы активан была только одно дейстиве */
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};
