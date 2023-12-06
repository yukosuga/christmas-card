import VanillaTilt from "vanilla-tilt";

const card = document.querySelector(".card");
VanillaTilt.init(card, {
  max: 25,
  speed: 400,
});
