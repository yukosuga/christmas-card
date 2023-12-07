const card = document.querySelector(".card");
const text = document.querySelector("#text");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  button.style.display = "none";
  text.style.display = "block";
  setTimeout(() => {
    text.style.opacity = "1";
  }, 50);
});
