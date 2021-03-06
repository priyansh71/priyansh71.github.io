const button = document.querySelector(".data");
const nav = document.querySelector(".nav-link")

button.addEventListener("mouseover", () => {
  button.classList.toggle("active");
  console.log("Button was clicked!");
}, false);


nav.addEventListener("mouseover", () => {
  nav.classList.toggle("active");
  console.log("The link was change");
}, false);

// nav.addEventListener("mouseover", () => {
//   nav.classList.lastElementChild.toggle("active");
// }, false);