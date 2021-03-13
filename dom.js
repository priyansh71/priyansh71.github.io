document.querySelector(".data").addEventListener("click", () => {
  button.classList.toggle("active");
}), false;

document.querySelectorAll(".hola").forEach(item => item.addEventListener("mouseover", () => {
  item.classList.toggle("active");
}),
  false);

document.querySelectorAll("hr").forEach(lol => lol.addEventListener("mouseover", () => {
  lol.classList.toggle("active");
}),
  false);

document.querySelectorAll(".contact").forEach(notokay => notokay.addEventListener("mouseover", () => {
  notokay.classList.toggle("active");
}),
  false);

document.querySelectorAll(".fiesta").forEach(infinite=> infinite.addEventListener("mouseover", () => {
  infinite.classList.toggle("active");
}),
  false);

document.querySelectorAll(".nav-link").forEach(haha => haha.addEventListener("click", () => {
  haha.classList.toggle("active");
}),
  false);