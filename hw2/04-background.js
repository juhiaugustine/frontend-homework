const timeInterval = 3000;

const body = document.body;
let identifier = null;

let button = document.getElementsByClassName("btn")[0];
let timeIntervalInput = document.getElementById("timeInput");

button.addEventListener("click", function (event) {
  event.preventDefault();
  if (button.value === "Stop") {
    clearInterval(identifier);
    identifier = null;
    button.value = "Start";
    button.classList.remove("btn-danger");
    button.classList.add("btn-primary");
  } else {
    identifier = setInterval(
      setBackgroundColor,
      timeIntervalInput.value.length == 0
        ? timeInterval
        : timeIntervalInput.value * 1000
    );
    button.value = "Stop";
    button.classList.remove("btn-primary");
    button.classList.add("btn-danger");
  }
});

function generateRandomColor(alpha = 0.5) {
  const hue = Math.floor(Math.random() * 360);
  return `hsla(${hue}, 50%, 50%, ${alpha})`;
}

function setBackgroundColor() {
  body.style.backgroundColor = generateRandomColor();
}

setBackgroundColor();
