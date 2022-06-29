//DOM
const clickHeading = document.querySelector("#click-title");
const autoHeading = document.querySelector("#auto-title");
const clickBtn = document.querySelector("#click-btn");
const autoBtn = document.querySelector("#auto-btn");

//Game Variables
let clicks = 0;
let cost = 5;
let clicksPerSecond = 0;
let autoClickerAmount = 0;

//Event Listener
clickBtn.addEventListener("click", () => {
  clicks++;
  clickHeading.innerHTML = `Clicks: ${clicks}`;
});

autoBtn.addEventListener("click", () => {
  if (clicks >= 5) {
    clicks -= 5;
    clicksPerSecond += 1;
    autoClickerAmount += 1;
  }
});

//Functions
function autoClicker() {
  clicks += clicksPerSecond;
}

// Game loop
window.setInterval(function () {
  autoClicker();
  clickHeading.innerHTML = `Clicks: ${clicks}`;
  autoHeading.innerHTML = `Autoclickers: ${autoClickerAmount}`;
}, 500);
