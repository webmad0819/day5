// config
const randomColor = true;

/////////////////////////////////////////////////
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const bodyDOMEl = document.body;
const colorScale = [
  "#ffcc00",
  "#fabada",
  "#ff0000",
  "#cafe00",
  "#cacaca",
  "#8bff2d"
];

Array(250)
  .fill()
  .forEach((x, idx) => {
    let randomRotation = randomInt(0, 360);
    let speed = randomInt(1, 5) / 5;

    let divDOMEl = document.createElement("div");

    divDOMEl.style.backgroundColor =
      colorScale[randomInt(0, colorScale.length - 1)];

    if (randomColor) {
      divDOMEl.style.backgroundColor = `rgba(${randomInt(0, 255)}, ${randomInt(
        0,
        255
      )}, ${randomInt(0, 255)}, ${Math.random()})`;
    } else {
      divDOMEl.style.transform = `rotate(${randomRotation}deg)`;
      divDOMEl.style.opacity = 0.55;
    }

    divDOMEl.innerHTML = idx + 1

    bodyDOMEl.appendChild(divDOMEl);
    divDOMEl.onmousemove = function() {
      // divDOMEl.style.opacity = 0;
      divDOMEl.innerHTML = "visitado"
      divDOMEl.setAttribute("class", "visited")
    };

    setInterval(() => {
      divDOMEl.style.transform = `rotate(${(randomRotation += speed)}deg)`;
    }, 10);
  });
