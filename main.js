const card = document.querySelector(".card");
const text = document.querySelector("#text");
const button = document.querySelector("#button");
const audio = new Audio("santa.mp3")

button.addEventListener("click", () => {
  button.style.display = "none";
  text.style.display = "block";

  audio.play();

  setTimeout(() => {
    text.style.opacity = "1";
  }, 800);
});
