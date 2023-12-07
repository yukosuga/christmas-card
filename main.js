const card = document.querySelector(".card");
const text = document.querySelector("#text");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  console.log("clicked");
  button.style.display = "none";
  text.style.display = "block";
  setTimeout(() => {
    text.style.opacity = "1"; // Fade in the play text
  }, 50);
});
