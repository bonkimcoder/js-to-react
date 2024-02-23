const resultEl = document.getElementById("result");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
let count = 0;

decreaseBtn.addEventListener("click", () => {
  resultEl.innerHTML = --count;
});
resetBtn.addEventListener("click", () => {
  count = 0;
  resultEl.innerHTML = count;
});
increaseBtn.addEventListener("click", () => {
  resultEl.innerHTML = ++count;
});
