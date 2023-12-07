const body = document.body;
const card = document.querySelector(".card");
const text = document.querySelector("#text");
const button = document.querySelector("#button");

const amountOfSnow = 30;
let snowInterval;

const snowflakeEffect = () => {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.textContent = "❄";
  snowflake.style.fontSize = Math.random() * 25 + 1 + "px";
  snowflake.style.left = Math.random() * window.innerWidth -50 + "px";
  snowflake.style.opacity = Math.random();
  body.appendChild(snowflake);

  const snowFall = () => {
    let swingDirection = 20;
    const swingWave = Math.random() * 100;
    const startTime = performance.now();

    const animateSnowflake = (time) => {
      const timePassed = time - startTime;
      const speed = Math.random() * 2000 + 10000;
      const distance = window.innerHeight;

      const progress = timePassed / speed;
      snowflake.style.top = progress * distance + "px";
      snowflake.style.left =
        parseFloat(snowflake.style.left) + swingDirection * swingWave + "px";
      swingDirection = -swingDirection;

      const reachedBottom = parseFloat(snowflake.style.top) > distance - snowflakeHeight;

  if (reachedBottom) {
    snowflake.remove();
  } else if (progress < 1) {
    requestAnimationFrame(animateSnowflake);
  } else {
    snowflake.remove();
  }
    };
  };
  snowFall();
};

button.addEventListener("click", () => {
  console.log("clicked");
  button.style.display = "none";
  text.style.display = "block";
  setTimeout(() => {
    text.style.opacity = "1";
  }, 50);
  snowInterval = window.setInterval(snowflakeEffect, amountOfSnow);
});
