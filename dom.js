const button = document.querySelector(".data");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  console.log("lol");
}, false);

const hola = document.querySelectorAll(".hola");
hola.forEach(item => item.addEventListener("mouseover", () => {
  item.classList.toggle("active");
}),
  false);

  const hooray = document.querySelectorAll("hr");
hooray.forEach(lol => lol.addEventListener("mouseover", () => {
  lol.classList.toggle("active");
}),
  false);

const nav= document.querySelectorAll(".nav-link"); 
nav.forEach(haha => haha.addEventListener("click", () => {
  haha.classList.toggle("active");
}),
  false);