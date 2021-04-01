
let button = document.querySelector(".data");
button.addEventListener("click", () => {
  button.classList.toggle("active");
}), false;

document.querySelectorAll(".nav-link").forEach(haha => haha.addEventListener("click", () => {
  haha.classList.toggle("active");
}),
  false);

document.querySelectorAll(".card").forEach(Element => Element.addEventListener("click", () => {
  Element.classList.toggle("active");
}),
  false);

